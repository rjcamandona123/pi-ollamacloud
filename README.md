[![GitHub](https://img.shields.io/badge/GitHub-pi--ollamacloud-black?logo=github)](https://github.com/rjcamandona123/pi-ollamacloud)

# pi-ollamacloud

Pi extension that registers Ollama Cloud as a provider automatically.

- No terminal setup or `./bin/llm setup --default` needed.
- Prioritizes the remote `beam` model (Ollama Cloud), with `gemma4:31b-cloud` and other free open-source cloud models as fallbacks.

## Install

```
pi install git:https://github.com/rjcamandona123/pi-ollamacloud
```

## Configuration

Optional — set your API key via environment variable (if omitted, auth-required models may be unavailable):

```
export OLLAMA_CLOUD_API_KEY=your_key
```

Optional base URL override:

```
export OLLAMA_CLOUD_BASE_URL=https://ollama.com/v1
```
