import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import req from "../utils/request";
import LoadingScreen from "./General/LoadingScreen";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let { data } = await req.get("/auth/refreshToken");

        if (data) {
          setLoading(false);
        }
      } catch (error) {
        setValid(false);
        setLoading(false);
      }
    })();
  }, []);

  if (!loading && !valid) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    navigate("/login");
    return null;
  }

  return (
    <>
      {loading && <LoadingScreen />}
      {children}
    </>
  );

  // return !loading ? children : <LoadingScreen />;
}
