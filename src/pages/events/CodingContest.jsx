import React from "react";

export default function CodingContest() {
  return (
    <div className="min-h-screen bg-fixed bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center flex flex-col items-center justify-center">
      {/* Parallax Glassmorphism Card */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[var(--color-primary)] drop-shadow-lg">
          Coding Contest
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-200 leading-relaxed">
          A thrilling coding battle where participants solve algorithmic
          challenges under time pressure. Compete against the best minds and
          showcase your problem-solving skills!
        </p>

        {/* Time Duration */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[var(--color-secondary)]">
            🕒 Time Duration
          </h2>
          <p className="text-gray-300 mt-2">2 hours (10:00 AM – 12:00 PM)</p>
        </div>

        {/* Rules & Regulations */}
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold text-[var(--color-tertiary)] text-center">
            📜 Rules & Regulations
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-200">
            <li>Individual participation only.</li>
            <li>Internet access is restricted during the contest.</li>
            <li>Languages allowed: C, C++, Java, Python.</li>
            <li>Cheating or plagiarism will lead to disqualification.</li>
            <li>Judges’ decision will be final.</li>
          </ul>
        </div>

        {/* Register Button */}
        <div className="mt-8">
          <a
            href="/registration"
            className="px-6 py-3 rounded-full font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition duration-300 shadow-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
