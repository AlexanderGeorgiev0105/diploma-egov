import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ChatBot from "../ChatBot/ChatBot";

export default function MainLayout({ role }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar role={role} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar role={role} />
        <main style={{ padding: "1rem", flex: 1, overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>
      <ChatBot />
    </div>
  );
}
