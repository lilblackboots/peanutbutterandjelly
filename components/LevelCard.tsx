"use client";

import { useState } from "react";

const LEVELS = [
  { id: "entry", label: "Entry Level", desc: "0–2 years" },
  { id: "mid", label: "Mid-Level", desc: "2–5 years" },
  { id: "senior", label: "Senior", desc: "5–8 years" },
  { id: "lead", label: "Lead / Manager", desc: "8+ years" },
  { id: "director", label: "Director+", desc: "Executive" },
];

interface LevelCardProps {
  onConfirm: (level: string) => void;
}

export function LevelCard({ onConfirm }: LevelCardProps) {
  const [selected, setSelected] = useState("senior");

  return (
    <section>
      <div className="text-center mb-6">
        <p className="text-sm text-[#6B7280]">Let&apos;s confirm some details</p>
        <h2 className="text-xl sm:text-2xl font-bold text-[#0E1B45] mt-1">
          What&apos;s your experience level?
        </h2>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-5 h-5 rounded-full flex-shrink-0"
            style={{
              background:
                "conic-gradient(from 90deg, #F4767A 0%, #52C3CA 60%, transparent 100%)",
            }}
          />
          <span className="text-sm font-medium text-[#0E1B45]">
            Based on your CV, here&apos;s my best guess
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {LEVELS.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelected(level.id)}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 border text-left transition-all duration-150 ${
                selected === level.id
                  ? "border-[#0C6B72] bg-[#f0fafa] shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div>
                <p
                  className={`text-sm font-semibold ${
                    selected === level.id ? "text-[#0C6B72]" : "text-[#0E1B45]"
                  }`}
                >
                  {level.label}
                </p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">{level.desc}</p>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${
                  selected === level.id
                    ? "border-[#0C6B72] bg-[#0C6B72]"
                    : "border-gray-300"
                }`}
              >
                {selected === level.id && (
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2.5 2.5L8 2"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={() =>
            onConfirm(LEVELS.find((l) => l.id === selected)?.label ?? selected)
          }
          className="bg-[#0C6B72] text-white font-semibold px-6 sm:px-8 py-3 rounded-xl hover:bg-[#0A5A60] transition-colors text-sm sm:text-base"
        >
          Confirm
        </button>
      </div>
    </section>
  );
}
