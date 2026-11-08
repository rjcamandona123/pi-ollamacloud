export default function (pi: any) {
  pi.registerProvider("ollama-cloud", {
    name: "Ollama Cloud",
    baseUrl: process.env.OLLAMA_CLOUD_BASE_URL || "https://ollama.com/v1",
    apiKey: "$OLLAMA_CLOUD_API_KEY",
    api: "openai-completions",
    models: [
      { id: "beam", name: "Beam 501B (cloud)", reasoning: true, input: ["text"], cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 }, contextWindow: 128000, maxTokens: 65536 },
      { id: "gemma4:31b-cloud", name: "Gemma 4 31B (free cloud)", reasoning: false, input: ["text"], cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 }, contextWindow: 128000, maxTokens: 16384 },
    ],
    oauth: {
      name: "Ollama Cloud (API key)",
      async login(callbacks: { onPrompt: (opts: any) => Promise<string> }) {
        const key = await callbacks.onPrompt({ message: "Paste your Ollama Cloud API key (https://ollama.com/settings/keys):" });
        if (!key) throw new Error("API key required");
        return { type: "api_key", key };
      },
      async refreshToken(credentials: any, signal?: AbortSignal) {
        signal?.throwIfAborted?.();
        return credentials;
      },
      getApiKey(credentials: any) {
        return credentials?.key;
      },
    },
  });
}
