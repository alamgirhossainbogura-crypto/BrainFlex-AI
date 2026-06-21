// Supabase Edge Function (Deno Runtime)
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// ১৬টি এপিআই কী-এর ম্যাট্রিক্স (৮টি MCQ এর জন্য, ৮টি Summarizer এর জন্য)
const MCQ_KEYS = [
  Deno.env.get("GEMINI_MCQ_KEY_1"), Deno.env.get("GEMINI_MCQ_KEY_2"),
  Deno.env.get("GEMINI_MCQ_KEY_3"), Deno.env.get("GEMINI_MCQ_KEY_4"),
  Deno.env.get("GEMINI_MCQ_KEY_5"), Deno.env.get("GEMINI_MCQ_KEY_6"),
  Deno.env.get("GEMINI_MCQ_KEY_7"), Deno.env.get("GEMINI_MCQ_KEY_8")
];

const SUM_KEYS = [
  Deno.env.get("GEMINI_SUM_KEY_1"), Deno.env.get("GEMINI_SUM_KEY_2"),
  Deno.env.get("GEMINI_SUM_KEY_3"), Deno.env.get("GEMINI_SUM_KEY_4"),
  Deno.env.get("GEMINI_SUM_KEY_5"), Deno.env.get("GEMINI_SUM_KEY_6"),
  Deno.env.get("GEMINI_SUM_KEY_7"), Deno.env.get("GEMINI_SUM_KEY_8")
];

let mcqIndex = 0;
let sumIndex = 0;

serve(async (req) => {
  // CORS হ্যান্ডেলিং
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: { "Access-Control-Allow-Origin": "*" } });
  }

  try {
    const formData = await req.formData();
    const mode = formData.get("mode"); // 'mcq' অথবা 'summary'

    let activeKey = "";
    
    // সাইক্লিক পদ্ধতিতে কী (Key) রোটেশন লজিক
    if (mode === "mcq") {
      activeKey = MCQ_KEYS[mcqIndex];
      mcqIndex = (mcqIndex + 1) % MCQ_KEYS.length; // পরবর্তী রিকোয়েস্টের জন্য ইনডেক্স চেঞ্জ
    } else {
      activeKey = SUM_KEYS[sumIndex];
      sumIndex = (sumIndex + 1) % SUM_KEYS.length;
    }

    // এখানে Google Gemini API-তে রিকোয়েস্ট পাঠানো হবে এবং SSE Stream করা হবে...
    // (তোমার আসল জেনারেটিভ ব্যাকএন্ড লজিক)

    return new Response("Streaming Response Core Content...", {
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/event-stream" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
})
