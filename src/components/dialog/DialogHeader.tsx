import React from "react";

interface DialogHeaderProps {
  maxSelections: number;
  selectedCount: number;
  selectionCount: number;
  title?: string;
  className?: string;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({
  maxSelections,
  selectedCount,
  selectionCount,
  title = "Select up to",
  className = "",
}) => {
  return (
    <header
      className={`sticky top-0 z-10 p-3 sm:p-5 pb-2 sm:pb-4 flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 border-b border-white/10 bg-[var(--color-bg-mid)]/80 backdrop-blur rounded-t-2xl sm:rounded-t-3xl ${className}`}
    >
      <div className="w-full">
        <h2 className="text-xl sm:text-3xl font-heading text-white tracking-tight">
          {title}{" "}
          <span className="text-[var(--color-purple-light)]">
            {maxSelections}
          </span>{" "}
          elements
        </h2>
        <div className="flex justify-between items-center w-full mt-1">
          <p className="text-xs sm:text-sm text-[var(--color-purple-light)]/70">
            {selectedCount} saved selections
          </p>
          <div className="text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-pink-light)] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md">
            {selectionCount}/{maxSelections}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DialogHeader;
