// ArtisanRoute.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ArtisanRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "artisan") {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ArtisanRoute;
