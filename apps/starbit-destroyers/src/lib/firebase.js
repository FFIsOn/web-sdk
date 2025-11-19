import { initializeApp } from 'firebase/app';
import { getVertexAI, getGenerativeModel } from 'firebase/vertex-ai-preview';

// TODO: Add your Firebase project configuration here
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);

export function getVertexAI() {
  return getVertexAI(app);
}

export async function processImage(vertex, file) {
  const model = getGenerativeModel(vertex, { model: 'gemini-pro-vision' });
  const prompt = 'Extract all text from this image.';

  const arrayBuffer = await file.arrayBuffer();
  const imagePart = {
    inlineData: {
      data: btoa(
        new Uint8Array(arrayBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      ),
      mimeType: file.type,
    },
  };

  const result = await model.generateContent([prompt, imagePart]);
  const response = await result.response;
  return response.text();
}
