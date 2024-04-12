import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ element, ...rest }) {
  const token = useSelector((state) => state.login.token);
  return token ? <Route {...rest} element={element} /> : <Navigate to="/" />;
}

export default ProtectedRoute;
