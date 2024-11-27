import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateJobRecommendation(userDescription) {
  const prompt = `Analise o texto a seguir e identifique a profissão mais adequada para essa pessoa. 
  Retorne APENAS um objeto JSON com as seguintes informações:
  {
    "nome_profissao": "",
    "descricao_breve": "",
    "media_salarial": "",
    "tempo_formacao": "",
    "areas_atuacao": [],
    "como_se_especializar": "",
    "habilidades_necessarias": [],
    "desafios_da_profissao": ""
  }

  Texto para análise: "${userDescription}"`;

  try {
    const res = await model.generateContent(prompt);
    const responseText = res.response.text();
    
   
    const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/);
    const jsonString = jsonMatch ? jsonMatch[1] : responseText;

    
    const jobRecommendation = JSON.parse(jsonString);
    
    return jobRecommendation;
  } catch (erro) {
    console.error("Erro ao gerar recomendação de profissão:", erro.message);
    throw new Error("Erro ao processar a recomendação do Gemini.");
  }
}