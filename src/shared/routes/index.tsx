import { Routes, Route } from "react-router-dom";
import { Register } from "../../pages/Register";
import { Dashboard } from "../../pages/Dashboard";
import { Session } from "../../pages/Session";
import { AnnouncementPage } from "../../pages/Announcement";
import { PersonalAnnouncements } from "../../pages/MyAnnouncements";
import { ProfileAnnouncements } from "../../pages/Profile";
import { PersonalShopping } from "../../pages/MyShopping";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/session" element={<Session />} />
      <Route path="/announcement/:id" element={<AnnouncementPage />} />
      <Route
        path="/:userId/myAnnouncements"
        element={<PersonalAnnouncements />}
      />
      <Route path="/:userId/myShopping" element={<PersonalShopping />} />
      <Route path="/:userId/profile" element={<ProfileAnnouncements />} />
    </Routes>
  );
};
