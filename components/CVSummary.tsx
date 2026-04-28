"use client";

interface CVSummaryProps {
  fileName: string;
}

const MOCK = {
  name: "Alex Johnson",
  role: "Senior Product Manager",
  experience: "7 years experience",
  education: "BSc Computer Science · University of Edinburgh",
  skills: ["Product Strategy", "Agile", "Stakeholder Management", "Data Analysis"],
};

export function CVSummary({ fileName }: CVSummaryProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 mb-6 animate-fade-slide-in">
      <div className="flex items-start gap-3">
        {/* PDF icon */}
        <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="2" width="16" height="20" rx="2" fill="#FECACA" />
            <path d="M4 8h16" stroke="white" strokeWidth="1.5" />
            <path
              d="M8 13h8M8 16h5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <text x="6" y="7" fontSize="4" fill="#EF4444" fontWeight="bold">
              PDF
            </text>
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          {/* File name + analysed badge */}
          <div className="flex items-center gap-2 mb-2.5">
            <p className="text-xs text-[#9CA3AF] truncate">{fileName}</p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0C6B72] bg-[#E6F4F5] px-2 py-0.5 rounded-full flex-shrink-0">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5l2.5 2.5L8 2.5"
                  stroke="#0C6B72"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Analysed
            </span>
          </div>

          {/* Name + role + experience */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-1">
            <span className="text-sm font-bold text-[#0E1B45]">{MOCK.name}</span>
            <span className="text-[#D1D5DB]">·</span>
            <span className="text-sm text-[#0E1B45]">{MOCK.role}</span>
            <span className="text-[#D1D5DB]">·</span>
            <span className="text-sm text-[#6B7280]">{MOCK.experience}</span>
          </div>

          {/* Education */}
          <p className="text-xs text-[#9CA3AF] mb-2.5">{MOCK.education}</p>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-1.5">
            {MOCK.skills.map((s) => (
              <span
                key={s}
                className="text-[11px] font-medium text-[#374151] bg-[#F2F4F8] px-2 py-0.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
