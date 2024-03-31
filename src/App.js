import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InternalInsight from "./pages/internalInsight/InternalInsight";
import ExternalInsight from "./pages/externalInsight/ExternalInsight";
import DataSources from "./pages/dataSources/DataSources";
import SavedSearch from "./pages/savedSearch/SavedSearch";
import GetHelp from "./pages/help/GetHelp";
import AddSource from "./pages/dataSources/AddSource";
import MarketInsightResult from "./pages/externalInsight/MarketInsightResult";
import Profile from "./pages/profile/Billing";
import Billing from "./pages/profile/Billing";

function App() {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const toggleProfileModal = () => {
    setProfileModalOpen(!isProfileModalOpen);
  };

  return (
    <div className="flex">
      <BrowserRouter>
        <SideBar onProfileClick={toggleProfileModal} />
        {isProfileModalOpen && <Profile onClose={toggleProfileModal} />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/internalInsight" element={<InternalInsight />} />
          <Route path="/externalInsight" element={<ExternalInsight />} />
          <Route path="/dataSource" element={<DataSources />} />
          <Route path="/savedSearch" element={<SavedSearch />} />
          <Route path="/getHelp" element={<GetHelp />} />
          <Route path="/user" element={<Dashboard />} />
          <Route path="/addSource" element={<AddSource />} />
          <Route
            path="/marketInsightResult"
            element={<MarketInsightResult />}
          />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
