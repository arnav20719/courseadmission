const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const colleges = [
  { name: "Indian Institute of Technology Delhi", slug: "iit-delhi", state: "Delhi", city: "New Delhi", stream: "Engineering", type: "Government", fees: 220000 },
  { name: "Indian Institute of Technology Bombay", slug: "iit-bombay", state: "Maharashtra", city: "Mumbai", stream: "Engineering", type: "Government", fees: 220000 },
  { name: "Indian Institute of Technology Madras", slug: "iit-madras", state: "Tamil Nadu", city: "Chennai", stream: "Engineering", type: "Government", fees: 220000 },
  { name: "IIT Kanpur", slug: "iit-kanpur", state: "Uttar Pradesh", city: "Kanpur", stream: "Engineering", type: "Government", fees: 220000 },
  { name: "IIT Kharagpur", slug: "iit-kharagpur", state: "West Bengal", city: "Kharagpur", stream: "Engineering", type: "Government", fees: 220000 },
  { name: "IIT Roorkee", slug: "iit-roorkee", state: "Uttarakhand", city: "Roorkee", stream: "Engineering", type: "Government", fees: 220000 },
  { name: "IIT Guwahati", slug: "iit-guwahati", state: "Assam", city: "Guwahati", stream: "Engineering", type: "Government", fees: 220000 },
  { name: "NIT Trichy", slug: "nit-trichy", state: "Tamil Nadu", city: "Tiruchirappalli", stream: "Engineering", type: "Government", fees: 150000 },
  { name: "NIT Surathkal", slug: "nit-surathkal", state: "Karnataka", city: "Mangalore", stream: "Engineering", type: "Government", fees: 150000 },
  { name: "NIT Warangal", slug: "nit-warangal", state: "Telangana", city: "Warangal", stream: "Engineering", type: "Government", fees: 150000 },
  { name: "IIM Ahmedabad", slug: "iim-ahmedabad", state: "Gujarat", city: "Ahmedabad", stream: "Management", type: "Government", fees: 2500000 },
  { name: "IIM Bangalore", slug: "iim-bangalore", state: "Karnataka", city: "Bangalore", stream: "Management", type: "Government", fees: 2500000 },
  { name: "IIM Calcutta", slug: "iim-calcutta", state: "West Bengal", city: "Kolkata", stream: "Management", type: "Government", fees: 2500000 },
  { name: "AIIMS Delhi", slug: "aiims-delhi", state: "Delhi", city: "New Delhi", stream: "Medical", type: "Government", fees: 20000 },
  { name: "VIT Vellore", slug: "vit-vellore", state: "Tamil Nadu", city: "Vellore", stream: "Engineering", type: "Private", fees: 200000 },
  { name: "SRM University", slug: "srm-university", state: "Tamil Nadu", city: "Chennai", stream: "Engineering", type: "Private", fees: 250000 },
  { name: "Manipal University", slug: "manipal-university", state: "Karnataka", city: "Manipal", stream: "Engineering, Medical", type: "Private", fees: 400000 },
  { name: "Amity University Noida", slug: "amity-university-noida", state: "Uttar Pradesh", city: "Noida", stream: "Engineering, Management", type: "Private", fees: 180000 },
  { name: "Lovely Professional University", slug: "lpu", state: "Punjab", city: "Phagwara", stream: "Engineering, Management", type: "Private", fees: 160000 },
  { name: "Chandigarh University", slug: "chandigarh-university", state: "Punjab", city: "Mohali", stream: "Engineering, Management", type: "Private", fees: 150000 }
];

async function main() {
  console.log("Adding colleges...");
  let added = 0;
  for (const college of colleges) {
    const existing = await prisma.college.findUnique({ where: { slug: college.slug } });
    if (!existing) {
      await prisma.college.create({ data: college });
      console.log("Added: " + college.name);
      added++;
    } else {
      console.log("Exists: " + college.name);
    }
  }
  console.log("Done! Added " + added + " colleges.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });