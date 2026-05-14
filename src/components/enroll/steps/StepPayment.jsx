import React from "react";
import { ArrowLeft, CheckCircle, QrCode } from "lucide-react";
import { PayOption } from "../ui/PayOption";

export function StepPayment({
  activeCourse, activePricing, activeFullPrice, activeEmiAmount,
  activeEmiInstallments, activeEmiMonths, activeEmiAvailable,
  payMode, setPayMode, onPaid, onSkip, onBack,
}) {
  return (
    <div className="space-y-2 relative z-10">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Choose how you'd like to pay
      </p>

      {/* Course summary row */}
      {activeCourse && activePricing && (
        <div
          className="rounded-2xl border py-2 px-4 flex items-center justify-between"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Enrolling in</p>
            <p className="font-black text-sm text-foreground">{activeCourse.title}</p>
          </div>
          <p className="text-xl font-black" style={{ color: "var(--primary)", fontFamily: "'Georgia', serif" }}>
            ₹{activeFullPrice.toLocaleString("en-IN")}
          </p>
        </div>
      )}

      {/* Full payment */}
      <PayOption
        selected={payMode === "full"} onClick={() => setPayMode("full")}
        title="Full Payment" price={`₹${activeFullPrice.toLocaleString("en-IN")}`}
        desc="One-time payment — best value"
      />

      {/* EMI */}
      {activeEmiAvailable && (
        <PayOption
          selected={payMode === "emi"} onClick={() => setPayMode("emi")}
          title="EMI — Installments" price={`from ₹${activeEmiAmount.toLocaleString("en-IN")}`}
          desc={`${activeEmiMonths} installments — ₹${activeEmiInstallments.reduce((a, b) => a + b, 0).toLocaleString("en-IN")} total`}
        >
          {payMode === "emi" && (
            <div className="ml-8 mt-2 space-y-1">
              {activeEmiInstallments.map((amt, i) => (
                <div key={i} className="flex justify-between text-xs text-muted-foreground">
                  <span>
                    Month {i + 1}
                    {i === 0 && (
                      <span
                        className="ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                        style={{ background: "rgba(66,214,116,0.12)", color: "var(--primary)" }}
                      >
                        Due now
                      </span>
                    )}
                  </span>
                  <span className="font-bold text-foreground">₹{amt.toLocaleString("en-IN")}</span>
                </div>
              ))}
              <div className="flex justify-between text-xs font-bold text-foreground pt-1 border-t border-border">
                <span>Total</span>
                <span>₹{activeEmiInstallments.reduce((a, b) => a + b, 0).toLocaleString("en-IN")}</span>
              </div>
            </div>
          )}
        </PayOption>
      )}

      {/* QR Code */}
      <div className="rounded-2xl border p-4 text-center" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
        <div className="flex items-center justify-center gap-2 text-sm font-bold text-foreground mb-3">
          <QrCode size={16} style={{ color: "var(--primary)" }} />
          Scan to Pay — UPI / Any App
        </div>
        <div className="w-40 h-40 mx-auto rounded-xl overflow-hidden bg-white border border-border flex items-center justify-center mb-3">
          <img
            src={payMode === "emi" ? "/qr_4499.jpeg" : "/qr_7499.jpeg"}
            alt="UPI QR Code"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.replaceWith(
                Object.assign(document.createElement("div"), {
                  style: "color:#888;font-size:11px;text-align:center;padding:8px",
                  textContent: payMode === "emi" ? "Add /public/qr_4499.jpeg" : "Add /public/qr_7499.jpeg",
                })
              );
            }}
          />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Scan with GPay, PhonePe, or any UPI app<br />
          Amount:{" "}
          <strong>
            {payMode === "full"
              ? `₹${activeFullPrice.toLocaleString("en-IN")}`
              : `₹${activeEmiAmount.toLocaleString("en-IN")} (1st EMI)`}
          </strong>
        </p>
      </div>

      {/* CTAs */}
      <button
        onClick={onPaid}
        className="w-full h-11 rounded-full font-bold text-sm cursor-pointer flex items-center justify-center gap-2 transition-opacity hover:opacity-85"
        style={{ background: "var(--primary)", color: "var(--primary-foreground)", boxShadow: "0 4px 16px rgba(66,214,116,0.28)" }}
      >
        <CheckCircle size={16} /> I've Paid — Submit Enrollment
      </button>

      <button onClick={onSkip} className="w-full text-center text-sm text-muted-foreground underline underline-offset-2 cursor-pointer py-1">
        I'll pay later — have a counselor contact me
      </button>

      <button
        onClick={onBack}
        className="w-full h-10 rounded-full text-sm font-semibold flex items-center justify-center gap-2 border transition-colors hover:bg-card cursor-pointer"
        style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--muted-foreground)" }}
      >
        <ArrowLeft size={14} /> Edit Details
      </button>
    </div>
  );
}