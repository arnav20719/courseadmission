/* prisma/seed.js */
require("dotenv/config");
const { PrismaClient } = require("@prisma/client");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is missing. Check your .env file in the project root."
  );
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Supabase needs SSL
});

const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

function parseAverageINR(input) {
  if (!input) return null;
  const s = String(input);
  const matches = s.match(/\d[\d,]*/g);
  if (!matches || matches.length === 0) return null;

  const nums = matches
    .map((m) => Number(m.replace(/,/g, "")))
    .filter((n) => Number.isFinite(n) && n > 0);

  if (nums.length === 0) return null;
  if (nums.length === 1) return Math.round(nums[0]);

  const avg = (nums[0] + nums[1]) / 2;
  return Math.round(avg);
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .trim();
}

async function makeUniqueCollegeSlug(name, state) {
  const base = slugify(name);
  if (!base) return `college-${Date.now()}`;

  let slug = base;
  let exists = await prisma.college.findUnique({ where: { slug } });
  if (!exists) return slug;

  const statePart = slugify(state || "india");
  slug = `${base}-${statePart}`;
  exists = await prisma.college.findUnique({ where: { slug } });
  if (!exists) return slug;

  let i = 2;
  while (true) {
    const candidate = `${base}-${statePart}-${i}`;
    const taken = await prisma.college.findUnique({
      where: { slug: candidate },
    });
    if (!taken) return candidate;
    i++;
    if (i > 2000) return `${base}-${statePart}-${Date.now()}`;
  }
}

function parseCourses(coursesText) {
  if (!coursesText) return [];
  return String(coursesText)
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);
}

const colleges = [
  {
    name: "Vellore Institute of Technology (VIT)",
    state: "Tamil Nadu",
    city: "Vellore",
    stream: "Engineering, Information Technology",
    type: "Private",
    feesText: "₹2,00,000 - ₹5,00,000 annually",
    about:
      "Ranked among the premier engineering colleges in India, known for its innovative academic approaches and strong placement records",
    coursesText: "B.Tech, M.Tech, MCA",
  },
  {
    name: "SRM University",
    state: "Tamil Nadu",
    city: "Chennai",
    stream: "Engineering",
    type: "Private",
    feesText: null,
    about:
      "A leading private university in South India offering extensive infrastructure and diverse technical programs",
    coursesText: "B.Tech, M.Tech",
  },
  {
    name: "PSGR Krishnammal College for Women",
    state: "Tamil Nadu",
    city: "Coimbatore",
    stream: "Arts, Science, Commerce",
    type: "Private",
    feesText: null,
    about:
      "Ranked #9 in India by NIRF 2025, it is a premier institution for women's education in Southern India",
    coursesText: "B.A., B.Sc, B.Com",
  },
  {
    name: "Christian Medical College (CMC)",
    state: "Tamil Nadu",
    city: "Vellore",
    stream: "Medical, Nursing",
    type: "Private",
    feesText: null,
    about:
      "A world-renowned private medical college and hospital known for its excellence in healthcare education and research",
    coursesText: "MBBS, MD, MS, B.Sc Nursing",
  },
  {
    name: "Lovely Professional University (LPU)",
    state: "Punjab",
    city: "Phagwara",
    stream: "Engineering, Management, Law, Pharmacy, Agriculture, Nursing",
    type: "Private",
    feesText: null,
    about:
      "One of India’s largest private universities, offering a vast array of courses and hosting students from across the globe",
    coursesText: "B.Tech, MBA, LL.B, B.Pharm, B.Sc Agriculture, B.Ed",
  },
  {
    name: "Chandigarh University",
    state: "Punjab",
    city: "Mohali",
    stream: "Engineering, Management, Information Technology, Pharmacy",
    type: "Private",
    feesText: null,
    about:
      "A rapidly growing institution recognized for its industry-aligned curriculum and high placement numbers",
    coursesText: "B.Tech, MBA, BCA, MCA, B.Pharm",
  },
  {
    name: "CGC Landran",
    state: "Punjab",
    city: "Mohali",
    stream: "Engineering, Management, Hotel Management, Pharmacy, IT",
    type: "Private",
    feesText: null,
    about:
      "A major educational hub in Punjab offering high-quality technical education and industry placement opportunities",
    coursesText: "B.Tech, MBA, B.HM, B.Pharm, BCA",
  },
  {
    name: "Amity University, Punjab",
    state: "Punjab",
    city: "Mohali",
    stream: "Engineering, Commerce & Banking, Mass Communication",
    type: "Private",
    feesText: null,
    about:
      "Part of the globally recognized Amity Group, providing state-of-the-art facilities and industry-linked academic programs",
    coursesText: "B.Tech, B.Com, BJMC",
  },
  {
    name: "GNA University",
    state: "Punjab",
    city: "Phagwara",
    stream: "Engineering, Management",
    type: "Private",
    feesText: null,
    about:
      "Provides industry-aligned technical and management education with a focus on practical application and employability",
    coursesText: "B.Tech, MBA",
  },
];

async function main() {
  console.log(`Seeding colleges: ${colleges.length}`);

  for (const c of colleges) {
    const fees = parseAverageINR(c.feesText);
    const slug = await makeUniqueCollegeSlug(c.name, c.state);

    const college = await prisma.college.upsert({
      where: { slug },
      update: {
        name: c.name,
        stream: c.stream || "",
        state: c.state || "",
        city: c.city || "",
        type: c.type || "Private",
        fees,
        about: c.about || null,
      },
      create: {
        name: c.name,
        slug,
        stream: c.stream || "",
        state: c.state || "",
        city: c.city || "",
        type: c.type || "Private",
        fees,
        about: c.about || null,
      },
    });

    const courseNames = parseCourses(c.coursesText);
    for (const courseName of courseNames) {
      const existing = await prisma.course.findFirst({
        where: { collegeId: college.id, name: courseName },
      });

      if (!existing) {
        await prisma.course.create({
          data: { collegeId: college.id, name: courseName },
        });
      }
    }

    console.log(
      `✓ ${college.state} — ${college.name} (${courseNames.length} courses)`
    );
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });