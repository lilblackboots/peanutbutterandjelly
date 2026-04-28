"use client";

import { useCallback, useRef, useState } from "react";
import { StepstoneIcon } from "./StepstoneIcon";

interface CVUploadProps {
  onUpload: (file: File) => void;
}

export function CVUpload({ onUpload }: CVUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) onUpload(file);
    },
    [onUpload]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
  };

  return (
    <div className="min-h-screen bg-[#F2F4F8] flex flex-col animate-fade-in">
      {/* Top bar */}
      <div className="px-6 pt-5 pb-2">
        <StepstoneIcon />
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
        <div className="w-full max-w-lg animate-fade-slide-in">
          {/* Headline */}
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold text-[#0C6B72] bg-[#E6F4F5] px-3 py-1 rounded-full mb-5 tracking-widest uppercase">
              AI-powered job applications
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0E1B45] leading-tight mb-4">
              Apply smarter.<br />Not harder.
            </h1>
            <p className="text-[#6B7280] text-base sm:text-lg max-w-sm mx-auto leading-relaxed">
              Upload your CV and we&apos;ll match you with the right roles and apply automatically.
            </p>
          </div>

          {/* Drop zone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={`
              relative cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center
              transition-all duration-200
              ${
                isDragging
                  ? "border-[#4BC4CB] bg-[#E6F4F5] scale-[1.01]"
                  : "border-gray-300 bg-white hover:border-[#4BC4CB] hover:bg-[#f8fdfd]"
              }
            `}
          >
            {/* Upload icon */}
            <div className="flex justify-center mb-5">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                  isDragging ? "bg-[#4BC4CB]" : "bg-[#F2F4F8]"
                }`}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isDragging ? "white" : "#0E1B45"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
            </div>

            <p className="text-[#0E1B45] font-semibold text-base mb-1">
              {isDragging ? "Drop your CV here" : "Drag & drop your CV here"}
            </p>
            <p className="text-[#9CA3AF] text-sm mb-5">or</p>

            <span className="inline-block bg-[#0E1B45] text-white text-sm font-semibold px-6 py-2.5 rounded-xl pointer-events-none hover:bg-[#0C6B72] transition-colors">
              Browse files
            </span>

            <p className="text-[#9CA3AF] text-xs mt-4">
              PDF, DOC, DOCX — up to 10 MB
            </p>

            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleChange}
            />
          </div>

          {/* Trust line */}
          <p className="text-center text-xs text-[#9CA3AF] mt-5">
            Your data is processed securely and never shared without consent.
          </p>
        </div>
      </div>
    </div>
  );
}
