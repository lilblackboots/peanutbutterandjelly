export function JobSearchSummary() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
      <p className="text-xs font-semibold text-[#0E1B45] mb-3 uppercase tracking-wide">
        Your job search
      </p>
      <div
        className="rounded-xl p-4 sm:p-6"
        style={{ background: "linear-gradient(to right, #9DD8DC, #ffffff)" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <h2 className="text-base sm:text-lg font-bold text-[#0E1B45] sm:max-w-[600px] leading-snug">
            Project Manager in London, earning more than £55,000 yearly
          </h2>
          <button className="self-start flex-shrink-0 border border-[#0E1B45] text-[#0E1B45] text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            Refine search
          </button>
        </div>
        <div className="flex gap-8 sm:gap-16 mt-5 sm:mt-6">
          <div>
            <p className="text-xs text-[#6B7280] mb-1">Available roles</p>
            <p className="text-3xl sm:text-4xl font-bold text-[#0E1B45]">453</p>
          </div>
          <div>
            <p className="text-xs text-[#6B7280] mb-1 flex items-center gap-1">
              Interview chance
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#6B7280] text-[9px] font-bold leading-none">
                ?
              </span>
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-[#0E1B45]">High</p>
          </div>
        </div>
      </div>
    </div>
  );
}
