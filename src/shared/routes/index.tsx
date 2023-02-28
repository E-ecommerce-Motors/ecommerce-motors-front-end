import { Routes, Route } from "react-router-dom";
import { Register } from "../../pages/Register";
import { Dashboard } from "../../pages/Dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

