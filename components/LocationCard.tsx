"use client";

import { useState } from "react";

interface LocationCardProps {
  onConfirm: (locations: string[]) => void;
}

const LOCATION_SUGGESTIONS = [
  "London",
  "Manchester",
  "Birmingham",
  "Edinburgh",
  "Bristol",
  "Leeds",
];

export function LocationCard({ onConfirm }: LocationCardProps) {
  const [selected, setSelected] = useState<string[]>(["London"]);
  const [inputValue, setInputValue] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);

  const toggle = (loc: string) => {
    setSelected((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  };

  const handleAdd = () => {
    const v = inputValue.trim();
    if (v && !selected.includes(v)) {
      setSelected((prev) => [...prev, v]);
    }
    setInputValue("");
  };

  return (
    <section>
      <div className="text-center mb-6">
        <p className="text-sm text-[#6B7280]">Let&apos;s confirm some details</p>
        <h2 className="text-xl sm:text-2xl font-bold text-[#0E1B45] mt-1">
          Where do you want to work?
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
            My understanding of your location preferences
          </span>
        </div>

        {/* Selected locations */}
        {selected.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selected.map((loc) => (
              <div
                key={loc}
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-[#0E1B45] bg-white"
              >
                <span className="font-medium">{loc}</span>
                <button
                  onClick={() => toggle(loc)}
                  className="text-[#6B7280] hover:text-[#0E1B45] ml-1 text-base leading-none transition-colors"
                  aria-label={`Remove ${loc}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 mb-5">
          <input
            className="flex-1 bg-transparent text-sm text-[#0E1B45] outline-none placeholder:text-[#6B7280]"
            placeholder="Add a city or region…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <button
            onClick={handleAdd}
            className="w-7 h-7 rounded-full bg-[#0E1B45] flex items-center justify-center text-white flex-shrink-0 hover:bg-[#0C6B72] transition-colors"
            aria-label="Add location"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M12 7L8 3M12 7L8 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Remote toggle */}
        <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 mb-5 bg-gray-50">
          <div>
            <p className="text-sm font-medium text-[#0E1B45]">Remote only</p>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Show only fully remote positions
            </p>
          </div>
          <button
            onClick={() => setRemoteOnly((v) => !v)}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
              remoteOnly ? "bg-[#0C6B72]" : "bg-gray-300"
            }`}
            aria-label="Toggle remote only"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                remoteOnly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Suggestions */}
        <div>
          <p className="text-sm font-medium text-[#0E1B45] mb-3">Suggestions</p>
          <div className="flex flex-wrap gap-2">
            {LOCATION_SUGGESTIONS.filter((s) => !selected.includes(s)).map(
              (loc) => (
                <button
                  key={loc}
                  onClick={() => toggle(loc)}
                  className="flex items-center gap-1.5 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-[#0E1B45] hover:bg-gray-50 transition-colors bg-white"
                >
                  <span className="text-[#6B7280] font-medium">+</span>
                  <span>{loc}</span>
                </button>
              )
            )}
            {LOCATION_SUGGESTIONS.filter((s) => !selected.includes(s))
              .length === 0 && (
              <p className="text-sm text-[#6B7280] italic">
                All suggestions added
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={() => onConfirm(selected)}
          className="bg-[#0C6B72] text-white font-semibold px-6 sm:px-8 py-3 rounded-xl hover:bg-[#0A5A60] transition-colors text-sm sm:text-base"
        >
          Confirm
        </button>
      </div>
    </section>
  );
}
