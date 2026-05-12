import React from "react";
import faq from "@/lib/faq"; // update path if needed

const FAQ = () => {
  return (
    <section
      className="py-10 border-t"
      style={{ borderColor: "#DBD7C7" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-4">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: "#42D674", fontFamily: "system-ui, sans-serif" }}
          >
            FAQ
          </p>

          <h2
            className="text-2xl md:text-3xl font-black"
            style={{ color: "#262A2B", fontFamily: "'Georgia', serif" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-1">
          {faq.slice(0, 3).map((item, index) => (
            <details
              key={index}
              className="rounded-2xl overflow-hidden border group"
              style={{ background: "#EEEEEE", borderColor: "#B3AA9E" }}
            >
              <summary className="flex items-center justify-between cursor-pointer p-3 list-none">
                <span
                  className="font-bold"
                  style={{
                    color: "#262A2B",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {item.question}
                </span>

                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ml-4 group-open:rotate-45 transition-transform duration-200"
                  style={{
                    background: "rgba(250,161,20,0.15)",
                    border: "1px solid rgba(250,161,20,0.35)",
                    color: "#42D674",
                  }}
                >
                  +
                </span>
              </summary>

              <div
                className="pb-6 px-6 leading-relaxed text-sm pt-2"
                style={{
                  color: "#786E67",
                  borderTop: "1px solid #B3AA9E",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {Array.isArray(item.answer) ? (
                  <ul className="space-y-2">
                    {item.answer.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.answer}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;