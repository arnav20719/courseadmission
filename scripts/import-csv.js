const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const prisma = new PrismaClient();

async function importColleges() {
  console.log("Starting import...");
  
  const results = [];
  let added = 0;
  let skipped = 0;
  
  fs.createReadStream(path.join(__dirname, "../data/india_colleges.csv"))
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      console.log(`Found ${results.length} colleges in CSV`);
      
      for (const row of results) {
        const name = row.name;
        const city = row.city || "";
        const state = row.state || "India";
        const collegeType = row.type || "Private";
        const fees = row.fees_ug_inr ? parseInt(row.fees_ug_inr) : null;
        
        let slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        
        let stream = "Multi-disciplinary";
        if (collegeType.includes("Engineering") || collegeType.includes("IIT") || collegeType.includes("NIT") || collegeType.includes("IIIT")) {
          stream = "Engineering";
        } else if (collegeType.includes("Medical") || collegeType.includes("AIIMS")) {
          stream = "Medical";
        } else if (collegeType.includes("Management") || collegeType.includes("IIM")) {
          stream = "Management";
        } else if (collegeType.includes("Law")) {
          stream = "Law";
        }
        
        let collegeCategory = "Private";
        if (collegeType.includes("IIT") || collegeType.includes("NIT") || collegeType.includes("IIIT") || collegeType.includes("AIIMS") || collegeType.includes("Government")) {
          collegeCategory = "Government";
        }
        
        try {
          const existing = await prisma.college.findUnique({ where: { slug } });
          if (!existing) {
            await prisma.college.create({
              data: {
                name,
                slug,
                stream,
                state,
                city,
                type: collegeCategory,
                fees,
                about: `${name} is located in ${city}, ${state}.`
              }
            });
            added++;
            if (added % 50 === 0) console.log(`Added ${added} colleges...`);
          } else {
            skipped++;
          }
        } catch (err) {
          skipped++;
        }
      }
      
      console.log(`\n🎉 Import completed!`);
      console.log(`✅ Added: ${added} colleges`);
      console.log(`⏭️ Skipped: ${skipped} colleges`);
      await prisma.$disconnect();
    });
}

importColleges();