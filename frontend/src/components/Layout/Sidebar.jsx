import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  display: "block",
  padding: "10px 12px",
  borderRadius: "10px",
  textDecoration: "none",
  marginBottom: "6px",
  background: isActive ? "#eef2ff" : "transparent",
  border: isActive ? "1px solid #e0e7ff" : "1px solid transparent",
});

export default function Sidebar({ role }) {
  return (
    <aside
      style={{
        width: "240px",
        background: "white",
        borderRight: "1px solid #e6e8ef",
        padding: "12px",
      }}
    >
      {role === "user" && (
        <>
          <div style={{ fontWeight: 600, marginBottom: 10 }}>User Menu</div>
          <NavLink to="/" style={linkStyle}>Dashboard</NavLink>
          <NavLink to="/categories" style={linkStyle}>Categories</NavLink>
          <NavLink to="/my-requests" style={linkStyle}>My Requests</NavLink>
        </>
      )}

      {role === "admin" && (
        <>
          <div style={{ fontWeight: 600, marginBottom: 10 }}>Admin Menu</div>
          <NavLink to="/admin" style={linkStyle} end>Dashboard</NavLink>
          <NavLink to="/admin/requests" style={linkStyle}>All Requests</NavLink>
        </>
      )}
    </aside>
  );
}
