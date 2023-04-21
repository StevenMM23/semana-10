import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RegistrationForm from "./components/RegistrationForm";
import Confirmation from "./components/Confirmation";
import Result from "./components/Results";
import Payment from "./components/Payment";
import Report from "./components/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/result" element={<Result />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
