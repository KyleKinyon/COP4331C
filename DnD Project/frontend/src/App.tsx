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
import ListCharacters from "./pages/ListCharacters";

/*

TODO: Complete Login, Signup, and Front pages
TODO: Figure out double render bug

*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route
            path={"dashboard"}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={"lobby"}
            element={
              <ProtectedRoute>
                <Lobby />
              </ProtectedRoute>
            }
          />
          <Route
            path={"dmLobby"}
            element={
              <ProtectedRoute>
                <DMLobby />
              </ProtectedRoute>
            }
          />
          <Route
            path={"mainGame"}
            element={
              <ProtectedRoute>
                <MainGame />
              </ProtectedRoute>
            }
          />

          <Route path="character">
            <Route
              index
              element={
                <ProtectedRoute>
                  <ListCharacters />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute>
                  <Character />
                </ProtectedRoute>
              }
            />
            <Route
              path=":charId"
              element={
                <ProtectedRoute>
                  <Character load />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
