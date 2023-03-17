import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import UsersPage from "@/pages/Users";
import UserProfilePage from "@/pages/UserProfile";
import { useParams } from "react-router-dom";

function App(): ReactElement {
  const params = useParams();
  console.log(params);

  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="user/:userId" element={<UserProfilePage />} />
    </Routes>
  );
}

export default App;
