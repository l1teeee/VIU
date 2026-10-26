"use client";

import { useState } from "react";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className="menu-button" type="button" aria-expanded={isOpen} aria-controls="site-menu" onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? "Close" : "Menu"}
    </button>
  );
}
