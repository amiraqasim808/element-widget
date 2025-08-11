"use client";

import { useState } from "react";
import SelectedList from "@/components/dialog/SelectedList";
import ElementDialog from "@/components/dialog/ElementDialog";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div
      className="
    min-h-screen w-full
    bg-gradient-to-br 
    from-[var(--color-bg-start)] 
    via-[var(--color-bg-mid)] 
    to-[var(--color-bg-start)] 
    relative text-white overflow-hidden
  "
    >
      {/* Decorative background blurs */}
      <div
        className="
      absolute w-72 h-72 
      bg-gradient-to-tr 
      from-[var(--color-purple-light)]/40 
      to-[var(--color-pink-light)]/30 
      blur-3xl rounded-full -top-24 -left-24 
      opacity-40 -z-10
    "
      />
      <div
        className="
      absolute w-96 h-96 
      bg-gradient-to-bl 
      from-[var(--color-fuchsia-light)]/40 
      to-[var(--color-purple-light)]/30 
      blur-3xl rounded-full -bottom-32 -right-32 
      opacity-40 -z-10
    "
      />

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading */}
        <h1 className="text-center text-5xl font-heading sm:text-6xl font-extrabold mb-12 drop-shadow-lg leading-tight overflow-visible px-1">
          Element{" "}
          <span className="bg-gradient-to-r from-[var(--color-purple-light)] via-[var(--color-pink-light)] to-[var(--color-red-light)] bg-clip-text text-transparent">
            Widget
          </span>
        </h1>

        {/* Selected items - glassmorphism */}
        <div className="mb-8 backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
          <SelectedList />
        </div>

        {/* Action button */}
        <div className="flex justify-center">
          <button
            className="primary-button"
            onClick={() => setIsDialogOpen(true)}
          >
            Change My Choice
          </button>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && <ElementDialog onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
}
