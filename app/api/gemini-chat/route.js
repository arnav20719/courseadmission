import { GoogleGenerativeAI } from "@google/generative-ai";

// Use the correct model name for the v1 API
const modelName = "gemini-2.0-flash-exp";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: modelName });

export async function POST(request) {
  try {
    const { message } = await request.json();

    const prompt = `You are Admission GPT. Answer student questions about Indian colleges, courses, fees, Bihar Credit Card, scholarships, and entrance exams. Be helpful and concise.

Question: ${message}`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const reply = result.response.text();

    return Response.json({ reply });
  } catch (error) {
    console.error("Gemini error:", error);
    return Response.json({ reply: "Sorry, I'm having trouble. Please try again." }, { status: 500 });
  }
}