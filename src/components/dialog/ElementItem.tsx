"use client";

interface ElementItemProps {
  label: string;
  checked: boolean;
  disabled: boolean;
  onToggle: () => void;
}

export default function ElementItem({
  label,
  checked,
  disabled,
  onToggle,
}: ElementItemProps) {
  return (
    <label
      className={`flex items-center   gap-4 px-5 py-2 rounded-full border transition-all duration-300
    ${
      disabled
        ? "opacity-40 cursor-not-allowed bg-white/5 border-[var(--color-purple-light)]/10 text-[var(--color-purple-light)]/40"
        : "cursor-pointer bg-white/5 border-[var(--color-purple-light)]/20 hover:border-[var(--color-purple-light)]/60 hover:shadow-[var(--color-purple-light)]/30 hover:shadow-lg"
    }
  `}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onToggle}
        aria-checked={checked}
        aria-disabled={disabled}
        className="peer hidden"
      />

      {/* Custom checkbox */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 border
      ${
        checked
          ? "bg-gradient-to-tr from-[var(--color-purple-start)] to-[var(--color-pink-light)] border-transparent shadow-md shadow-[var(--color-purple-start)]/40"
          : "bg-white/5 border-[var(--color-purple-light)]/30 peer-hover:border-[var(--color-purple-light)]/60"
      }
    `}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white drop-shadow-md"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>

      {/* Label text */}
      <span
        className={`text-sm font-semibold select-none transition-colors duration-300
      ${
        disabled
          ? "text-[var(--color-purple-light)]/40"
          : "text-white peer-hover:text-[var(--color-purple-light)]"
      }
    `}
      >
        {label}
      </span>
    </label>
  );
}




