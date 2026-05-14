import React from "react";
import { ArrowLeft, Mail, Send } from "lucide-react";
import { EMAIL_TO, WHATSAPP_PHONE } from "../types";

export function StepSend({ name, message, courseTitle, onSent, onBack }) {
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  const emailUrl = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(`New Enrollment: ${name} — ${courseTitle}`)}&body=${encodeURIComponent(message)}`;

  return (
    <div
      className="min-h-screen overflow-x-hidden text-foreground flex items-center justify-center px-4 py-20"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      <div className="w-full max-w-lg text-center space-y-3">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{ background: "rgba(66,214,116,0.12)" }}>
          <Send size={32} style={{ color: "var(--primary)" }} />
        </div>

        <div>
          <h1 className="text-3xl font-black text-foreground mb-2" style={{ fontFamily: "'Georgia', serif" }}>
            Almost Done, {name}!
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Send your enrollment details via WhatsApp or Email to complete your registration.
          </p>
        </div>

        <div className="text-left rounded-2xl border p-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <p className="text-sm font-bold text-muted-foreground mb-3 flex items-center gap-1.5">
            <Send size={14} /> Your enrollment summary
          </p>
          <pre className="text-sm font-medium text-muted-foreground whitespace-pre-wrap break-words leading-relaxed" style={{ fontFamily: "inherit" }}>
            {message}
          </pre>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={waUrl} target="_blank" rel="noopener noreferrer" onClick={onSent}
            className="h-11 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-85"
            style={{ background: "#25D366", color: "#fff" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send via WhatsApp
          </a>
          <a
            href={emailUrl} onClick={onSent}
            className="h-11 rounded-full font-bold text-sm flex items-center justify-center gap-2 border transition-colors hover:bg-card cursor-pointer"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          >
            <Mail size={15} /> Send via Email
          </a>
        </div>

        <button
          onClick={onBack}
          className="w-full h-10 rounded-full text-sm font-semibold flex items-center justify-center gap-2 border transition-colors hover:bg-card cursor-pointer"
          style={{ background: "var(--background)", borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        >
          <ArrowLeft size={14} /> Go Back
        </button>
      </div>
    </div>
  );
}