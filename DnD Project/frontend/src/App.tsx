import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/Frontpage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Character from "./pages/Character";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./css/styles.css";

/*

TODO: Add routing
TODO: Create Protected Route HOC
TODO: Add protected routes
TODO: Add loading screen for getting jwt
TODO: Complete Login, Signup, and Front pages

*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<FrontPage />} />
          {/* Up to you guys if you want to combine it into one file  */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="character" element={<Character />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
