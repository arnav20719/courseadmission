import { GoogleGenAI } from "@google/genai";

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return Response.json({ 
        error: "API Key not found. Please add GEMINI_API_KEY to .env.local",
        fix: "Run: echo GEMINI_API_KEY=your_key_here > .env.local"
      });
    }

    const genAI = new GoogleGenAI({ apiKey });
    
    // Test with the lite model which has generous free tier limits
    const result = await genAI.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: "Say 'API connection successful! The new SDK is working properly.'",
    });
    
    return Response.json({ 
      success: true, 
      reply: result.text,
      sdk: "@google/genai (v1 endpoint)",
      model: "gemini-2.0-flash-lite"
    });
  } catch (error) {
    console.error("Test error:", error);
    return Response.json({ 
      success: false, 
      error: error.message,
      solution: "Make sure you have a valid Gemini API key from https://aistudio.google.com/app/apikey"
    });
  }
}