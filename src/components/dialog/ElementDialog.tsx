"use client";

import { useEffect, useMemo, useState } from "react";
import { elements } from "@/data/elements";
import { useElementStore, MAX_SELECTIONS } from "@/store/useElementStore";
import DialogFooter from "./DialogFooter";
import DialogHeader from "./DialogHeader";
import DialogSearchControls from "./DialogSearchControls";
import SelectedElementsPanel from "./SelectedElementsPanel";
import ElementsList from "./ElementList";
import { arraysEqual } from "@/utils/array";

interface ElementDialogProps {
  onClose: () => void;
}

const options = [
  { value: null, label: "All" },
  { value: 10, label: "Number > 10" },
  { value: 50, label: "Number > 50" },
  { value: 100, label: "Number > 100" },
  { value: 150, label: "Number > 150" },
  { value: 200, label: "Number > 200" },
  { value: 250, label: "Number > 250" },
];

export default function ElementDialog({ onClose }: ElementDialogProps) {
  const {
    tempSelected,
    addTemp,
    removeTemp,
    resetTemp,
    setSelected,
    selected,
  } = useElementStore();

  const [search, setSearch] = useState("");
  const dirty = useMemo(
    () => !arraysEqual(selected, tempSelected),
    [selected, tempSelected]
  );
  const [filterThreshold, setFilterThreshold] = useState<number | null>(null);

  useEffect(() => {
    resetTemp();
    const el = document.getElementById(
      "element-search-input"
    ) as HTMLInputElement | null;
    if (el) el.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetTemp();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return elements.filter((el) => {
      const matchesSearch = q === "" || el.toLowerCase().includes(q);
      const num = Number(el.split(" ")[1]) || 0;
      const matchesFilter = filterThreshold ? num > filterThreshold : true;
      return matchesSearch && matchesFilter;
    });
  }, [search, filterThreshold]);

  const isChecked = (label: string) => tempSelected.includes(label);
  const selectionCount = tempSelected.length;

  const handleToggle = (label: string) => {
    if (isChecked(label)) {
      removeTemp(label);
      return;
    }
    addTemp(label);
  };

  const handleRemoveSelected = (label: string) => {
    removeTemp(label);
  };

  const handleSave = () => {
    setSelected(tempSelected);
    onClose();
  };

  const handleCancel = () => {
    resetTemp();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4"
    >
      <div className="bg-gradient-to-br from-[var(--color-bg-mid)]/90 to-[var(--color-bg-start)]/90 rounded-2xl sm:rounded-3xl w-full max-w-6xl h-full sm:h-auto sm:max-h-[95vh] flex flex-col shadow-2xl border border-[var(--color-purple-light)]/10 overflow-hidden">
        {/* Header  */}
        <DialogHeader
          maxSelections={MAX_SELECTIONS}
          selectedCount={selected.length}
          selectionCount={tempSelected.length}
        />

        {/* Body */}
        <div className="p-3 sm:p-4 pt-2 flex flex-col gap-2 sm:gap-3 flex-1 min-h-0">
          <DialogSearchControls
            searchValue={search}
            onSearchChange={setSearch}
            filterValue={filterThreshold}
            onFilterChange={setFilterThreshold}
            onClear={() => {
              setSearch("");
              setFilterThreshold(null);
            }}
            selectOptions={options}
          />

          {/* List + Selected*/}
          <div className="flex flex-col md:flex-row gap-2 sm:gap-3 flex-1 min-h-0">
            {/* Main list*/}
            <ElementsList
              elements={filtered}
              tempSelected={tempSelected}
              selectionCount={selectionCount}
              onToggle={handleToggle}
            />

            {/* Selected  */}
            <SelectedElementsPanel
              selectedItems={tempSelected}
              onRemove={handleRemoveSelected}
            />
          </div>
        </div>

        {/* Footer  */}
        <DialogFooter
          onCancel={handleCancel}
          onSave={handleSave}
          dirty={dirty}
        />
      </div>
    </div>
  );
}
