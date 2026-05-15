const { PrismaClient } = require("@prisma/client"); 
const fs = require("fs"); 
const path = require("path"); 
const prisma = new PrismaClient(); 
 
async function importColleges() { 
  console.log("Starting college import..."); 
  const csvPath = path.join(__dirname, "../data/india_colleges.csv"); 
  const csvContent = fs.readFileSync(csvPath, "utf-8"); 
  const lines = csvContent.split("\n"); 
  const headers = lines[0].split(","); 
  let imported = 0; 
    const line = lines[i]; 
    if (!line.trim()) continue; 
    const values = line.split(","); 
    const name = values[headers.indexOf("name")]; 
    const city = values[headers.indexOf("city")]; 
    const state = values[headers.indexOf("state")]; 
    const type = values[headers.indexOf("type")]; 
    if (!name || !state) continue; 
    let stream = "General"; 
    if (type.includes("Engineering")) stream = "Engineering"; 
    else if (type.includes("Medical")) stream = "Medical"; 
    else if (type.includes("Management")) stream = "Management"; 
    else if (type.includes("Law")) stream = "Law"; 
    const slug = name.toLowerCase().replace(/[a-z0-9]+/g, "-"); 
    const fees = parseInt(values[headers.indexOf("fees_ug_inr")]) || null; 
    try { 
      const existing = await prisma.college.findUnique({ where: { slug } }); 
      if (!existing) { 
        await prisma.college.create({ data: { name, slug, stream, state, city, type, fees } }); 
        imported++; 
        console.log("Added: " + name); 
      } 
    } catch (e) { console.log("Error: " + name); } 
  } 
  console.log("Done! Imported: " + imported); 
} 
importColleges().finally(() =
