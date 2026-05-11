import React from "react";

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
        <div className="space-y-2">
          {[
            {
              q: "Do I need a technical degree to enroll?",
              a: "No! Our courses are designed to take you from zero to hero. Many of our top graduates started with no prior coding experience.",
            },
            {
              q: "How does the placement guarantee work?",
              a: "We offer placement assistance through every application cycle until you get hired, with direct referrals to 500+ partner companies.",
            },
            {
              q: "Are the classes live or recorded?",
              a: "We use a hybrid model with recorded lectures for self-paced learning and live weekend sessions with mentors for Q&A and projects.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="rounded-2xl overflow-hidden border group"
              style={{ background: "#DBD7C7", borderColor: "#B3AA9E" }}
            >
              <summary className="flex items-center justify-between cursor-pointer p-3 list-none">
                <span
                  className="font-bold"
                  style={{
                    color: "#262A2B",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {faq.q}
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
              <p
                className="pb-6 px-6 leading-relaxed text-sm pt-2"
                style={{
                  color: "#786E67",
                  borderTop: "1px solid #B3AA9E",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
