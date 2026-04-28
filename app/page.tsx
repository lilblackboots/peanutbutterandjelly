"use client";

import { useEffect, useState } from "react";
import { CVUpload } from "@/components/CVUpload";
import { CVSummary } from "@/components/CVSummary";
import { Header } from "@/components/Header";
import { JobSearchSummary } from "@/components/JobSearchSummary";
import { LevelCard } from "@/components/LevelCard";
import { LocationCard } from "@/components/LocationCard";
import { ProgressBar } from "@/components/ProgressBar";
import { RoleSelectionCard } from "@/components/RoleSelectionCard";
import { StepstoneIcon } from "@/components/StepstoneIcon";

type Step = "upload" | "parsing" | "role" | "location" | "level" | "done";

interface Role {
  label: string;
  count: number;
}

const STEP_META: Record<
  Exclude<Step, "upload" | "parsing">,
  { label: string; value: number }
> = {
  role: { label: "Step 1 of 3", value: 25 },
  location: { label: "Step 2 of 3", value: 50 },
  level: { label: "Step 3 of 3", value: 75 },
  done: { label: "All done!", value: 100 },
};

export default function Home() {
  const [step, setStep] = useState<Step>("upload");
  const [fileName, setFileName] = useState("");
  const [roles, setRoles] = useState<Role[]>([
    { label: "Product Manager", count: 453 },
  ]);
  const [roleInput, setRoleInput] = useState("");
  const [fading, setFading] = useState(false);
  const [showScreen2, setShowScreen2] = useState(false);

  const transition = (next: Step) => {
    setFading(true);
    setTimeout(() => {
      setStep(next);
      setFading(false);
    }, 280);
  };

  const handleUpload = (file: File) => {
    setFileName(file.name);
    setStep("parsing");
    setTimeout(() => {
      setStep("role");
      setShowScreen2(true);
    }, 2000);
  };

  const handleAddSuggestion = (role: Role) => {
    if (!roles.find((r) => r.label === role.label)) {
      setRoles((prev) => [...prev, role]);
    }
  };

  // Screen 1 — Upload
  if (step === "upload") {
    return <CVUpload onUpload={handleUpload} />;
  }

  // Screen 1.5 — Parsing animation
  if (step === "parsing") {
    return (
      <div className="min-h-screen bg-[#F2F4F8] flex flex-col animate-fade-in">
        <div className="px-6 pt-5 pb-2">
          <StepstoneIcon />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6 pb-16">
          {/* Spinner */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-[#E2E8F0]" />
            <div
              className="absolute inset-0 rounded-full border-4 border-[#4BC4CB] border-t-transparent"
              style={{ animation: "spin 0.9s linear infinite" }}
            />
          </div>
          <div className="text-center">
            <p className="text-[#0E1B45] font-semibold text-base">
              Analysing your CV…
            </p>
            <p className="text-[#9CA3AF] text-sm mt-1">
              This will just take a moment
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Screen 2 — Preferences flow
  const meta = STEP_META[step as Exclude<Step, "upload" | "parsing">];

  return (
    <div
      className="min-h-screen bg-[#F2F4F8] flex flex-col"
      style={{
        opacity: showScreen2 ? 1 : 0,
        transition: "opacity 0.35s ease-out",
      }}
    >
      {/* Header */}
      <Header progressLabel={meta.label} progressValue={meta.value} />
      <ProgressBar value={meta.value} />

      {/* Content */}
      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-6 sm:py-8">
        {/* CV summary — always visible */}
        <CVSummary fileName={fileName} />

        {/* Step card with fade-slide transition */}
        <div
          key={step}
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
            animation: !fading ? "fadeSlideIn 0.35s ease-out forwards" : "none",
          }}
        >
          {step === "role" && (
            <RoleSelectionCard
              roles={roles}
              onRemoveRole={(label) =>
                setRoles((prev) => prev.filter((r) => r.label !== label))
              }
              inputValue={roleInput}
              onInputChange={setRoleInput}
              onAddSuggestion={handleAddSuggestion}
              onConfirm={() => transition("location")}
            />
          )}

          {step === "location" && (
            <LocationCard onConfirm={() => transition("level")} />
          )}

          {step === "level" && (
            <LevelCard onConfirm={() => transition("done")} />
          )}

          {step === "done" && (
            <div className="flex flex-col gap-5">
              <JobSearchSummary />
              <button className="w-full bg-[#0C6B72] text-white font-semibold py-3.5 rounded-xl hover:bg-[#0A5A60] transition-colors text-sm sm:text-base">
                Start Auto Applying →
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
