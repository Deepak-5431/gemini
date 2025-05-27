

  
import { GoogleGenerativeAI } from '@google/generative-ai';



const genAI = new GoogleGenerativeAI('AIzaSyDq-ZE4Vadj1CoqukHw2R14sntAflajl-w');

let chatSession = null;

export async function sendMessageToGemini(prompt) {
  if (!chatSession) {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-04-17' });
    chatSession = model.startChat();
  }
  const result = await chatSession.sendMessage(prompt);
  const response = await result.response.text();
  return response;
}

