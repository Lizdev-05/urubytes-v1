import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InternalInsight from "./pages/internalInsight/InternalInsight";
import ExternalInsight from "./pages/externalInsight/ExternalInsight";
import DataSources from "./pages/dataSources/DataSources";
import SavedSearch from "./pages/savedSearch/SavedSearch";
import GetHelp from "./pages/help/GetHelp";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/internalInsight" element={<InternalInsight />} />
          <Route path="/externalInsight" element={<ExternalInsight />} />
          <Route path="/dataSource" element={<DataSources />} />
          <Route path="/savedSearch" element={<SavedSearch />} />
          <Route path="/getHelp" element={<GetHelp />} />
          <Route path="/user" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
