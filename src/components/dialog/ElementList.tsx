"use client";

import ElementItem from "./ElementItem";
import { MAX_SELECTIONS } from "@/store/useElementStore";

interface ElementsListProps {
  elements: string[];
  tempSelected: string[];
  selectionCount: number;
  onToggle: (label: string) => void;
  className?: string;
}

export default function ElementsList({
  elements,
  tempSelected,
  selectionCount,
  onToggle,
  className = "",
}: ElementsListProps) {
  const isChecked = (label: string) => tempSelected.includes(label);

  return (
    <div
      className={`order-2 md:order-1 flex-1 min-w-0 overflow-y-auto border border-[var(--color-purple-light)]/10 rounded-lg sm:rounded-xl p-2 sm:p-3 bg-[var(--color-bg-mid)] shadow-inner scrollbar-theme h-[calc(100vh-18rem)] md:h-auto ${className}`}
    >
      {elements.length === 0 ? (
        <div className="p-2 sm:p-4 text-sm sm:text-base text-[var(--color-purple-light)]/50 italic">
          No matching elements
        </div>
      ) : (
        <>
          {selectionCount >= MAX_SELECTIONS && (
            <div className="mb-3 sm:mb-4 text-center text-xs sm:text-sm font-semibold text-pink-400 bg-[var(--color-purple-light)]/30 rounded-md py-1 sm:py-2 shadow-md">
              Max {MAX_SELECTIONS} reached
            </div>
          )}
          <div className="space-y-1 sm:space-y-2">
            {elements.map((label) => {
              const checked = isChecked(label);
              const disabled = !checked && selectionCount >= MAX_SELECTIONS;
              return (
                <div key={label} className="py-0 sm:py-1">
                  <ElementItem
                    label={label}
                    checked={checked}
                    disabled={disabled}
                    onToggle={() => onToggle(label)}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
