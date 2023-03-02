import { Routes, Route } from "react-router-dom";
import { Register } from "../../pages/Register";
import { Dashboard } from "../../pages/Dashboard";
import { Session } from "../../pages/Session";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/session" element={<Session />} />
    </Routes>
  );
};
