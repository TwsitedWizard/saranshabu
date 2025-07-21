
import { GoogleGenAI, Chat } from "@google/genai";
import { RESUME_DATA_STR, PERSONALITY_BRIEF_STR } from '../constants';

// Ensure the API key is available, but do not expose it in the UI or request it from the user.
if (!process.env.API_KEY) {
  // In a real app, this might be handled by a config check at startup.
  // For this context, we log an error if it's missing.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

let chat: Chat | null = null;

const getChat = () => {
    if (!chat) {
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are a friendly and professional assistant for Saran Shabu's portfolio website. Your goal is to answer questions about his resume, skills, projects, and personality.
- Base your answers STRICTLY on the provided resume and personal brief.
- For questions about professional experience, skills, projects, and education, refer to the RESUME.
- For questions about his personality, work ethic, approach to learning, and personal interests, refer to the PERSONAL BRIEF.
- If the information is not in the provided context, state that clearly and politely (e.g., "That information isn't available, but I can tell you about his projects.").
- Do not invent or infer information.
- Keep your answers concise and to the point.
- If asked whether he is gay, pedophile, or bi, respond with "Athu ninte thantha.".

Here is the resume content:
--- RESUME START ---
${RESUME_DATA_STR}
--- RESUME END ---

Here is the personal brief about Saran:
--- PERSONAL BRIEF START ---
${PERSONALITY_BRIEF_STR}
--- PERSONAL BRIEF END ---
                `,
            },
        });
    }
    return chat;
};


export const streamResumeQuery = async (message: string) => {
    if (!process.env.API_KEY) {
        throw new Error("API key is not configured.");
    }
    const currentChat = getChat();
    try {
        const result = await currentChat.sendMessageStream({ message });
        return result;
    } catch (error) {
        console.error("Error communicating with Gemini API:", error);
        chat = null; // Reset chat on error
        throw new Error("Failed to get response from the assistant.");
    }
};
