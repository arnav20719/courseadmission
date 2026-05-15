import pandas as pd
import psycopg2
import os
from dotenv import load_dotenv
import re

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

df = pd.read_csv("data/india_colleges.csv")
print(f"Found {len(df)} colleges in CSV")

added = 0
skipped = 0

for index, row in df.iterrows():
    name = row['name']
    city = row['city'] if pd.notna(row['city']) else ""
    state = row['state'] if pd.notna(row['state']) else "India"
    college_type = row['type'] if pd.notna(row['type']) else "Private"
    fees = int(row['fees_ug_inr']) if pd.notna(row['fees_ug_inr']) else None
    
    slug = name.lower()
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    slug = slug.strip('-')
    
    stream = "Multi-disciplinary"
    if "Engineering" in college_type or "IIT" in college_type or "NIT" in college_type or "IIIT" in college_type:
        stream = "Engineering"
    elif "Medical" in college_type or "AIIMS" in college_type:
        stream = "Medical"
    elif "Management" in college_type or "IIM" in college_type:
        stream = "Management"
    elif "Law" in college_type or "NLU" in college_type:
        stream = "Law"
    
    if "IIT" in college_type or "NIT" in college_type or "IIIT" in college_type or "AIIMS" in college_type or "Government" in college_type:
        college_category = "Government"
    else:
        college_category = "Private"
    
    about = f"{name} is located in {city}, {state}."
    
    try:
        sql = """
            INSERT INTO "College" (id, name, slug, stream, state, city, type, fees, about, "createdAt", "updatedAt")
            VALUES (gen_random_uuid()::text, %s, %s, %s, %s, %s, %s, %s, %s, NOW(), NOW())
            ON CONFLICT (slug) DO NOTHING
        """
        cur.execute(sql, (name, slug, stream, state, city, college_category, fees, about))
        
        if cur.rowcount > 0:
            added += 1
            if added % 100 == 0:
                print(f"Added {added} colleges...")
        else:
            skipped += 1
    except Exception as e:
        print(f"Error with {name}: {e}")
        skipped += 1

conn.commit()
cur.close()
conn.close()

print(f"\n🎉 Import completed!")
print(f"✅ Added: {added} colleges")
print(f"⏭️ Skipped (already exist): {skipped} colleges")