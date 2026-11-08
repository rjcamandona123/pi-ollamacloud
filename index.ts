export default function (pi: any) {
  pi.registerProvider("ollama-cloud", {
    name: "Ollama Cloud",
    baseUrl: process.env.OLLAMA_CLOUD_BASE_URL || "https://ollama.com/v1",
    apiKey: process.env.OLLAMA_CLOUD_API_KEY || "",
    api: "openai-completions",
    models: [
      { id: "beam", name: "Beam 501B (cloud)", reasoning: true, input: ["text"], cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 }, contextWindow: 128000, maxTokens: 16384 },
      { id: "gemma4:31b-cloud", name: "Gemma 4 31B (free cloud)", reasoning: false, input: ["text"], cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 }, contextWindow: 128000, maxTokens: 16384 },
    ],
  });
}
