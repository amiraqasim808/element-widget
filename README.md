🌟 Element Widget
A mobile-responsive, interactive widget built with Next.js (App Router), TypeScript, Zustand, and Tailwind CSS that allows users to select up to three elements from a list of 300 test items.

📋 Features
Initial Data — 300 test elements (Element 1 → Element 300).

Selection Limit — maximum of 3 items can be selected at a time.

Main Page — displays currently selected items and a button to change the selection.

Dialog Popup:

📜 Scrollable list of all elements.

🔍 Live search with substring matching.

🎯 Number filter (> 10, > 50, > 100).

Search and filter work together for combined filtering.

✅ Pre-checked boxes for already selected items.

🗂 Summary section inside dialog with an X to remove items.

🚫 When 3 items are selected, all other checkboxes are disabled.

Save — updates main page selection from dialog.

Cancel — closes dialog without changes.

Persistent storage — selections remain after reload.

🛠️ Tech Stack
Next.js (App Router)

TypeScript

Zustand (state management with persist middleware)

Tailwind CSS (custom responsive styling)

No UI libraries — everything styled from scratch.

📂 Project Structure
src/app/

globals.css — Tailwind global styles

layout.tsx — Root layout

page.tsx — Main page with selection display

src/components/dialog/

DialogFooter.tsx — Save/Cancel buttons

DialogHeader.tsx — Dialog title & close button

DialogSearchControls.tsx — Search input + filter select

ElementDialog.tsx — Dialog wrapper containing all selection logic

ElementItem.tsx — Individual element with checkbox

ElementList.tsx — Scrollable list of elements

SelectedElementsPanel.tsx — Summary of selected items inside dialog

SelectedList.tsx — List of selected items on main page

SelectFilter.tsx — Filter dropdown component

src/data/

elements.ts — Generates initial 300 elements

src/store/

useElementStore.ts — Zustand store (selected & tempSelected states)

src/types/

select.ts.ts — Type definitions for selected items

src/utils/

array.ts — Utility functions for array handling

🚀 Getting Started
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/amiraqasim808/element-widget.git
cd element-widget
2️⃣ Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3️⃣ Run the development server
bash
Copy
Edit
npm run dev
# or
yarn dev
Then open http://localhost:3000 in your browser.

🧪 How It Works
On the main page, you see up to 3 selected items (if any) and a "Change my choice" button.

Clicking the button opens the selection dialog.

Use the search and/or filter dropdown to refine the list.

Check or uncheck items — the summary section inside the dialog updates instantly.

Click Save to commit your selection to the main page, or Cancel to discard changes.

📱 Responsive Design
Adapts to mobile, tablet, and desktop viewports.

Uses Tailwind's responsive utilities for layout, spacing, and typography.

Dialog scales for smaller screens with scrollable content.

📊 Performance Notes
Zustand ensures minimal and targeted state updates.

shallow comparison prevents unnecessary re-renders.

Partial persist stores only committed selections — temporary selections are ephemeral.
