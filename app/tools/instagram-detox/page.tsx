"use client";

import { useState } from "react";
import type { Metadata } from "next";

// ---- Data ----

const QUESTIONS = [
  {
    text: "On an average day, roughly how much time do you spend on Instagram?",
    options: [
      { label: "Under 30 min", points: 0 },
      { label: "30 min – 1 hour", points: 5 },
      { label: "1 – 2 hours", points: 9 },
      { label: "2 – 4 hours", points: 13 },
      { label: "4+ hours (I'm not okay)", points: 15 },
    ],
  },
  {
    text: "How many times a day do you open Instagram without consciously deciding to?",
    options: [
      { label: "Almost never", points: 0 },
      { label: "A few times", points: 7 },
      { label: "I lose count", points: 15 },
      { label: "It's like breathing at this point", points: 20 },
    ],
  },
  {
    text: "What do you do most on Instagram?",
    options: [
      { label: "Post and engage with friends", points: 0 },
      { label: "DM and chat", points: 3 },
      { label: "Watch Reels / scroll feed (mostly passive)", points: 12 },
      { label: "Stalk and lurk", points: 15 },
    ],
  },
  {
    text: "First and last thing you look at in a day:",
    options: [
      { label: "Neither", points: 0 },
      { label: "One of them (morning OR night)", points: 8 },
      { label: "Both. Every day.", points: 15 },
    ],
  },
  {
    text: "After spending time on Instagram, how do you usually feel?",
    options: [
      { label: "Good — saw something fun", points: 0 },
      { label: "Neutral — meh", points: 5 },
      { label: "A bit drained", points: 11 },
      { label: "Worse than before I opened it", points: 15 },
    ],
  },
  {
    text: "How often do you feel 'behind' or 'less than' because of what you see on Instagram?",
    options: [
      { label: "Rarely", points: 0 },
      { label: "Sometimes", points: 5 },
      { label: "Often", points: 11 },
      { label: "Constantly", points: 15 },
    ],
  },
  {
    text: "If Instagram disappeared tomorrow, you'd feel:",
    options: [
      { label: "Relieved", points: 0 },
      { label: "Sad for a day, then fine", points: 1 },
      { label: "Genuinely lost", points: 4 },
      { label: "I'd reinstall it from another planet", points: 5 },
    ],
  },
];

const TIERS = [
  { max: 25, label: "Casual", tagline: "You're actually fine. Why are you even here?" },
  { max: 50, label: "Lurker", tagline: "You're in the danger zone but pretending you're not." },
  { max: 75, label: "Doomscroller", tagline: "Your thumb has muscle memory. This isn't a hobby anymore." },
  { max: 100, label: "Cooked", tagline: "Meta should be paying YOU rent." },
];

