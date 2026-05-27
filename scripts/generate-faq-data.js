const { PrismaClient } = require("@prisma/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function generateFaqData() {
  console.log("🚀 Fetching colleges from database using raw SQL...");

  // Fetch main colleges using Prisma (this works)
  const mainColleges = await prisma.college.findMany({
    select: { name: true, city: true, state: true, stream: true, type: true, fees_ug_inr: true },
    orderBy: { name: "asc" }
  });

  // Fetch Bihar Credit Card colleges using RAW SQL (bypasses column name issues)
  const biharCollegesRaw = await prisma.$queryRaw`
    SELECT "CollegeName", "DistrictName", college_type 
    FROM "BiharCreditCardCollege" 
    WHERE "CollegeName" IS NOT NULL 
    ORDER BY "CollegeName" ASC
  `;

  const biharColleges = biharCollegesRaw.map(c => ({
    CollegeName: c.CollegeName,
    DistrictName: c.DistrictName,
    college_type: c.college_type
  }));

  console.log(`✅ Found ${mainColleges.length} main colleges`);
  console.log(`✅ Found ${biharColleges.length} Bihar Credit Card colleges`);

  // Get all college names for search
  const allBiharCollegeNames = biharColleges.map(c => c.CollegeName).filter(name => name);
  const allMainCollegeNames = mainColleges.map(c => c.name);

  // Generate the FAQ data file
  const faqData = `export const faqData = {
  // College Statistics
  totalMainColleges: ${mainColleges.length},
  totalBiharCreditCardColleges: ${biharColleges.length},
  
  // ALL Bihar Credit Card College Names (${biharColleges.length} colleges)
  allBiharCollegeNames: ${JSON.stringify(allBiharCollegeNames.slice(0, 500), null, 2)},
  
  // Sample Main College Names (first 200)
  sampleMainCollegeNames: ${JSON.stringify(allMainCollegeNames.slice(0, 200), null, 2)},

  // FAQ Sections
  biharCreditCard: [
    { keywords: ["bihar credit card", "student credit card", "bscc", "bihar student credit"], answer: "🎓 Bihar Student Credit Card Scheme\n\n💰 Loan: Up to ₹4 lakhs at 0% interest\n✅ No collateral required\n📄 Documents: Domicile, 10th/12th marksheets, Admission letter, Aadhar, Income certificate, Photos, Bank passbook\n🌐 Apply: biharcreditcard.in\n\n📚 ${biharColleges.length}+ colleges are eligible!" },
    
    { keywords: ["eligible colleges", "bihar credit card colleges", "bscc colleges"], answer: "📚 ${biharColleges.length}+ colleges are eligible for Bihar Credit Card Scheme. View the complete list on our Bihar Credit Card page." },
    
    { keywords: ["document", "documents", "required documents"], answer: "📄 Documents Required for Bihar Credit Card:\n\n1. Bihar Domicile Certificate\n2. 10th and 12th Mark Sheets\n3. College Admission Letter\n4. Aadhar Card\n5. Income Certificate\n6. Passport Size Photos (4 copies)\n7. Bank Account Passbook" },
    
    { keywords: ["eligibility", "who can apply"], answer: "✅ Eligibility: Bihar domicile, Age 18-25 years, 10+2 pass from Bihar board, Admission in recognized college." }
  ],

  colleges: [
    { keywords: ["engineering colleges", "b tech colleges"], answer: "🏛️ Top Engineering Colleges: NIT Patna (₹1.5L/year), IIT Patna (₹2.2L/year), MIT Muzaffarpur (₹60K/year), Bhagalpur College of Engineering (₹60K/year). ${mainColleges.length}+ colleges available." },
    
    { keywords: ["medical colleges", "mbbs colleges", "aiims"], answer: "🏥 Top Medical Colleges: AIIMS Patna (₹6,900/year), Patna Medical College, Nalanda Medical College, Darbhanga Medical College." },
    
    { keywords: ["minimum fees", "lowest fees", "cheapest"], answer: "💰 Lowest Fees: Government colleges ₹15K-20K/year. Engineering: NIT Patna ₹1.5L/year. Medical: AIIMS Patna ₹6,900/year." },
    
    { keywords: ["college list", "all colleges", "total colleges"], answer: "📊 Our website has ${mainColleges.length}+ colleges from across India. We also have ${biharColleges.length}+ Bihar Credit Card eligible colleges. Visit our Colleges page to browse all!" }
  ],

  courses: [
    { keywords: ["btech", "b tech", "engineering course"], answer: "📚 B.Tech - 4 years | Eligibility: 10+2 PCM 50% | Entrance: JEE Main | Fees: Govt ₹50K-1.5L/year" },
    { keywords: ["mbbs", "doctor course", "medical course"], answer: "📚 MBBS - 5.5 years | Eligibility: 10+2 PCB 50% | Entrance: NEET | Fees: Govt ₹6,900-50K/year" },
    { keywords: ["mba", "management course"], answer: "📚 MBA - 2 years | Eligibility: Bachelor's degree 50% | Entrance: CAT | Fees: IIMs ₹20-25L" },
    { keywords: ["bca", "computer application"], answer: "📚 BCA - 3 years | Eligibility: 10+2 50% | Fees: ₹30K-1.5L/year | Career: Software Developer" }
  ],

  exams: [
    { keywords: ["neet 2026", "neet exam"], answer: "📝 NEET 2026 - Date: May 2026 | Mode: Pen & Paper | Total Marks: 720 | Marking: +4/-1 | Eligibility: 10+2 PCB 50%" },
    { keywords: ["jee main 2026", "jee exam"], answer: "📝 JEE Main 2026 - Sessions: Jan & April | Mode: CBT | Total Marks: 300 | Marking: +4/-1" },
    { keywords: ["cat 2026", "cat exam"], answer: "📝 CAT 2026 - Date: November 2026 | Mode: CBT | Total Marks: 198 | Sections: VARC, DILR, QA" }
  ],

  general: [
    { keywords: ["contact", "phone", "whatsapp", "helpline"], answer: "📞 Contact: +91-8809976942 | Email: rgarnaveducons@gmail.com | Hours: Mon-Sat, 10AM-7PM" },
    { keywords: ["hi", "hello", "hey"], answer: "🎓 Hello! Ask me about Bihar Credit Card, colleges, courses, NEET, JEE, or CAT! How can I help you today?" },
    { keywords: ["thanks", "thank you"], answer: "🎓 You're welcome! Feel free to ask if you have more questions!" }
  ]
};`;

  // Write the file
  fs.writeFileSync("app/data/faqData.js", faqData);
  console.log("\n✅ FAQ data file generated successfully!");
  console.log(`📊 Main colleges: ${mainColleges.length}`);
  console.log(`📊 Bihar Credit Card colleges: ${biharColleges.length}`);
  console.log(`📊 TOTAL: ${mainColleges.length + biharColleges.length} colleges indexed`);
  
  await prisma.$disconnect();
}

generateFaqData().catch(console.error);