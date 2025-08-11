# 🌟 Element Widget

A **mobile-responsive**, interactive widget built with **Next.js (App Router)**, **TypeScript**, **Zustand**, and **Tailwind CSS** that allows users to select **up to three elements** from a list of 300 test items.

---

## 📋 Features

- **Initial Data** — 300 test elements (`Element 1` → `Element 300`)
- **Selection Limit** — maximum of **3 items** at a time
- **Main Page** — displays currently selected items + "Change my choice" button
- **Dialog Popup**:
  - 📜 **Scrollable list** of all elements
  - 🔍 **Live search** with substring matching
  - 🎯 **Number filter** (`> 10`, `> 50`, `> 100`)
  - Search & filter **work together**
  - ✅ Pre-checked boxes for already selected items
  - 🗂 Summary section with **X** to remove items
  - 🚫 Limit enforcement — when 3 items selected, others are disabled
- **Save** — updates selection on main page
- **Cancel** — discards changes
- **Persistent storage** — selections remain after reload

---

## 🛠 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Zustand** (state management with `persist` middleware)
- **Tailwind CSS** (custom responsive styling)
- **No UI libraries** — fully custom components

---

## 📂 Project Structure

src/app/
globals.css → Tailwind global styles
layout.tsx → Root layout
page.tsx → Main page with selection display

src/components/dialog/
DialogFooter.tsx → Save / Cancel buttons
DialogHeader.tsx → Title & close button
DialogSearchControls.tsx → Search input + filter select
ElementDialog.tsx → Dialog wrapper with selection logic
ElementItem.tsx → Individual element with checkbox
ElementList.tsx → Scrollable list of elements
SelectedElementsPanel.tsx→ Selected items summary inside dialog
SelectedList.tsx → Selected items on main page
SelectFilter.tsx → Filter dropdown

src/data/
elements.ts → Generates initial 300 elements

src/store/
useElementStore.ts → Zustand store (selected & tempSelected states)

src/types/
select.ts.ts → Type definitions

src/utils/
array.ts → Array utility functions

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
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
Main page shows up to 3 selected items + "Change my choice" button.

Clicking opens the selection dialog.

Use search and/or filter to refine the list.

Check or uncheck items — summary updates instantly.

Save → commits changes to main page.
Cancel → discards changes.

📱 Responsive Design
Mobile, tablet, and desktop layouts

Tailwind responsive utilities for layout, spacing, and typography

Dialog adapts for small screens with scrollable content

📊 Performance Notes
Zustand ensures minimal, targeted state updates

Shallow comparison prevents unnecessary re-renders

Partial persist stores only committed selections — temp selections are ephemeral
