'use client';

import { motion } from 'framer-motion';
import {
  Terminal,
  Zap,
  Visibility,
  Lightbulb,
  // RocketLaunch,
  Users,
  Linkedin,
  MessageCircle,
} from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const cardHover = {
    hover: {
      y: -8,
      borderColor: '#2bee79',
      boxShadow: '0 0 20px rgba(43, 238, 121, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  return (
   <section className='bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-background-dark'>
     <main className="flex flex-col items-center w-full">
      <div className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-5 flex flex-col gap-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="@container"
        >
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(17, 34, 24, 0.7) 0%, rgba(17, 34, 24, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQs48M3AqCnQ49HEvd0UvXsym_yo-v0GERCPzoCL_OO41tc7rlcUp5AI-0qCZn0ordf4Vvs8f3R1Tb7PZKxkJ8DvluDMKTx1kIJxNM0blus60Yzun0f1_4EUHqhHK5-w1kAADCSe0eUhY_I7fblSzE3jSwEo3716DsZH83TOC1-_fin2-M2MmpAqLpUuD4tvXg36_gtBU7Kz04D1_cdLsOzCKlfeFiZj0mRyWu29gZkJaE9CoSRGovrwjYsI5_6rRh4qssK-wkR-Px")`,
              }}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4 text-center max-w-[800px] z-10"
              >
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em]">
                  Building the <span className="text-primary">Future</span> of Code
                </h1>
                <h2 className="text-gray-300 text-sm md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                  Empowering the next generation of developers with immersive, futuristic learning experiences that
                  bridge the gap between theory and reality.
                </h2>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Narrative & Mission Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-4"
        >
          {/* About Text */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Terminal className="w-5 h-5" />
              <span className="font-bold tracking-widest text-sm uppercase">Our Story</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              From a small coding club to a global platform.
            </h2>
            <div className="flex flex-col gap-4 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Alocodes began with a simple question: "Why does learning to code have to feel so lonely?" What started
                in a university basement as a peer-to-peer debugging group has evolved into a worldwide ecosystem.
              </p>
              <p>
                Today, we are dedicated to democratizing tech education through accessible, high-quality resources,
                real-time mentorship, and a community that never sleeps.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="flex flex-col gap-4">
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              className="flex flex-1 gap-4 rounded-xl border border-surface-border bg-surface-dark p-8 flex-col group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-primary p-3 bg-background-dark/50 w-fit rounded-full flex items-center justify-center"
              >
                <Zap className="w-8 h-8" />
              </motion.div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold leading-tight">Our Mission</h3>
                <p className="text-gray-400 text-base font-normal leading-relaxed">
                  To democratize coding education by making it interactive, affordable, and deeply engaging for everyone.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="flex flex-1 gap-4 rounded-xl border border-surface-border bg-surface-dark p-8 flex-col group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-primary p-3 bg-background-dark/50 w-fit rounded-full flex items-center justify-center"
              >
                {/* <Visibility className="w-8 h-8" /> */}
              </motion.div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold leading-tight">Our Vision</h3>
                <p className="text-gray-400 text-base font-normal leading-relaxed">
                  A world where anyone, regardless of background, can build their dreams through the power of software.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-10 px-4"
        >
          <motion.div variants={itemVariants} className="text-center mb-4">
            <h2 className="text-white text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="text-gray-400 mt-2">Key milestones that defined us</p>
          </motion.div>

          <div className="grid grid-cols-[40px_1fr] gap-x-6 max-w-[800px] mx-auto w-full">
            {/* 2020 */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-1 pt-1">
              <div className="text-primary bg-surface-dark rounded-full p-2 border border-surface-border z-10">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="w-0.5 bg-linear-to-b from-surface-border to-primary h-full grow min-h-20" />
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-1 flex-col py-2 pb-8">
              <span className="text-primary text-sm font-bold uppercase tracking-wider mb-1">2020</span>
              <h3 className="text-white text-xl font-medium leading-normal">The Idea</h3>
              <p className="text-gray-400 text-base font-normal leading-normal mt-1">
                Alocodes starts as a weekend project to help local students visualize algorithms.
              </p>
            </motion.div>

            {/* 2021 */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-1">
              <div className="w-0.5 bg-surface-border h-full grow opacity-50" />
              <div className="text-white bg-surface-dark rounded-full p-2 border border-surface-border z-10">
                {/* <RocketLaunch className="w-5 h-5" /> */}
              </div>
              <div className="w-0.5 bg-linear-to-b from-surface-border to-primary h-full grow min-h-20" />
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-1 flex-col py-2 pb-8">
              <span className="text-primary text-sm font-bold uppercase tracking-wider mb-1">2021</span>
              <h3 className="text-white text-xl font-medium leading-normal">First Course Launched</h3>
              <p className="text-gray-400 text-base font-normal leading-normal mt-1">
                We released "Python for Future" and saw 500 enrollments in the first week.
              </p>
            </motion.div>

            {/* 2023 */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-1 pb-1">
              <div className="w-0.5 bg-surface-border h-full grow opacity-50" />
              <div className="text-white bg-surface-dark rounded-full p-2 border border-surface-border z-10">
                <Users className="w-5 h-5" />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-1 flex-col py-2">
              <span className="text-primary text-sm font-bold uppercase tracking-wider mb-1">2023</span>
              <h3 className="text-white text-xl font-medium leading-normal">10,000 Students Reached</h3>
              <p className="text-gray-400 text-base font-normal leading-normal mt-1">
                A massive milestone. Our community grows to cover 45 countries.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Mentors Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-10 px-4 py-10 w-full"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">Meet Our Mentors</h2>
            <p className="text-gray-400 text-base">Industry experts guiding your path.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Sarah Jenkins',
                role: 'Python Expert',
                desc: 'Ex-Google engineer with a passion for AI ethics.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfieuXHUZBRni9DxpfEdfjMWNhk6FVXctha2D2VyubE17PDjJcyD0outlvQNfTml5AOjJQREfrkEvy8XYUNmgBGRoo2arl3V9kVhWU1Vnos2-JiXqicFVwXf4dMLqbvwhqLIVFLXs-s-Dm__anIdliYy9KkrXeqM0mXxnwym-D-3CXSZtOIP9nLw8OUapUhpuruvwQ_pBDhBpqqzJXUhpVw0XFUceMU6kIm-465UsDGs483bijTJlfErffb1NLLRZuapquAiNatqfY',
              },
              {
                name: 'David Chen',
                role: 'React Lead',
                desc: 'Frontend wizard creating seamless UIs for 10+ years.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK5RTt53midio-SSkB0HtgvsYI3o7N8n69eJXw1MfDCvqLHyyPnQg4YQrw0qJYWNj4rp5VhkHBRXhdx9217DJo4JkrNQ6nGC_aq1CWyT3hSO6i-xny1kAWlaNVKjSb6UYYgAKBJzV6p4czjMfwGQgdWxVkOPpILiovu8EqYixEeXB1-0sGQTPU5wEQhEGQ9tRnZRkMTpe3CCaWvHOvuIQc0KzaPKf0NYlCMtCDP_s5v6UEvTYFW1250U3Ur0zDI5LnhUsd-IdZr0pQ',
              },
              {
                name: 'Elena Rodriguez',
                role: 'DevOps Architect',
                desc: 'Cloud infrastructure specialist and Kubernetes fan.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm0RVNawEAZMYLO3cW4I32_FDjzqb0rPn65zj033V4n47ClifBkLDN4TP2iWTvV_Rw_9vL3BtAodiS-5V2SlNks9ac1PVq5aO6u1xuKTSRMNOYz-0BVMsjnylE2Wm6gUszejmRBGY16hYfk7t2aMTjpmvJSfs_x779Xkdp_9Bw_nHm_Fcomrt1XqVeeZtUTLyrBR35DcrQCP3qsoOf2ThBiTpePP40qGBNkABf6vfebFqKG7Z-FuEGSPaRko6c4bfXdzWMC4juAnJ0',
              },
              {
                name: 'Marcus Johnson',
                role: 'Cybersecurity',
                desc: 'White hat hacker teaching improved system defense.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANFE8Kkz3DXXKa-ZhI3ypjFJHlm2d9TLb9o7GliT_Px1VImk550DHtfXV4o_sk-VAmdRtv_svUYIED5toeNLWYC1BgfUfyNBk4G8Xl0_6yHzlLF9DZTkr8xWxXd-gp53iy42C1256eyme5QHeYh7GnamZ80_KsExFCfortE3JYh7ZO8bMnnkj-c5jiFnl_s5SGjZDSLW8zU9app-8C4EfRO8mvJu2DhL4dgYQOdGpmxwUNSVgbxX1OwKse57h6BO0jSTa2Wu_TBEKg',
              },
            ].map((mentor) => (
              <motion.div
                key={mentor.name}
                variants={cardHover}
                whileHover="hover"
                className="group relative flex flex-col items-center gap-4 rounded-xl border border-surface-border bg-surface-dark p-6 transition-all"
              >
                <div className="relative size-24 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <img
                    src={mentor.img}
                    alt={`Portrait of ${mentor.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-white text-lg font-bold">{mentor.name}</h3>
                  <p className="text-primary text-sm font-medium">{mentor.role}</p>
                  <p className="text-gray-400 text-xs mt-2 text-center line-clamp-2">{mentor.desc}</p>
                </div>
                <a
                  href="#"
                  className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-90 transition-opacity"
                  aria-label={`LinkedIn profile of ${mentor.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="relative overflow-hidden rounded-xl bg-primary px-6 py-16 text-center shadow-lg md:px-12 md:py-20">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white opacity-20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-background-dark opacity-10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-background-dark md:text-5xl">
                Stuck on a problem? Let's talk code.
              </h2>
              <p className="max-w-lg text-lg font-medium text-background-dark/80">
                Connect with our senior mentors for a free 15-minute consultation to map out your learning path.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 flex min-w-[200px] cursor-pointer items-center justify-center rounded-full bg-background-dark px-8 py-4 text-white text-lg font-bold shadow-xl hover:bg-surface-dark transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Free 1:1 Chat
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="w-full border-t border-surface-border py-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <div className="size-6 text-primary">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                    fill="currentColor"
                  />
                  <path
                    clipRule="evenodd"
                    d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-bold">Alocodes</span>
            </div>
            <p className="text-gray-400 text-sm">© 2025 Alocodes Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
   </section>
  );
}