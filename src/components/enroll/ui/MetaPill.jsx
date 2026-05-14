import React from "react";

export function MetaPill({ icon: Icon, children }) {
  return (
    <span
      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border font-medium text-muted-foreground"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <Icon size={12} style={{ color: "var(--primary)" }} />
      {children}
    </span>
  );
}