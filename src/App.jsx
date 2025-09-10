import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Registration from "./pages/Registration";
import CodingContest from "./pages/events/CodingContest"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/events/Codingcontest" element={<CodingContest/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
