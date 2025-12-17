import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ChatBot from "../ChatBot/ChatBot";

export default function MainLayout({ role }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar role={role} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar role={role} />
        <main style={{ flex: 1 }}>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
      <ChatBot />
    </div>
  );
}
