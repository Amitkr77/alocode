import React from "react";
import { motion } from "framer-motion";

const Companies = () => {
  return (
    <section className="py-8 max-w-7xl mx-auto px-6 lg:px-10">
      <p
        className="text-center text-xs font-bold uppercase tracking-widest mb-6"
        style={{ color: "#B3AA9E", fontFamily: "system-ui, sans-serif" }}
      >
        Our experts come from top companies
      </p>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {[
          { label: "MORGAN STANLEY", path: "./companies/morgan.jpeg" },
          { label: "DELOITTE", path: "./companies/deloitte.jpeg" },
          { label: "NASDAQ", path: "./companies/nasdaq.jpeg" },
          { label: "VOIS", path: "./companies/vois.jpeg" },
          { label: "COGNIZANT", path: "./companies/cognizant.png" },
          { label: "ORACLE", path: "./companies/oracle.png" },
          { label: "DXC", path: "./companies/dxc.png" },
          { label: "FOX", path: "./companies/fox.png" },
        ].map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-transparent transition-all group cursor-default"
          >
            <img
              src={c.path}
              alt={c.label}
              className="w-16 h-8 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
            <span
              className="text-[9px] font-bold uppercase tracking-wide text-center leading-tight"
              style={{
                color: "#B3AA9E",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {c.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
