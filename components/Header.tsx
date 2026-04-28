"use client";

import { StepstoneIcon } from "./StepstoneIcon";

interface HeaderProps {
  progressLabel: string;
  progressValue: number;
}

export function Header({ progressLabel, progressValue }: HeaderProps) {
  return (
    <header className="relative flex items-center px-4 py-4 bg-white border-b border-gray-100">
      <div className="absolute left-4">
        <StepstoneIcon />
      </div>
      <div className="flex-1 text-center">
        <span className="text-sm font-semibold text-[#0E1B45]">{progressLabel}</span>
        <span className="ml-2 text-sm font-semibold text-[#0E1B45]">{progressValue}%</span>
      </div>
    </header>
  );
}
