// src/pages/Registration.jsx
export default function Registration() {
  return (
    <div className="pt-20 px-6 flex justify-center">
      <form className="bg-white/20 backdrop-blur-md p-6 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold text-primary mb-4">Register</h2>
        <input type="text" placeholder="Full Name" className="w-full mb-3 p-2 rounded bg-white/30" />
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 rounded bg-white/30" />
        <input type="text" placeholder="Department" className="w-full mb-3 p-2 rounded bg-white/30" />
        <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-secondary transition">
          Submit
        </button>
      </form>
    </div>
  );
}
