"use client";
import { useElementStore } from "@/store/useElementStore";

/**
 * Shows the currently saved selection (max 3) on the main page.
 */
export default function SelectedList() {
  const { selected } = useElementStore();

if (selected.length === 0) {
  return (
    <p className="text-[color:var(--color-purple-light)]/70 italic text-lg tracking-wide">
      No items selected yet.
    </p>
  );
}

return (
  <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl">
    <p className="text-[color:var(--color-purple-light)] pb-4 sm:pb-8 font-medium text-lg sm:text-xl md:text-2xl tracking-wide">
      You currently have {selected.length} selected item
      {selected.length !== 1 && "s"}:
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
      {selected.map((el) => (
        <div
          key={el}
          className="relative w-full aspect-[3/1] min-h-[40px] sm:min-h-[50px]"
        >
          <span
            className="absolute inset-0 flex items-center justify-center px-2 py-1 sm:px-3 sm:py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold text-white shadow-lg"
            style={{
              backgroundImage: `linear-gradient(to right, var(--color-purple-start), var(--color-pink-light))`,
            }}
          >
            <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full px-1">
              {el}
            </span>
          </span>
        </div>
      ))}
    </div>
  </div>
);


}
