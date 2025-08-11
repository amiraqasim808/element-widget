import React from "react";

interface DialogFooterProps {
  onCancel: () => void;
  onSave: () => void;
  dirty: boolean;
  cancelText?: string;
  saveText?: string;
  className?: string;
}

const DialogFooter: React.FC<DialogFooterProps> = ({
  onCancel,
  onSave,
  dirty,
  cancelText = "Cancel",
  saveText = "Save",
  className = "",
}) => {
  return (
    <footer
      className={`sticky bottom-0 z-10 p-2 sm:p-3 border-t border-white/10 bg-[var(--color-bg-mid)]/80 backdrop-blur rounded-b-2xl sm:rounded-b-3xl flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 ${className}`}
    >
      <button
        onClick={onCancel}
        className="px-3 sm:px-5 py-2 border border-[var(--color-purple-light)]/20 rounded-lg sm:rounded-xl hover:bg-[var(--color-purple-start)]/20 transition-all shadow-sm text-[var(--color-purple-light)] text-sm sm:text-base font-medium cursor-pointer"
      >
        {cancelText}
      </button>
      <button
        onClick={onSave}
        disabled={!dirty}
        className={`px-3 sm:px-5 py-2 rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-semibold shadow-md transition-all cursor-pointer ${
          dirty
            ? "bg-gradient-to-r from-[var(--color-purple-start)] to-[var(--color-pink-light)] hover:from-[var(--color-purple-light)] hover:to-[var(--color-pink-light)] active:scale-95"
            : "bg-white/10 opacity-50 cursor-not-allowed"
        }`}
      >
        {saveText}
      </button>
    </footer>
  );
};

export default DialogFooter;
