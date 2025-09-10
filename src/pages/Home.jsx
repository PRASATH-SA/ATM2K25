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
            ATM 2K25
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
          <h2 className="text-4xl font-bold text-[var(--color-tertiary)] drop-shadow-lg">
            Achariya college of Engineering Technology
          </h2>
          <p className="mt-4 text-lg text-gray-200 leading-relaxed align-baseline">
            Achariya College of Engineering Technology, which was established in 2010, has spent over a decade dedicated to nurturing the academic and professional growth of its students and staff. Over the years, the institution has evolved into a hub of Innovation and Excellence, continually adapting to the ever-changing demands of the Engineering field. The college has built a strong reputation for its commitment to high-quality Education, state-of-the-art Facilities, and a supportive Learning Environment. With a focus on both theoretical Knowledge and practical Skills, it has successfully equipped its graduates with the tools needed to excel in their careers. The college’s success can be attributed to its dedicated Faculty, progressive Curriculum, and emphasis on Research and Development. As it moves forward, Achariya College of Engineering Technology remains steadfast in its mission to empower students and contribute to the advancement of Technology and Society.

        <br></br><br></br>
          We are excited to announce that the Department of Computer Science and Engineering of Achariya College of Engineering Technology is organizing a National-Level Symposium this year. This event will bring together Scholars, Industry Experts, and Students from across the country. The Symposium aims to foster Collaboration, ignite Innovative Ideas, and facilitate the exchange of Cutting-Edge Research in various Engineering and Technology fields. With a diverse range of sessions, including Keynote Addresses, Panel Discussions, and Technical Workshops, participants will have the opportunity to explore current Trends, share Insights, and discover new Opportunities. Our goal is to create an enriching experience that highlights the latest Advancements and inspires future Innovations. We look forward to the vibrant Discussions and Networking Opportunities that will undoubtedly emerge from this prestigious gathering.
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
            <li>Coding Contests & Hackathons</li>
            <li>Paper & Poster Presentations</li>
            <li>Robotics & Mechanical Challenges</li>
            <li>Guest Lectures & Workshops</li>
            <li>Exciting Prizes & Networking</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
