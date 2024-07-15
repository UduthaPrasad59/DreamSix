import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import  Dashboard  from "./components/Dashboard/Dashboard";
import NavBar from "./components/Header/Navbar";
import Matches from "./components/Matches/Matches";
import MatchDetails from "./components/MatchDetails/MatchDetails";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/match-details" element={<MatchDetails />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
