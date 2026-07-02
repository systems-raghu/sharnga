import React, { useState } from "react";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";
import { IGPhone } from "./IGPhone";
import { cn } from "../lib/utils";

const scenarios = [
  {
    name: "Coach · program enquiry",
    headerName: "the.lift.co",
    msgs: [
      { from: "lead", text: "do you guys take beginners? been wanting to start lifting" },
      { from: "agent", text: "absolutely 🙌 60% of our intake last month were total beginners" },
      { from: "agent", text: "quick one — are you training at a gym or at home rn?" },
      { from: "lead", text: "gym but i feel lost lol" },
      { from: "agent", text: "totally normal. wanna hop on a free 15-min call so we can map your first 4 weeks?" },
      { from: "lead", text: "yes pls!!" },
    ],
  },
  {
    name: "Course creator · objection",
    headerName: "maren.copy",
    msgs: [
      { from: "lead", text: "loved the masterclass! is the cohort worth it if i'm already making 5k/mo?" },
      { from: "agent", text: "honestly? cohort is built for people stuck between 5–15k trying to break through" },
      { from: "agent", text: "what's the biggest bottleneck rn — leads, offer, or closing?" },
      { from: "lead", text: "closing. i get on calls and freeze" },
      { from: "agent", text: "yeah we'd 100% fix that. want to chat thurs and i'll walk you through the sales module?" },
      { from: "lead", text: "let's do it" },
    ],
  },
  {
    name: "Wellness · cold lead nurture",
    headerName: "studio.vela",
    msgs: [
      { from: "lead", text: "just signed up to your newsletter" },
      { from: "agent", text: "welcome 🌿 thanks for joining" },
      { from: "agent", text: "out of curiosity — what made you sign up today?" },
      { from: "lead", text: "trying to fix my sleep tbh" },
      { from: "agent", text: "ahh that's our specialty. mind if i send you our 7-day sleep reset (free)?" },
      { from: "lead", text: "please do!" },
      { from: "agent", text: "sent ✨ also — wanna book a free clarity call once you've tried it?" },
    ],
  },
];

export function LiveDemo() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const scenario = scenarios[scenarioIdx];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="text-xs text-[#293A22] tracking-[0.15em] uppercase font-bold mb-4 font-mono">
            Live demo
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>See it actually talk.</LetterReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Real conversation flows from agents we've shipped. Switch scenarios to see the agent adapt — same brand voice, different intents.
            </p>
          </BlurReveal>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div className="flex flex-col gap-4">
            {scenarios.map((s, i) => (
              <button
                key={i}
                onClick={() => setScenarioIdx(i)}
                className={cn(
                  "text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-5 group",
                  i === scenarioIdx
                    ? "border-[#293A22] bg-white shadow-xl shadow-[#293A22]/5"
                    : "border-slate-200 bg-slate-50 hover:border-slate-300"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold transition-colors",
                    i === scenarioIdx
                      ? "bg-[#293A22] text-white"
                      : "bg-slate-200 text-slate-500 group-hover:bg-slate-300"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <div className={cn(
                    "text-base font-bold transition-colors",
                    i === scenarioIdx ? "text-slate-900" : "text-slate-500"
                  )}>
                    {s.name}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">@{s.headerName}</div>
                </div>
                {i === scenarioIdx && (
                  <div className="w-2 h-2 rounded-full bg-[#293A22] animate-pulse" />
                )}
              </button>
            ))}

            <div className="mt-8 p-6 rounded-2xl border border-dashed border-slate-300 bg-white/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-slate-900">Voice match · 94%</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Trained on 217 of your past DMs · learns slang, emoji habits, response length, and how you handle objections.
              </p>
            </div>
          </div>

          <div className="flex justify-center perspective-1000">
            <div className="relative transform lg:rotate-[-2deg] lg:hover:rotate-0 transition-transform duration-500">
              <IGPhone
                headerName={scenario.headerName}
                messages={scenario.msgs as any}
                typing
                scale={0.9}
              />
              {/* Floating decoration */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#293A22] rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#293A22] rounded-2xl blur-2xl opacity-20 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
