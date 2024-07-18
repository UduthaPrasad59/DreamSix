import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import  Dashboard  from "./components/Dashboard/Dashboard";
import NavBar from "./components/Header/Navbar";
import Matches from "./components/Matches/Matches";
import MatchDetails from "./components/MatchDetails/MatchDetails";
import Chat from "./components/ChatBox/Contact";
import RulesPage from "./components/RulePage/Rules";
import PaymentsPage from "./components/Payments/Payments";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/contact" element={<Chat/>} />
            <Route path="/match-details" element={<MatchDetails />} />
            <Route path="/rules" element={<RulesPage/>}/>
            <Route path="payments" element={<PaymentsPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
