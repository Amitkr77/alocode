import React from "react";

const companies = [
  { label: "MORGAN STANLEY", path: "./companies/morgan.jpeg" },
  { label: "DELOITTE", path: "./companies/deloitte.jpeg" },
  { label: "NASDAQ", path: "./companies/nasdaq.jpeg" },
  { label: "VOIS", path: "./companies/vois.jpeg" },
  { label: "COGNIZANT", path: "./companies/cognizant.png" },
  { label: "ORACLE", path: "./companies/oracle.png" },
  { label: "DXC", path: "./companies/dxc.png" },
  { label: "FOX", path: "./companies/fox.png" },
];

const CompanyCard = ({ c }) => (
  <div className="flex flex-col items-center gap-2 p-3 rounded-2xl group cursor-default flex-shrink-0 w-36 sm:w-40">
    <img
      src={c.path}
      alt={c.label}
      className="w-20 h-10 sm:w-28 sm:h-12 object-contain transition-all duration-300"
    />
    <span
      className="text-[12px] sm:text-[14px] font-bold uppercase tracking-wide text-center leading-tight"
      style={{ color: "#B3AA9E", fontFamily: "system-ui, sans-serif" }}
    >
      {c.label}
    </span>
  </div>
);

const Companies = () => {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-8 max-w-7xl mx-auto px-0 overflow-hidden">
      <p
        className="text-center text-sm sm:text-base md:text-xl font-bold uppercase tracking-widest mb-4 px-6"
        style={{ color: "#B3AA9E", fontFamily: "system-ui, sans-serif" }}
      >
        Our experts come from top companies
      </p>

      <div className="relative w-full">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 z-10"
          style={{
            background:
              "linear-gradient(to right, var(--background), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 z-10"
          style={{
            background:
              "linear-gradient(to left, var(--background), transparent)",
          }}
        />

        {/* Marquee track */}
        <div className="flex overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6"
            style={{
              animation: "marquee 18s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((c, i) => (
              <CompanyCard key={`${c.label}-${i}`} c={c} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Companies;
