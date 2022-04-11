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
import TestChat from "./pages/TestChat";
import ListCharacters from "./pages/ListCharacters";
import ResetPassword from "./pages/ResetPassword";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./css/styles.css";

/*

TODO: Main app functionality implemented

*/

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B151F",
    },
    secondary: {
      main: "#B76861",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<FrontPage />} />
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="testChat" element={<TestChat />} />
            <Route path="resetPassword" element={<ResetPassword />} />
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
    </ThemeProvider>
  );
}

export default App;
