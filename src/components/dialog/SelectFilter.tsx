import React, { useState, useRef, useEffect } from "react";
import { Option } from "../../types/select.ts.js";

interface CustomSelectProps {
  options: Option[];
  value: number | null;
  onChange: (value: number | null) => void;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || "Select";

  return (
    <div className="relative w-48" ref={ref}>
      <button
        type="button"
        className="w-full bg-[var(--color-bg-mid)] cursor-pointer text-white px-4 py-2 rounded-xl border border-[var(--color-purple-light)]/20 shadow-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[var(--color-purple-light)]/60"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedLabel}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-[var(--color-bg-mid)] border border-[var(--color-purple-light)]/20 shadow-lg scrollbar-theme" // Added scrollbar-theme here
          role="listbox"
          tabIndex={-1}
        >
          {options.map(({ value: optValue, label }) => (
            <li
              key={optValue === null ? "all" : optValue}
              onClick={() => {
                onChange(optValue);
                setIsOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 text-white hover:bg-[var(--color-purple-start)] ${
                optValue === value
                  ? "bg-[var(--color-purple-active)] font-semibold"
                  : ""
              }`}
              role="option"
              aria-selected={optValue === value}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onChange(optValue);
                  setIsOpen(false);
                }
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
