import React from "react";

export function EmiAccordion({ emi }) {
  const [open, setOpen] = React.useState(false);
  const installments = emi?.installments ?? [];
  const total = installments.reduce((a, b) => a + b, 0);

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
        style={{
          background: "rgba(66,214,116,0.08)",
          border: "1px solid rgba(66,214,116,0.25)",
          color: "var(--primary)",
        }}
      >
        <span className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
          Pay in installments (EMI)
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          className="mt-2 rounded-xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          {installments.map((amount, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 py-3 text-sm"
              style={{
                borderBottom:
                  idx < installments.length - 1
                    ? "1px solid var(--border)"
                    : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    background: "rgba(66,214,116,0.12)",
                    color: "var(--primary)",
                  }}
                >
                  {idx + 1}
                </span>
                <span className="font-medium text-foreground">
                  Month {idx + 1}
                </span>
                {idx === 0 && (
                  <span
                    className="px-2 py-0.5 rounded-full text-[11px] font-bold"
                    style={{
                      background: "rgba(66,214,116,0.15)",
                      color: "var(--primary)",
                    }}
                  >
                    Due now
                  </span>
                )}
              </div>
              <span className="font-semibold text-foreground">
                ₹{amount.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
          <div
            className="flex items-center justify-between px-4 py-3 text-sm font-bold"
            style={{
              borderTop: "1px solid var(--border)",
              background: "rgba(66,214,116,0.04)",
            }}
          >
            <span className="text-foreground">Total</span>
            <span className="text-foreground">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
