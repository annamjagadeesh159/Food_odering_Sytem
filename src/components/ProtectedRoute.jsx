import { Navigate, Outlet, useLocation } from "react-router-dom";

// user: the logged-in user, or null
// role: optional, for example "admin"
function ProtectedRoute({ user, role }) {
  const location = useLocation();

  if (!user) {
    // remember where the user wanted to go, so login can send them back
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;