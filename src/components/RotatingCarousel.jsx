"use client";

const CARDS = [
  {
    img: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=600&auto=format&fit=crop&q=60",
    label: "Data Science",
  },
  {
    img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=687&auto=format&fit=crop",
    label: "Java Full Stack Development",
  },
  {
    img: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=600&auto=format&fit=crop&q=60",
    label: "MERN Full Stack",
  },
  {
    img: "https://images.unsplash.com/photo-1742459785723-667110cf8326?w=600&auto=format&fit=crop&q=60",
    label: "Machine Learning",
  },
  {
    img: "https://img.freepik.com/premium-vector/gradient-ui-ux-design-illustration_23-2151514787.jpg?w=740",
    label: "UI / UX Design",
  },
  {
    img: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_23-2147656719.jpg?w=740",
    label: "Digital Marketing",
  },
  {
    img: "https://res.cloudinary.com/dtrhtdngp/image/upload/q_auto/f_auto/v1778694951/Gemini_Generated_Image_c75aztc75aztc75_hdcsib.jpg",
    label: "Data Analyst",
  },
  {
    img: "https://images.unsplash.com/photo-1746883741191-731ab4e2bb4f?w=600&auto=format&fit=crop&q=60",
    label: "Artificial Intelligence",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60",
    label: "Cyber Security",
  },
  {
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=60",
    label: "Cloud Computing",
  },
  {
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&auto=format&fit=crop&q=60",
    label: "Mobile App Development",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
    label: "Business Analytics",
  },
];

const N = CARDS.length;
const ANGLE_STEP = 360 / N;

export default function IndustryCarousel() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center industry-carousel-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative flex items-center justify-center w-full carousel-wrapper">
        {/* outer wrapper handles left/right drift */}
        <div
          style={{
            animation: "driftX 8s ease-in-out infinite",
            transformStyle: "preserve-3d",
          }}
          className="drift-wrapper"
        >
          {/* inner handles the Y rotation */}
          <div
            className="relative carousel-inner"
            style={{
              transformStyle: "preserve-3d",
              animation: "rotateCylinder 32s linear infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
              e.currentTarget.parentElement.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
              e.currentTarget.parentElement.style.animationPlayState =
                "running";
            }}
          >
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 card-slot"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative rounded-[20px] overflow-hidden border border-white/10 shadow-2xl cursor-pointer transition-all duration-300 hover:border-blue-400/50 card-face">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="block text-[9px] font-medium tracking-[2px] uppercase text-blue-400 mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="block font-bold text-white leading-snug card-label"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {card.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── PC (default) ── */
        .carousel-wrapper        { height: 500px; perspective: 1800px; }
        .carousel-inner          { width: 220px; height: 280px; }
        .card-slot               { transform: rotateY(var(--slot-angle)) translateZ(550px); }
        .card-face               { width: 220px; height: 280px; margin-left: -110px; margin-top: -140px; }
        .card-label              { font-size: 13px; }

        /* each slot gets its own angle via inline var */
        ${CARDS.map(
          (_, i) => `
          .card-slot:nth-child(${i + 1}) {
            transform: rotateY(${ANGLE_STEP * i}deg) translateZ(550px);
          }
        `,
        ).join("")}

        /* ── Tablet (≤ 1024px) ── */
        @media (max-width: 1024px) {
          .carousel-wrapper  { height: 380px; perspective: 1400px; }
          .carousel-inner    { width: 160px; height: 210px; }
          .card-face         { width: 160px; height: 210px; margin-left: -80px; margin-top: -105px; }
          .card-label        { font-size: 11px; }

          ${CARDS.map(
            (_, i) => `
            .card-slot:nth-child(${i + 1}) {
              transform: rotateY(${ANGLE_STEP * i}deg) translateZ(400px);
            }
          `,
          ).join("")}
        }

        /* ── Mobile (≤ 640px) ── */
        @media (max-width: 640px) {
          .carousel-wrapper  { height: 280px; perspective: 900px; }
          .carousel-inner    { width: 110px; height: 145px; }
          .card-face         { width: 110px; height: 145px; margin-left: -55px; margin-top: -72px; border-radius: 14px; }
          .card-label        { font-size: 9px; }

          ${CARDS.map(
            (_, i) => `
            .card-slot:nth-child(${i + 1}) {
              transform: rotateY(${ANGLE_STEP * i}deg) translateZ(270px);
            }
          `,
          ).join("")}
        }

        @keyframes rotateCylinder {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(-360deg); }
        }

        @keyframes driftX {
          0%   { transform: translateX(0px); }
          25%  { transform: translateX(180px); }
          75%  { transform: translateX(-180px); }
          100% { transform: translateX(0px); }
        }

        /* tone down drift on small screens */
        @media (max-width: 1024px) {
          @keyframes driftX {
            0%   { transform: translateX(0px); }
            25%  { transform: translateX(100px); }
            75%  { transform: translateX(-100px); }
            100% { transform: translateX(0px); }
          }
        }

        @media (max-width: 640px) {
          @keyframes driftX {
            0%   { transform: translateX(0px); }
            25%  { transform: translateX(50px); }
            75%  { transform: translateX(-50px); }
            100% { transform: translateX(0px); }
          }
        }
      `}</style>
    </section>
  );
}
