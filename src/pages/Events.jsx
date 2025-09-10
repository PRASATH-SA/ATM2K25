// src/pages/Events.jsx
import { title } from "framer-motion/client";
import { Link } from "react-router-dom";

export default function Events() {
  const departments = [
    {
      name: "Computer Science & Engineering",
      color: "from-indigo-500 to-purple-500",
      events: [
        { title: "Project Presentation", path: "/events/paper-presentation" },
        { title: "Hunt the Bug"},
        { title: "Creative Collision(Poster Designing)"},
        { title: "Quiz Bit"},
        { title: "Code Craft"}
      ],
    },
    {
      name: "Artificial Intelligence & Data Science",
      color: "from-pink-500 to-yellow-500",
      events: [
        { title: "AI PROMPT BATTLE", path: "/events/ai-hackathon" },
        { title: "FRONTEND FLUX", path: "/events/data-visualization" },
        { title: "CINETECH", path: "/events/ai-hackathon" },
        { title: "IDEA SHOWCASE", path: "/events/data-visualization" }
      ],
    },
    {
      name: "Mechanical Engineering",
      color: "from-green-500 to-emerald-600",
      events: [
        { title: "Paper presentation", path: "/events/cad-design" },
        { title: "Cad war", path: "/events/auto-expo" },
        { title: "Mr. Machinist", path: "/events/auto-expo" },
        { title: "Water rocketry", path: "/events/auto-expo" },
        { title: "Tech Quiz", path: "/events/auto-expo" },
      ],
    },
    {
      name: "Electronics and Communication Engineering",
      color: "from-blue-500 to-cyan-500",
      events: [
        { title: "IdeaXplore", path: "/events/circuit-debugging" },
        { title: "QuiztroniX", path: "/events/iot-challenge" },
        { title: "Circuitrix", path: "/events/iot-challenge" },
        { title: "clashX", path: "/events/iot-challenge" },
      ],
    },
    {
      name: "Electrical and Electronics Engineering",
      color: "from-orange-500 to-red-500",
      events: [
        { title: "INFINITO'25", path: "/events/power-quiz" },
        { title: "BUGZAP", path: "/events/smart-grid" },
        { title: "CRE-O-EXPO", path: "/events/smart-grid" },
        { title: "CONNECTRIX", path: "/events/smart-grid" },
        { title: "TECHWHIZ", path: "/events/smart-grid" },
      ],
    },
    {
      name: "Civil Engineering",
      color: "from-teal-500 to-lime-500",
      events: [
        { title: "Paper Presentation", path: "/events/bridge-design" },
        { title: "CADD modelling", path: "/events/survey-challenge" },
        { title: "Code Cracking", path: "/events/survey-challenge" },
      ],
    },
  ];

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Symposium Events by Department
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {departments.map((dept, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 bg-gradient-to-r ${dept.color} shadow-lg text-white`}
          >
            <h3 className="text-2xl font-semibold mb-4">{dept.name}</h3>
            <ul className="space-y-3">
              {dept.events.map((event, idx) => (
                <li key={idx}>
                  <Link
                    to={event.path}
                    className="block px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
                  >
                    {event.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
