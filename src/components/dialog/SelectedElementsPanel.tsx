"use client";

interface SelectedElementsPanelProps {
  selectedItems: string[];
  onRemove: (label: string) => void;
  className?: string;
}

export default function SelectedElementsPanel({
  selectedItems,
  onRemove,
  className = "",
}: SelectedElementsPanelProps) {
  const selectionCount = selectedItems.length;

  return (
    <aside
      className={`order-1 md:order-2 w-full md:w-64 border border-[var(--color-purple-light)]/10 rounded-lg sm:rounded-xl p-2 sm:p-3 bg-[var(--color-bg-mid)] flex-shrink-0 overflow-y-auto max-h-48 md:max-h-[calc(100vh-18rem)] shadow-inner ${className}`}
    >
      <h3 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-[var(--color-purple-light)]">
        Selected ({selectionCount})
      </h3>

      {selectionCount === 0 ? (
        <div className="text-xs sm:text-sm text-[var(--color-purple-light)]/50 italic">
          No items selected.
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {selectedItems.map((label) => (
            <span
              key={label}
              className="px-3 sm:px-5 py-1 sm:py-2 rounded-full text-sm sm:text-base font-semibold bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-pink-light)] text-white shadow-md flex items-center justify-between"
            >
              {label}
              <button
                aria-label={`Remove ${label}`}
                onClick={() => onRemove(label)}
                className="ml-3 sm:ml-5 text-white/90 hover:text-white font-bold cursor-pointer text-md sm:text-lg"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="mt-2 sm:mt-4 text-[10px] sm:text-xs text-[var(--color-purple-light)]/50">
        💡 Tip: Search narrows the list
      </div>
    </aside>
  );
}
