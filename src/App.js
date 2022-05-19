import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Main from "./pages/Main";
import Opening from "./pages/Opening";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/opening" element={<Opening />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Navigate to="/opening" replace />} />
      </Routes>
    </div>
  );
}

export default App;
