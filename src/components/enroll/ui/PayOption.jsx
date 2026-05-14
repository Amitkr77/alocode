import React from "react";

export function PayOption({ selected, onClick, title, price, desc, children }) {
  return (
    <div
      onClick={onClick}
      className="rounded-2xl border cursor-pointer transition-all p-2"
      style={{
        borderColor: selected ? "rgba(66,214,116,0.5)" : "var(--border)",
        background: selected ? "rgba(66,214,116,0.06)" : "var(--card)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
            style={{
              borderColor: selected ? "var(--primary)" : "var(--border)",
              background: selected ? "var(--primary)" : "transparent",
            }}
          >
            {selected && <div className="w-2 h-2 rounded-full bg-white" />}
          </div>
          <span className="text-sm font-bold text-foreground">{title}</span>
        </div>
        <span
          className="text-base font-black"
          style={{ color: "var(--primary)" }}
        >
          {price}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mt-1 ml-8">{desc}</p>
      {children}
    </div>
  );
}
