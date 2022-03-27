import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import FrontPage from "./pages/Frontpage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Character from "./pages/Character";
import Lobby from "./pages/Lobby";
import DMLobby from "./pages/DMLobby";
import MainGame from "./pages/MainGame";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./css/styles.css";

/*

TODO: Add routing
TODO: Add loading screen for getting jwt
TODO: Complete Login, Signup, and Front pages

*/

const protectedRoutes = [
  {
    path: "dashboard",
    page: Dashboard,
  },
  {
    path: "character",
    page: Character,
  },
  {
    path: "lobby",
    page: Lobby,
  },
  {
    path: "dmLobby",
    page: DMLobby,
  },
  {
    path: "mainGame",
    page: MainGame,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<FrontPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {protectedRoutes.map(({ path, page }, i) => (
            <Route
              key={i}
              path={path}
              element={<ProtectedRoute>{page()}</ProtectedRoute>}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