const PERSONALITY_TYPES = {
  stalker: {
    name: "The 2am Stalker",
    emoji: "🕵️",
    description:
      "You don't post. You don't comment. You watch. Your saved folder is a museum of strangers' lives. Instagram for you is an anthropological field study you didn't ask to enroll in.",
    plan: [
      'Mute Stories from 5 accounts you "watch but don\'t engage with"',
      "Move Instagram off your home screen — bury it in a folder on the second page",
      "No phone in bed. Charge it across the room tonight",
      "Set a 30-minute daily Instagram timer in your phone settings",
      "Unfollow (or mute) 10 accounts whose lives you've been studying. You won't miss them",
      "Open Instagram only at scheduled times today (e.g. 12pm and 6pm)",
      "Reflect: do you remember anything you watched this week? Probably not. That's the point",
    ],
  },
  hostage: {
    name: "The Reel Hostage",
    emoji: "🎬",
    description:
      "You opened Instagram to check one thing. That was 47 minutes ago. You don't remember what you came for. The algorithm has you in a chokehold and you're not even mad about it.",
    plan: [
      'Disable Reels in feed (Settings → it\'s possible — Google "how to disable Instagram reels feed")',
      "Set a 30-minute daily Instagram timer in your phone settings",
      "Turn your phone screen to greyscale for the day. This kills the dopamine hit",
      "Move Instagram off your home screen",
      'Every time you open the app, ask out loud: "What did I come here for?" Then close it if you don\'t have an answer',
      "Logged-out day. Sign out of Instagram on your phone today",
      "Reflect on how much time you got back this week",
    ],
  },
  spiral: {
    name: "The Comparison Spiral",
    emoji: "🌀",
    description:
      "Every scroll is a referendum on your life. Other people's holidays, abs, weddings, promotions — you've turned Instagram into a tribunal where you're always the defendant.",
    plan: [
      "Mute 10 accounts that make you feel worst. Don't unfollow — mute. Less drama",
      'Follow 5 accounts that actually inspire you (not "aspirational" — actually inspiring)',
      "Journal for 5 minutes after each Instagram session: what did I see? How do I feel?",
      "No comparison-prone accounts for the day (influencers, models, lifestyle accounts). Only friends",
      "Spend one hour today doing something offline that you'd normally post about. Don't post it",
      "Identify the 3 accounts that make you feel worst about yourself. Mute them for 30 days",
      "Reflect: whose life do you actually want — yours, or someone else's curated highlights?",
    ],
  },
  functional: {
    name: "The Functional User",
    emoji: "💪",
    description:
      "Honestly? You're doing it right. You use it to talk to friends and post the occasional thing. Touch grass anyway, but you're fine.",
    plan: [
      "You're doing okay. But let's still try: phone out of the bedroom tonight",
      "Try a 1-hour daily limit just to see how it feels",
      "Notice if you ever open Instagram unconsciously this week. Just notice",
      "Replace one Instagram session with a 10-minute walk",
      "DM someone you've been meaning to catch up with. Use the platform actively",
      "A no-Instagram afternoon. Just one",
      "Reflect: you're already in a healthy place. What worked, what didn't?",
    ],
  },
};

// ---- Scoring helpers ----

function getTier(score: number) {
  return TIERS.find((t) => score <= t.max) ?? TIERS[TIERS.length - 1];
}

function getPersonalityType(answers: number[]) {
  const [q1, q2, q3, q4, q5, q6] = answers;
  const q3passive = q3 >= 12;
  if (q3passive && (q1 >= 13 || q4 === 15)) return PERSONALITY_TYPES.stalker;
  if (q2 >= 15 && q1 >= 9) return PERSONALITY_TYPES.hostage;
  if (q5 >= 11 && q6 >= 11) return PERSONALITY_TYPES.spiral;
  return PERSONALITY_TYPES.functional;
}

const TIER_COLORS: Record<string, string> = {
  Casual: "text-green-600",
  Lurker: "text-yellow-600",
  Doomscroller: "text-orange-500",
  Cooked: "text-red-600",
};

// ---- Component ----

