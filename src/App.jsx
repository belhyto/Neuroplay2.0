import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ManageVideoOnCanvas from "./components/ManageVideoOnCanvas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manage-video" element={<ManageVideoOnCanvas />} />
      </Routes>
    </Router>
  );
}

export default App;
