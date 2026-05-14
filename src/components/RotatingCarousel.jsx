"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHl0aG9ufGVufDB8MXwwfHx8Mg%3D%3D",
    label: "Data Science",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Java Full Stack Development",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHwxfDB8fHwy",
    label: "MERN Full Stack Development",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1742459785723-667110cf8326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfDF8MHx8fDI%3D",
    label: "Machine Learning",
  },
  {
    id: 5,
    img: "https://img.freepik.com/premium-vector/gradient-ui-ux-design-illustration_23-2151514787.jpg?semt=ais_hybrid&w=740",
    label: "UI / UX Design",
  },
  {
    id: 6,
    img: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_23-2147656719.jpg?semt=ais_hybrid&w=740",
    label: "Digital Marketing",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dtrhtdngp/image/upload/q_auto/f_auto/v1778694951/Gemini_Generated_Image_c75aztc75aztc75_hdcsib.jpg",
    label: "Data Analyst",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1746883741191-731ab4e2bb4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfDF8MHx8fDI%3D",
    label: "Artificial Intelligence",
  },
];

export default function IndustryCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % CARDS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen overflow-hidden py-4 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="relative w-full">
        <div className="relative h-[500px] flex items-center justify-center perspective-[2500px]">
          {CARDS.map((card, index) => {
            let position = index - active;

            if (position < -1) position += CARDS.length;
            if (position > 2) position -= CARDS.length;

            const isCenter = position === 0;

            return (
              <motion.div
                key={card.id}
                animate={{
                  x: position * 300,
                  scale: isCenter ? 1 : 0.78,
                  rotateY: position * -22,
                  opacity: Math.abs(position) > 5 ? 0 : 1,
                  zIndex: 20 - Math.abs(position),
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="absolute"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={`
                    relative
                    w-[240px]
                    md:w-[280px]
                    h-[320px]
                    md:h-[380px]
                    rounded-[36px]
                    overflow-hidden
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    transition-all duration-500
                    ${
                      isCenter
                        ? "shadow-[0_0_90px_rgba(59,130,246,0.35)]"
                        : "shadow-[0_10px_50px_rgba(0,0,0,0.35)]"
                    }
                  `}
                >
                  {/* image */}
                  <img
                    src={card.img}
                    alt={card.label}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* hover zoom */}
                  <div className="absolute inset-0 transition-transform duration-700 hover:scale-110" />

                  {/* content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-[22px] font-semibold leading-tight">
                      {card.label}
                    </h3>
                  </div>

                  {/* center glow */}
                  {isCenter && (
                    <>
                      <div className="absolute inset-0 rounded-[36px] border border-blue-400/40" />

                      <div className="absolute -bottom-10 left-1/2 h-20 w-32 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
