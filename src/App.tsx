import { Routes, Route } from "react-router-dom";
import UsersPage from "@/pages/Users";
import UserProfilePage from "@/pages/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="user/:userId" element={<UserProfilePage />} />
    </Routes>
  );
}

export default App;
