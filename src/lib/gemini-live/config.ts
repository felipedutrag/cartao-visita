export const GEMINI_LIVE_CONFIG = {
  WS_BASE_URL: 'wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent',
  DEFAULT_MODEL: 'models/gemini-3.1-flash-live-preview',
  DEFAULT_VOICE: 'Kore',
  AUDIO_SAMPLE_RATE: 16000,
  VOICE_THRESHOLD: 0.01,
  MAX_HISTORY_SIZE: 20,
  SESSION_EXPIRY_MS: 3600000,
  MAX_RECONNECT_ATTEMPTS: 3,
  RECONNECT_DELAY_MS: 1000,
  MAX_RECONNECT_DELAY_MS: 5000,
}

export const GEMINI_LIVE_VOICES = ['Kore', 'Puck', 'Charon', 'Fenrir', 'Aoede'] as const
