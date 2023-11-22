import { Outlet } from "react-router-dom";
 import Navbar from "./components/Navbar";
 import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    // Chamando os Components principais
    <div className="app-container">
      <Navbar/>
      <Sidebar/>
      <Outlet />
    </div>
  );
}

export default App;
