# 💳 Cartão de Visita Inteligente — Next.js 16 & Multimodal Voice AI Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Gemini Live API](https://img.shields.io/badge/Google_Gemini-Multimodal_Live_AI-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

An executive **digital business card and intelligent portfolio platform** built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and integrated with **Google Gemini Live Multimodal AI Voice Agents**.

Designed as a future-forward personal brand touchpoint, this platform combines real-time streaming two-way audio conversations, instant Pix payments with automatic WhatsApp fulfillment, curated service catalogs, and dynamic theme customization into an ultra-responsive web application.

---

## 🌟 Vision & Key Highlights

Traditional digital business cards only provide static links. **Cartão de Visita Inteligente** transforms networking into an interactive, voice-driven experience:

- 🎙️ **Interactive AI Voice Agent ("Lilith / Executive Voice Assistant")**:
  - Direct microphone streaming and real-time synthesized voice responses using the **Google Gemini Multimodal Live API**.
  - Contextual knowledge of Felipe Dutra's engineering background, tech stack, services, pricing, and project portfolio.
  - Ability to execute client-side and backend tool actions dynamically during conversation.
- ⚡ **Seamless E-Commerce & Pix Automation**:
  - Instant one-click Pix key copying (`handleCopyPix`) with visual feedback.
  - Product-specific purchase workflows linking directly to WhatsApp with pre-filled transaction receipts and service details.
  - Horizontal swipeable showcase for high-ticket consulting, custom AI cards, and automation masterclasses.
- 🎨 **Theme Engine & Executive Glassmorphism**:
  - Dark / Light / System theme switching powered by `next-themes`.
  - Glassmorphic card surfaces, animated pulse indicators for live AI sessions, and micro-interactions.
- 📱 **Mobile-First Responsive Layout**:
  - Tailored specifically for smartphone NFC taps, QR code scans, and mobile browser viewing.

---

## 🤖 Gemini Live Voice Architecture

```
[User Microphone] 
       │ (PCM Audio Stream)
       ▼
[useLilithVoice / useDashboardVoice]
       │
       ▼
[Next.js API Route: /api/gemini-live/config & tools/execute]
       │
       ├── Session Authentication & Ephemeral Tokens
       ├── Gemini Multimodal WebSocket Connection
       └── Function Calling & Custom Tool Dispatcher
       │
       ▼
[Real-Time Synthesized Audio Output & Reactive UI State]
```

### Multimodal Voice Modules:
- **Audio Capture & Streaming**: Bi-directional audio chunks streamed in low latency.
- **Voice History Logging (`/api/gemini-live/voice-history`)**: Session auditing and interaction telemetry.
- **Live Tool Calling (`/api/gemini-live/tools/execute`)**: Enables the voice assistant to invoke live UI actions, schedule appointments, and query pricing data.

---

## 📁 Repository Structure

```
cartao-visita/
├── public/                     # Executive profile images & vector assets
│   └── felipe.jpg              # High-resolution author headshot
├── scripts/
│   └── auto-git-push.ts        # Automated Git push synchronization script
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── gemini-live/    # Backend endpoints for Gemini Live voice
│   │   │       ├── config/     # Session tokens & model initialization
│   │   │       ├── tools/      # Function-calling executor endpoint
│   │   │       └── voice-history/ # Audio session tracking
│   │   ├── modelos/
│   │   │   └── felipe-dutra/   # Production model: Felipe Dutra digital VIP card
│   │   │       └── page.tsx    # Complete executive interface with voice & checkout
│   │   ├── globals.css         # Tailwind CSS v4 root styling & variables
│   │   ├── layout.tsx          # Root layout & theme provider wrapper
│   │   └── page.tsx            # Main catalog / card router
│   ├── components/
│   │   ├── ui/                 # Reusable atomic UI (Buttons, Cards)
│   │   ├── ai-voice-assistant-card.tsx # Voice interaction HUD with wave pulses
│   │   ├── mode-toggle.tsx     # Dark/light mode switcher button
│   │   ├── theme-provider.tsx  # Next-themes context wrapper
│   │   └── theme-selector.tsx  # Palette customizer
│   ├── hooks/
│   │   ├── use-dashboard-voice.ts # General purpose voice interaction hook
│   │   └── use-lilith-voice.ts    # Specialized executive voice agent hook
│   └── lib/
│       ├── gemini-live/        # Client configuration & WebSocket protocol
│       ├── process-ai/         # Tool registry and intent mappings
│       └── utils.ts            # Class merging utility
├── package.json                # Next.js 16, React 19, @google/genai dependencies
└── tsconfig.json               # TypeScript path alias configurations
```

---

## 🛠️ Technology Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.3](https://nextjs.org/) | Modern App Router, Server Components & Route Handlers |
| **UI Library** | [React 19.2](https://react.dev/) | Latest React release with optimized rendering lifecycle |
| **AI / Voice** | [@google/genai 2.17](https://ai.google.dev/) | Multimodal Live API for real-time natural speech conversation |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation zero-config CSS framework |
| **Theme System** | [next-themes](https://github.com/pacocoursey/next-themes) | Seamless dark and light mode persistence |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean executive iconography |
| **Automation** | `tsx` & `dotenv` | TypeScript scripting tools for Git and environment tasks |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **Gemini API Key**: Obtainable from [Google AI Studio](https://aistudio.google.com/)

### Installation & Configuration

1. **Clone the repository:**
   ```bash
   git clone https://github.com/felipedutrag/cartao-visita.git
   cd cartao-visita
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key_here
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000/modelos/felipe-dutra](http://localhost:3000/modelos/felipe-dutra) to interact with the executive digital card.

5. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 👨‍💻 Author

**Felipe Dutra**
- **GitHub**: [@felipedutrag](https://github.com/felipedutrag)
- **Email**: [felipedutra@outlook.com](mailto:felipedutra@outlook.com)

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE).