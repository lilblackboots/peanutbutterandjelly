"use client";

interface Role {
  label: string;
  count: number;
}

interface RoleSelectionCardProps {
  roles: Role[];
  onRemoveRole: (label: string) => void;
  inputValue: string;
  onInputChange: (v: string) => void;
  onAddSuggestion: (role: Role) => void;
  onConfirm: () => void;
}

const SUGGESTIONS: Role[] = [
  { label: "Head of Product", count: 60 },
  { label: "Product owner", count: 240 },
  { label: "Lead Product Manager", count: 120 },
];

export function RoleSelectionCard({
  roles,
  onRemoveRole,
  inputValue,
  onInputChange,
  onAddSuggestion,
  onConfirm,
}: RoleSelectionCardProps) {
  const availableSuggestions = SUGGESTIONS.filter(
    (s) => !roles.find((r) => r.label === s.label)
  );

  return (
    <section>
      {/* Section header */}
      <div className="text-center mb-6">
        <p className="text-sm text-[#6B7280]">Let&apos;s confirm some details</p>
        <h2 className="text-xl sm:text-2xl font-bold text-[#0E1B45] mt-1">
          What role are you looking for?
        </h2>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
        {/* Card header */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-5 h-5 rounded-full flex-shrink-0"
            style={{
              background:
                "conic-gradient(from 90deg, #F4767A 0%, #52C3CA 60%, transparent 100%)",
            }}
          />
          <span className="text-sm font-medium text-[#0E1B45]">
            My understanding of what you shared
          </span>
        </div>

        {/* Selected role tags */}
        {roles.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {roles.map((role) => (
              <div
                key={role.label}
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-[#0E1B45] bg-white"
              >
                <span className="font-medium">{role.label}</span>
                <span className="text-[#6B7280] text-xs">{role.count} roles</span>
                <button
                  onClick={() => onRemoveRole(role.label)}
                  className="text-[#6B7280] hover:text-[#0E1B45] ml-1 text-base leading-none transition-colors"
                  aria-label={`Remove ${role.label}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Input row */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 mb-6">
          <input
            className="flex-1 bg-transparent text-sm text-[#0E1B45] outline-none placeholder:text-[#6B7280]"
            placeholder="Input placeholder guidance"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
          />
          <button
            className="w-7 h-7 rounded-full bg-[#0E1B45] flex items-center justify-center text-white flex-shrink-0 hover:bg-[#0C6B72] transition-colors"
            aria-label="Submit"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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

        {/* Suggestions */}
        <div>
          <p className="text-sm font-medium text-[#0E1B45] mb-3">Suggestions</p>
          <div className="flex flex-wrap gap-2">
            {availableSuggestions.map((suggestion) => (
              <button
                key={suggestion.label}
                onClick={() => onAddSuggestion(suggestion)}
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-[#0E1B45] hover:bg-gray-50 transition-colors bg-white"
              >
                <span className="text-[#6B7280] font-medium">+</span>
                <span>{suggestion.label}</span>
                <span className="text-[#6B7280] text-xs">{suggestion.count} roles</span>
              </button>
            ))}
            {availableSuggestions.length === 0 && (
              <p className="text-sm text-[#6B7280] italic">All suggestions added</p>
            )}
          </div>
        </div>
      </div>

      {/* Confirm button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={onConfirm}
          className="bg-[#0C6B72] text-white font-semibold px-6 sm:px-8 py-3 rounded-xl hover:bg-[#0A5A60] transition-colors text-sm sm:text-base"
        >
          Confirm
        </button>
      </div>
    </section>
  );
}
