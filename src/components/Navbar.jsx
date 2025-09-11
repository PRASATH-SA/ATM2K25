// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/10 border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-primary to-tertiary bg-clip-text ">
          <img src="/" />
        </h1>
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <a href="/" className="hover:text-secondary transition">
              Home
            </a>
          </li>
          <li>
            <a href="/events" className="hover:text-secondary transition">
              Events
            </a>
          </li>
          <li>
            <a
              href="/registration"
              className="px-4 py-2 rounded-lg bg-primary hover:bg-secondary transition text-white shadow-md"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
