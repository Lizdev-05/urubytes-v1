import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
