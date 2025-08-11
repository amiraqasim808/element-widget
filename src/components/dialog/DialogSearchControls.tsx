import CustomSelect from "./SelectFilter";
import { Option } from "../../types/select.ts";

interface DialogSearchControlsProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  filterValue: number | null;
  onFilterChange: (value: number | null) => void;
  onClear: () => void;
  selectOptions: Option[];
  className?: string;
}

const DialogSearchControls: React.FC<DialogSearchControlsProps> = ({
  searchValue,
  onSearchChange,
  filterValue,
  onFilterChange,
  onClear,
  selectOptions,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0 ${className}`}
    >
      <input
        type="search"
        placeholder="🔍 Search..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 border border-[var(--color-purple-light)]/20 bg-[var(--color-bg-mid)] px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-[var(--color-purple-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-purple-light)]/60 shadow-sm"
      />
      <div className="flex gap-2 sm:gap-3">
        <CustomSelect
          options={selectOptions}
          value={filterValue}
          onChange={onFilterChange}
          className="flex-1 min-w-[120px]"
        />
        <button
          type="button"
          onClick={onClear}
          className="px-3 sm:px-5 py-2 border border-[var(--color-purple-light)]/20 rounded-lg sm:rounded-xl hover:bg-[var(--color-purple-start)]/20 transition-all shadow-sm text-[var(--color-purple-light)] text-sm sm:text-base font-medium cursor-pointer whitespace-nowrap"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default DialogSearchControls;
