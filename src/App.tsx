import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import UsersPage from "@/pages/Users";

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
    </Routes>
  );
}

export default App;
