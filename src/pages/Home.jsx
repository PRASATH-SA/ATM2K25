import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden scroll-smooth">
      {/* Section 1 - Hero */}
      <section className="h-screen bg-fixed bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-tertiary)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-12 text-center max-w-2xl"
        >
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            College Symposium 2025
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Welcome to our annual inter-department symposium.  
            Join us for exciting events, workshops, and competitions!
          </p>
          <div className="mt-8">
            <a
              href="/registration"
              className="px-8 py-4 rounded-full font-semibold text-white text-lg bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition duration-300 shadow-lg"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* Section 2 - About Symposium */}
      <section className="h-screen bg-fixed bg-gradient-to-tr from-gray-900 via-[var(--color-primary)] to-gray-700 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 text-center max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-[var(--color-secondary)] drop-shadow-lg">
            About Our Symposium
          </h2>
          <p className="mt-4 text-lg text-gray-200 leading-relaxed">
            Our symposium brings together students across departments to
            showcase technical expertise, creativity, and teamwork. Expect coding
            challenges, paper presentations, workshops, and fun events.
          </p>
        </motion.div>
      </section>

      {/* Section 3 - Highlights */}
      <section className="h-screen bg-fixed bg-gradient-to-bl from-[var(--color-tertiary)] via-gray-800 to-[var(--color-primary)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-12 text-center max-w-2xl"
        >
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            Symposium Highlights
          </h2>
          <ul className="mt-6 text-gray-200 space-y-4 text-lg">
            <li>💻 Coding Contests & Hackathons</li>
            <li>📜 Paper & Poster Presentations</li>
            <li>⚙️ Robotics & Mechanical Challenges</li>
            <li>🎤 Guest Lectures & Workshops</li>
            <li>🏆 Exciting Prizes & Networking</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
