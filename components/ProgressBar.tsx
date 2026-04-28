interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full h-1 bg-gray-200">
      <div
        className="h-full bg-[#4BC4CB] transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
