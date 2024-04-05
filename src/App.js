import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import InternalInsight from "./pages/internalInsight/InternalInsight";
import ExternalInsight from "./pages/externalInsight/ExternalInsight";
import DataSources from "./pages/dataSources/DataSources";
import SavedSearch from "./pages/savedSearch/SavedSearch";
import GetHelp from "./pages/help/GetHelp";
import AddSource from "./pages/dataSources/AddSource";
import MarketInsightResult from "./pages/externalInsight/MarketInsightResult";
import Profile from "./pages/profile/Billing";
import Billing from "./pages/profile/Billing";
import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import Survey from "./components/auth/survey/Survey";
import Interest from "./components/auth/interest/Interest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const location = useLocation();

  const toggleProfileModal = () => {
    setProfileModalOpen(!isProfileModalOpen);
  };

  return (
    <div className="flex">
      {/* <SideBar onProfileClick={toggleProfileModal} /> */}
      {/*  I dont want side bar to show in my register page also */}
      <ToastContainer />

      {location.pathname !== "/" &&
        location.pathname !== "/register" &&
        location.pathname !== "/interest" &&
        location.pathname !== "/survey" && (
          <SideBar onProfileClick={toggleProfileModal} />
        )}

      {/* {location.pathname !== "/"  && (
        <SideBar onProfileClick={toggleProfileModal} />
      )} */}
      {isProfileModalOpen && <Profile onClose={toggleProfileModal} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/internalInsight" element={<InternalInsight />} />
        <Route path="/externalInsight" element={<ExternalInsight />} />
        <Route path="/dataSource" element={<DataSources />} />
        <Route path="/savedSearch" element={<SavedSearch />} />
        <Route path="/getHelp" element={<GetHelp />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/addSource" element={<AddSource />} />
        <Route path="/marketInsightResult" element={<MarketInsightResult />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </div>
  );
}

export default App;
