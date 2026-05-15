export async function POST(request) {
  try {
    const { message } = await request.json();
    const lowerMsg = message.toLowerCase();
    
    // Intelligent response system
    let reply = "";
    
    // College-specific responses (you can add more colleges)
    const colleges = {
      "vit": "🏛️ **Vellore Institute of Technology (VIT)**\n• Location: Vellore, Tamil Nadu\n• Established: 1984\n• Type: Private\n• Courses: B.Tech, M.Tech, MBA, PhD\n• Fees: ₹1.9 - 2.5 lakhs/year\n• Placement: Average ₹8-10 LPA, Highest ₹1.2 Cr\n• Admission: VITEEE exam",
      "srm": "🏛️ **SRM Institute of Science and Technology**\n• Location: Chennai, Tamil Nadu\n• Type: Private\n• Courses: B.Tech, M.Tech, MBA, MBBS\n• Fees: ₹2.5 - 3.5 lakhs/year\n• Placement: Average ₹7-9 LPA, Highest ₹80 LPA\n• Admission: SRMJEE exam",
      "amity": "🏛️ **Amity University**\n• Location: Noida, Uttar Pradesh\n• Type: Private\n• Courses: B.Tech, MBA, Law, Mass Comm\n• Fees: ₹1.5 - 3 lakhs/year\n• Placement: Average ₹5-8 LPA\n• Campuses across India",
      "lpu": "🏛️ **Lovely Professional University (LPU)**\n• Location: Phagwara, Punjab\n• Type: Private\n• Courses: 200+ programs\n• Fees: ₹1.2 - 2.5 lakhs/year\n• Placement: Average ₹6-8 LPA, Highest ₹64 LPA",
      "chandigarh university": "🏛️ **Chandigarh University**\n• Location: Mohali, Punjab\n• Type: Private\n• Courses: Engineering, Management, Law\n• Fees: ₹1.5 - 2.2 lakhs/year\n• Placement: Average ₹6-9 LPA",
    };
    
    // Check if user asked about a specific college
    for (const [college, info] of Object.entries(colleges)) {
      if (lowerMsg.includes(college)) {
        return Response.json({ reply: info });
      }
    }
    
    // Bihar Credit Card
    if (lowerMsg.includes("bihar credit") || lowerMsg.includes("bihar card") || lowerMsg.includes("student credit")) {
      reply = "🎓 **Bihar Student Credit Card Scheme**\n\n• Loan amount: Up to ₹4,00,000\n• Interest rate: 4% per annum\n• No collateral required\n• No processing fee\n• Repayment after course + 1 year\n\n✅ **Eligibility:**\n• Bihar resident (Domicile required)\n• Age: 18-25 years\n• Passed 10+2 from Bihar board\n• Admission in recognized college\n\n📞 Helpline: 1800-123-4567";
    }
    // B.Tech / Engineering
    else if (lowerMsg.includes("b.tech") || lowerMsg.includes("btech") || lowerMsg.includes("engineering")) {
      reply = "🔧 **B.Tech (Bachelor of Technology)**\n\n• Duration: 4 years (8 semesters)\n• Eligibility: 10+2 with PCM (50-60%)\n• Entrance Exams: JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEE, MET\n\n📚 **Popular Specializations:**\n• Computer Science (CSE) | AI/ML | Data Science\n• Electronics (ECE) | Mechanical | Civil | IT\n\n🏛️ **Top Colleges:** IITs, NITs, BITS Pilani, VIT, SRM, MIT Manipal\n\n💰 **Fees:** Govt: ₹1-3L/year | Private: ₹2-8L/year\n\n📊 **Average Package:** IITs: ₹20-30 LPA | NITs: ₹10-15 LPA | Private: ₹4-10 LPA";
    }
    // MBA
    else if (lowerMsg.includes("mba") || lowerMsg.includes("master of bus") || lowerMsg.includes("pgdm")) {
      reply = "💼 **MBA (Master of Business Administration)**\n\n• Duration: 2 years\n• Eligibility: Bachelor's degree (50% marks)\n• Entrance Exams: CAT, XAT, MAT, GMAT, CMAT, SNAP\n\n🎯 **Specializations:** Finance, Marketing, HR, Operations, IT, Business Analytics, International Business\n\n🏛️ **Top B-Schools:** IIMs, XLRI, FMS Delhi, SPJIMR, NMIMS, MDI, IMT\n\n💰 **Fees:** IIMs: ₹20-30L | Private: ₹10-20L | Govt: ₹5-10L\n\n📊 **Average Package:** IIMs: ₹25-35 LPA | Others: ₹10-20 LPA";
    }
    // MBBS / Medical
    else if (lowerMsg.includes("mbbs") || lowerMsg.includes("medical") || lowerMsg.includes("doctor")) {
      reply = "🩺 **MBBS (Bachelor of Medicine, Bachelor of Surgery)**\n\n• Duration: 5.5 years (including 1 year internship)\n• Eligibility: 10+2 with PCB (50% minimum)\n• Entrance Exam: NEET (National Eligibility cum Entrance Test)\n\n🏛️ **Top Government Colleges:**\n• AIIMS Delhi | CMC Vellore | Maulana Azad Medical College\n• Grant Medical College | KGMU Lucknow\n\n💰 **Fees:** Government: ₹10,000 - 50,000/year | Private: ₹10-25 lakhs/year\n\n📊 **Starting Salary:** ₹6-12 LPA (Govt) | ₹8-15 LPA (Private)";
    }
    // NEET
    else if (lowerMsg.includes("neet") && !lowerMsg.includes("mbbs")) {
      reply = "📝 **NEET (National Eligibility cum Entrance Test)**\n\n• For: MBBS, BDS, AYUSH, BAMS, BHMS, Nursing admissions\n• Exam Pattern: 180 MCQs (Physics 45, Chemistry 45, Biology 90)\n• Duration: 3 hours 20 minutes\n• Marking: +4 for correct, -1 for incorrect\n• Minimum Qualifying: General 50th percentile, SC/ST/OBC 40th percentile\n• Conducted by: NTA (National Testing Agency)\n\n📅 Exam Date: May (once a year)";
    }
    // JEE
    else if (lowerMsg.includes("jee") && !lowerMsg.includes("neet")) {
      reply = "📝 **JEE (Joint Entrance Examination)**\n\n**JEE Main:**\n• For: NITs, IIITs, GFTIs\n• Conducted twice a year (January & April)\n• Subjects: Physics, Chemistry, Mathematics\n• Mode: Computer Based Test (CBT)\n\n**JEE Advanced:**\n• For: IITs\n• Only top 2.5 lakh JEE Main rankers qualify\n\n📚 **Preparation Tips:**\n• NCERT books for concepts\n• Previous year papers\n• Mock tests regularly\n\n📊 **Minimum Marks to Qualify (JEE Main):**\n• General: 75% (or top 20 percentile)\n• SC/ST: 65% (or top 20 percentile)";
    }
    // CAT
    else if (lowerMsg.includes("cat") && !lowerMsg.includes("dog")) {
      reply = "📝 **CAT (Common Admission Test)**\n\n• For: MBA admissions in IIMs and top B-schools\n• Conducted by: IIMs\n• Exam Pattern: 66 MCQs (3 sections)\n• Duration: 2 hours\n• Sections: VARC, DILR, Quant\n• Marking: +3 for correct, -1 for incorrect\n\n📅 Exam Date: November (once a year)";
    }
    // Scholarships
    else if (lowerMsg.includes("scholarship") || lowerMsg.includes("financial help") || lowerMsg.includes("aid")) {
      reply = "🎓 **Scholarship Opportunities in India**\n\n**Government Schemes:**\n• Bihar Student Credit Card - ₹4L at 4% interest\n• National Scholarship Portal (NSP) - Central/State Govt scholarships\n• Post-Matric Scholarship for SC/ST/OBC students\n• Merit-cum-Means Scholarship for minority communities\n• PMSSS for Jammu & Kashmir students\n\n**Private Scholarships:**\n• LIC Golden Jubilee Scholarship\n• Reliance Foundation Scholarship\n• Tata Scholarship\n• College-specific merit scholarships\n\n💡 **Tips:** Apply early on NSP portal (Oct-Dec)";
    }
    // Placements
    else if (lowerMsg.includes("placement") || lowerMsg.includes("package") || lowerMsg.includes("salary")) {
      reply = "📊 **Placement Statistics - Indian Colleges**\n\n🏛️ **IITs:**\n• Average: ₹20-30 LPA\n• Highest: ₹2-3 Cr (international offers)\n\n🏛️ **NITs:**\n• Average: ₹10-15 LPA\n• Highest: ₹1-1.5 Cr\n\n🏛️ **Top Private Colleges (VIT, SRM, Manipal, LPU):**\n• Average: ₹7-12 LPA\n• Highest: ₹50 LPA - 1 Cr\n\n🏛️ **IIMs (MBA):**\n• Average: ₹25-35 LPA\n• Highest: ₹1-2 Cr\n\n🏛️ **NITs (MBA):** Average: ₹10-15 LPA\n\n💡 **Top Recruiters:** Google, Microsoft, Amazon, Apple, Goldman Sachs, McKinsey, BCG";
    }
    // Fees
    else if (lowerMsg.includes("fees") || lowerMsg.includes("fee structure") || lowerMsg.includes("cost")) {
      reply = "💰 **Fee Structure in Indian Colleges**\n\n**Government Colleges:**\n• Engineering (IITs/NITs): ₹1.5-3 lakhs/year\n• Medical (AIIMS): ₹7,700-50,000/year\n• MBA (IIMs): ₹10-30 lakhs total\n\n**Private Colleges:**\n• Engineering: ₹1-5 lakhs/year\n• Medical: ₹10-25 lakhs/year\n• MBA: ₹10-20 lakhs total\n\n**Top Private Universities (VIT, SRM, Amity, LPU):**\n• B.Tech: ₹1.5-3 lakhs/year\n• MBA: ₹8-15 lakhs total\n\n💡 **Scholarships available for meritorious students!**";
    }
    // IITs
    else if (lowerMsg.includes("iit") && !lowerMsg.includes("nit")) {
      reply = "🏛️ **Indian Institutes of Technology (IITs)**\n\n• Total IITs: 23 across India\n• Admission: JEE Advanced (after qualifying JEE Main)\n• Fees: ₹2-3 lakhs per year\n• Average Placement: ₹20-30 LPA\n• Highest Package: ₹2-3 Cr (international offers)\n\n**Top IITs:** Bombay, Delhi, Madras, Kanpur, Kharagpur, Roorkee, Guwahati\n\n🎓 **Popular Courses:** B.Tech, M.Tech, BS, MS, PhD, MBA\n\n**IIT Bombay Average Package (2025):** CSE - ₹32 LPA, Electrical - ₹28 LPA, Mechanical - ₹25 LPA";
    }
    // NITs
    else if (lowerMsg.includes("nit") && !lowerMsg.includes("iit")) {
      reply = "🏛️ **National Institutes of Technology (NITs)**\n\n• Total NITs: 31 across India\n• Admission: JEE Main\n• Fees: ₹1.5-2 lakhs per year\n• Average Placement: ₹10-15 LPA\n\n**Top NITs:** Trichy, Surathkal, Warangal, Calicut, Rourkela, Allahabad, Durgapur\n\n🎓 **Popular Courses:** B.Tech, M.Tech, MBA, PhD\n\n**NIT Trichy Average Package (2025):** CSE - ₹22 LPA, ECE - ₹18 LPA, Mechanical - ₹15 LPA";
    }
    // Courses
    else if (lowerMsg.includes("course") || lowerMsg.includes("program") || lowerMsg.includes("degree")) {
      reply = "📚 **Popular Courses in India**\n\n**Engineering:** B.Tech (4 years), M.Tech (2 years)\n**Medical:** MBBS (5.5 years), BDS (5 years), BAMS (5.5 years)\n**Management:** BBA (3 years), MBA (2 years)\n**Computer Applications:** BCA (3 years), MCA (2 years)\n**Commerce:** B.Com (3 years), M.Com (2 years), CA (3-5 years), CS (2-3 years)\n**Arts:** BA (3 years), MA (2 years)\n**Law:** LLB (3 years or 5 years integrated), LLM (2 years)\n**Science:** B.Sc (3 years), M.Sc (2 years)\n\n💡 Which course are you interested in?";
    }
    // Default / Help
    else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey") || lowerMsg.includes("help")) {
      reply = "👋 **Hello! I'm your Admission Assistant!**\n\nI can help you with:\n✅ Bihar Student Credit Card (₹4L loan at 4%)\n✅ B.Tech, MBA, MBBS courses details\n✅ IITs, NITs, Top Colleges information\n✅ Entrance exams (JEE, NEET, CAT)\n✅ Scholarships and Fee structure\n✅ Career guidance and placement details\n✅ Specific college information (VIT, SRM, Amity, LPU, etc.)\n\n📝 **Try asking:**\n• 'Tell me about Bihar Credit Card'\n• 'Best engineering colleges in India'\n• 'B.Tech course details'\n• 'IIT fees and placement'\n• 'How to apply for scholarship'\n• 'Tell me about VIT Vellore'";
    }
    else {
      reply = "🤖 **I can help you with college admissions!**\n\n📌 **Type any of these topics:**\n• Bihar Credit Card - State education loan scheme\n• B.Tech / Engineering - Course details, colleges, fees\n• MBA - Management studies information\n• MBBS / Medical - Doctor course details\n• IITs - Indian Institutes of Technology\n• NITs - National Institutes of Technology\n• NEET - Medical entrance exam\n• JEE - Engineering entrance exam\n• CAT - MBA entrance exam\n• Scholarships - Financial aid options\n• Placements - Salary packages\n• Fees - College fee structure\n\n💡 **Or ask about specific colleges like:** VIT, SRM, Amity, LPU, Chandigarh University\n\nWhat would you like to know?";
    }
    
    return Response.json({ reply });
    
  } catch (error) {
    console.error("Chat error:", error);
    return Response.json({ reply: "Sorry, I'm having trouble. Please try again." }, { status: 500 });
  }
}