import { useState } from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import InternalInsight from "./pages/internalInsight/InternalInsight";
import ExternalInsight from "./pages/externalInsight/ExternalInsight";
import DataSources from "./pages/dataSources/DataSources";
import SavedSearch from "./pages/savedSearch/SavedSearch";
import GetHelp from "./pages/profile/GetHelp";
import AddSource from "./pages/dataSources/AddSource";
import MarketInsightResult from "./pages/externalInsight/MarketInsightResult";
import Profile from "./pages/profile/Billing";
import Billing from "./pages/profile/Billing";
import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import Survey from "./components/auth/survey/Survey";
import Interest from "./components/auth/interest/Interest";
import EmailVerification from "./components/auth/emailVerification/EmailVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import ReturningUser from "./pages/dashboard/ReturningUser";

function App() {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const sources = useSelector((state) => state.sources);
  const isNewUser = sources.length === 0;

  const toggleProfileModal = () => {
    setProfileModalOpen(!isProfileModalOpen);
  };

  function ProtectedRoute({ children }) {
    const token = useSelector((state) => state.login.token);
    if (!token) {
      navigate("/");
      return null;
    }
    return children;
  }

  return (
    <div className="flex">
      <ToastContainer />

      {location.pathname !== "/" &&
        location.pathname !== "/register" &&
        location.pathname !== "/interest" &&
        location.pathname !== "/survey" &&
        location.pathname !== "/emailVerification" && (
          <SideBar onProfileClick={toggleProfileModal} />
        )}
      {isProfileModalOpen && <Profile onClose={toggleProfileModal} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/emailVerification" element={<EmailVerification />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {isNewUser ? <Dashboard /> : <ReturningUser />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/internalInsight"
          element={
            <ProtectedRoute>
              <InternalInsight />
            </ProtectedRoute>
          }
        />
        <Route
          path="/externalInsight"
          element={
            <ProtectedRoute>
              <ExternalInsight />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dataSource"
          element={
            <ProtectedRoute>
              <DataSources />
            </ProtectedRoute>
          }
        />
        <Route
          path="/savedSearch"
          element={
            <ProtectedRoute>
              <SavedSearch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/getHelp"
          element={
            <ProtectedRoute>
              <GetHelp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addSource"
          element={
            <ProtectedRoute>
              <AddSource />
            </ProtectedRoute>
          }
        />
        <Route
          path="/marketInsightResult"
          element={
            <ProtectedRoute>
              <MarketInsightResult />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billing"
          element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/getHelp"
          element={
            <ProtectedRoute>
              <GetHelp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/returningUser"
          element={
            <ProtectedRoute>
              <ReturningUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
