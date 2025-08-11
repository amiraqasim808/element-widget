import { create } from "zustand";
import { persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";

export const MAX_SELECTIONS = 3;

type ElementStore = {
  selected: string[];
  tempSelected: string[];
  setSelected: (items: string[]) => void;
  setTempSelected: (items: string[]) => void;
  addTemp: (item: string) => boolean;
  removeTemp: (item: string) => void;
  resetTemp: () => void;
  clearSelected: () => void;
};

export const useElementStore = create<ElementStore>()(
  persist(
    (set, get) => ({
      selected: [],
      tempSelected: [],

      setSelected: (items) => {
        const newItems = items.slice();
        set({ selected: newItems, tempSelected: newItems });
      },

      setTempSelected: (items) => {
        const current = get().tempSelected;
        if (
          items.length === current.length &&
          items.every((val, i) => val === current[i])
        ) {
          return;
        }
        set({ tempSelected: items.slice() });
      },

      addTemp: (item) => {
        const { tempSelected } = get();
        if (
          tempSelected.includes(item) ||
          tempSelected.length >= MAX_SELECTIONS
        ) {
          return false;
        }
        set({ tempSelected: [...tempSelected, item] });
        return true;
      },

      removeTemp: (item) => {
        set((state) => {
          const newSelected = state.tempSelected.filter((i) => i !== item);
          return newSelected.length !== state.tempSelected.length
            ? { tempSelected: newSelected }
            : {};
        });
      },

      resetTemp: () => {
        set((state) => {
          return shallow(state.selected, state.tempSelected)
            ? {}
            : { tempSelected: state.selected.slice() };
        });
      },

      clearSelected: () => {
        set({ selected: [], tempSelected: [] });
      },
    }),
    {
      name: "element-widget-storage",
      partialize: (state) => ({ selected: state.selected }),
      onRehydrateStorage: (state) => {
        if (state?.selected && state.selected.length > MAX_SELECTIONS) {
          state.selected = state.selected.slice(0, MAX_SELECTIONS);
        }
      },
    }
  )
);
