// src/pages/Events.jsx
import { Link } from "react-router-dom";

export default function Events() {
  const departments = [
    {
      name: "CSE",
      color: "from-indigo-500 to-purple-500",
      events: [
        { title: "Coding Challenge", path: "/events/coding-challenge" },
        { title: "Paper Presentation", path: "/events/paper-presentation" },
      ],
    },
    {
      name: "AI & DS",
      color: "from-pink-500 to-yellow-500",
      events: [
        { title: "AI Hackathon", path: "/events/ai-hackathon" },
        { title: "Data Visualization", path: "/events/data-visualization" },
      ],
    },
    {
      name: "MECH",
      color: "from-green-500 to-emerald-600",
      events: [
        { title: "CAD Design", path: "/events/cad-design" },
        { title: "AutoExpo", path: "/events/auto-expo" },
      ],
    },
    {
      name: "ECE",
      color: "from-blue-500 to-cyan-500",
      events: [
        { title: "Circuit Debugging", path: "/events/circuit-debugging" },
        { title: "IoT Challenge", path: "/events/iot-challenge" },
      ],
    },
    {
      name: "EEE",
      color: "from-orange-500 to-red-500",
      events: [
        { title: "Power Quiz", path: "/events/power-quiz" },
        { title: "Smart Grid Ideas", path: "/events/smart-grid" },
      ],
    },
    {
      name: "CIVIL",
      color: "from-teal-500 to-lime-500",
      events: [
        { title: "Bridge Design", path: "/events/bridge-design" },
        { title: "Survey Challenge", path: "/events/survey-challenge" },
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
