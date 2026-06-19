# 🧠 BrainFlex AI
> Next-Generation Intelligent Study Assistant Powered by Cyclic Multi-API Architecture.

BrainFlex AI is a high-performance educational ecosystem engineered to optimize document parsing, real-time context streaming, and continuous uptime. It automatically converts raw textbooks or uploaded PDFs into instant, highly structured conceptual MCQs or deep-dive conceptual summaries.

---

## 🚀 Key Innovation: Cyclic Load Balancer

Standard AI applications fail under heavy user traffic due to strict API rate limits. BrainFlex AI solves this at the architectural level.

* **16-API Matrix System:** Uses a custom Deno-driven runtime environment that evenly distributes traffic across 16 separate Google Gemini API keys.
* **Task-Specific Rings:** Separates traffic into two distinct key rings (8 Keys dedicated to the MCQ Engine, 8 Keys dedicated to the Summarizer Engine).
* **Fault-Tolerant Failover:** If any single key encounters a rate limit, the system instantly cycles to the next available API key in milliseconds, ensuring zero downtime.

---

## ⚡ Core Features

* **📖 AI MCQ Generator:** Generates exactly 5 deep, conceptual multiple-choice questions with 4 logical options, explicit correct answers, and concise 1-sentence explanations.
* **📝 Smart AI Summarizer:** Extracts core intelligence from dense documents to build clean, bulleted summaries followed by an actionable Key Takeaways matrix.
* **🌊 Native SSE Streaming:** Utilizes Server-Sent Events (`streamGenerateContent`) via Supabase Edge Functions to stream responses text-by-text, delivering a lightning-fast experience.
* **📄 Hidden Background Processing:** Advanced frontend state handling parses and routes uploaded PDFs entirely in the background, keeping the user interface completely neat, clean, and distraction-free.
* **🎨 Gemini-Inspired UI:** A modern, expansive workspace built for prolonged study sessions with integrated layout responsive paths for monetization ad-slots.

---

## 🛠️ Architecture & Tech Stack

* **Frontend:** Semantic HTML5, Vanilla JavaScript (ES6+ State Handlers), Gemini Adaptive CSS Framework.
* **Backend & Serverless Infrastructure:** Supabase Edge Functions (Deno Security Layer).
* **AI Core Engine:** Google Gemini 2.5 Flash Engine.
* **Deployment System:** Production-Ready Edge Pipeline.

---

## 📦 Core Configuration

To replicate this production environment, deploy the following schema to your secure Deno Vault:

```env
# MCQ Generation Matrix
GEMINI_MCQ_KEY_1=AIzaSy...
GEMINI_MCQ_KEY_2=AIzaSy...
# ... through GEMINI_MCQ_KEY_8

# Summarizer Matrix
GEMINI_SUM_KEY_1=AIzaSy...
GEMINI_SUM_KEY_2=AIzaSy...
# ... through GEMINI_SUM_KEY_8

## 👥 Engineering & Authors
Md. Abdur Rahman Hridoy - Lead AI Systems Architect & Core Developer