export default function InstagramDetoxPage() {
  const [stage, setStage] = useState<"intro" | "quiz" | "result">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const totalScore = answers.reduce((sum, pts) => sum + pts, 0);
  const tier = getTier(totalScore);
  const personality =
    answers.length === QUESTIONS.length ? getPersonalityType(answers) : null;

  function handleAnswer(points: number) {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);
    if (currentQ + 1 < QUESTIONS.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setStage("result");
    }
  }

  function reset() {
    setStage("intro");
    setCurrentQ(0);
    setAnswers([]);
    setOpenDay(null);
    setCopied(false);
    setEmail("");
    setEmailSubmitted(false);
  }

  function handleShare() {
    const text = `I scored ${totalScore}/100 on the Instagram Detox Score. Apparently I'm a ${personality?.name}. Find out yours: meetrajguru.xyz/tools/instagram-detox`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  // ---- Intro ----

  if (stage === "intro") {
    return (
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <div className="max-w-xl">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">
            Tool
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-5">
            Instagram Detox Score
          </h1>
          <p className="text-base text-gray-600 leading-relaxed mb-10">
            7 questions. No signup. No judgment (okay, a little judgment). Answer
            honestly and we'll tell you how cooked your Instagram habits actually
            are — plus give you a personalised 7-day plan to fix it.
          </p>
          <button
            onClick={() => setStage("quiz")}
            className="bg-navy text-white font-medium text-sm px-6 py-3 rounded-md hover:bg-navy-dark transition-colors"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // ---- Quiz ----

  if (stage === "quiz") {
    const question = QUESTIONS[currentQ];
    const progress = (currentQ / QUESTIONS.length) * 100;

    return (
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <div className="max-w-xl">
          {/* Progress bar */}
          <div className="flex items-center gap-4 mb-10">
            <p className="text-xs text-gray-400 whitespace-nowrap">
              {currentQ + 1} / {QUESTIONS.length}
            </p>
            <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-navy rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-xl font-semibold text-gray-900 mb-8 leading-snug">
            {question.text}
          </h2>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option.points)}
                className="w-full text-left px-5 py-4 rounded-md border border-gray-200 bg-white text-sm text-gray-700 font-medium hover:border-navy hover:text-navy hover:bg-blue-50 transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ---- Result ----

  if (!personality) return null;

  const tierColor = TIER_COLORS[tier.label] ?? "text-navy";

  return (
    <div className="max-w-[800px] mx-auto px-6 py-16">
      <div className="max-w-xl space-y-10">

        {/* Score */}
        <div>
          <p className="text-xs text-gray-400 font-medium mb-3">Your score</p>
          <div className="flex items-end gap-2 mb-2">
            <span className={`text-7xl font-bold leading-none ${tierColor}`}>
              {totalScore}
            </span>
            <span className="text-2xl text-gray-300 mb-1">/100</span>
          </div>
          <p className={`text-lg font-bold ${tierColor}`}>{tier.label}</p>
          <p className="text-sm text-gray-500 mt-1">{tier.tagline}</p>
        </div>

        {/* Personality type */}
        <div className="border-l-2 border-gray-200 pl-5">
          <p className="text-xs text-gray-400 font-medium mb-2">You are</p>
          <p className="text-xl font-bold text-gray-900 mb-3">
            {personality.emoji} {personality.name}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {personality.description}
          </p>
        </div>

        {/* 7-day plan */}
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-4">
            Your 7-day detox plan
          </p>
          <div className="flex flex-col gap-2">
            {personality.plan.map((task, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenDay(openDay === i ? null : i)}
                  className="w-full text-left flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">
                    Day {i + 1}
                  </span>
                  <span className="text-gray-400 text-xs ml-4">
                    {openDay === i ? "▲" : "▼"}
                  </span>
                </button>
                {openDay === i && (
                  <div className="px-4 pb-4 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                    {task}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleShare}
            className="flex-1 bg-navy text-white font-medium text-sm px-5 py-3 rounded-md hover:bg-navy-dark transition-colors"
          >
            {copied ? "Copied to clipboard ✓" : "Share your score"}
          </button>
          <button
            onClick={reset}
            className="flex-1 border border-gray-200 text-gray-600 font-medium text-sm px-5 py-3 rounded-md hover:border-navy hover:text-navy transition-colors"
          >
            Take it again
          </button>
        </div>

        {/* Email interest capture */}
        <div className="border border-gray-200 rounded-md p-5 bg-gray-50">
          {emailSubmitted ? (
            <p className="text-sm text-gray-600 leading-relaxed">
              Got it — I'll let you know when the daily emails launch.
            </p>
          ) : (
            <>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Want me to email you this plan as daily reminders?
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Drop your email below — I'll send you one short reminder per day,
                then leave you alone.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 text-sm px-4 py-2.5 rounded-md border border-gray-200 bg-white focus:outline-none focus:border-navy placeholder:text-gray-300"
                />
                <button
                  onClick={() => { if (email.trim()) setEmailSubmitted(true); }}
                  className="bg-navy text-white font-medium text-sm px-5 py-2.5 rounded-md hover:bg-navy-dark transition-colors whitespace-nowrap"
                >
                  Notify me
                </button>
              </div>
            </>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-6">
          This score is a playful gut-check, not a clinical assessment. It's
          grounded in research from Dr. Melissa Hunt (UPenn), the Center for
          Humane Technology, and social comparison theory (Festinger, 1954) —
          but it's calibrated from self-reported answers, not measured behaviour.
          If you're genuinely struggling with social media use, please talk to a
          professional.
        </p>
      </div>
    </div>
  );
}
