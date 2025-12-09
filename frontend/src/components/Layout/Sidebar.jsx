import { Link } from "react-router-dom";

export default function Sidebar({ role }) {
  return (
    <aside style={{ width: "220px", borderRight: "1px solid #ccc", padding: "1rem" }}>
      {role === "user" && (
        <>
          <h4>User Menu</h4>
          <Link to="/">Dashboard</Link><br/>
          <Link to="/categories">Categories</Link><br/>
          <Link to="/my-requests">My Requests</Link>
        </>
      )}

      {role === "admin" && (
        <>
          <h4>Admin Menu</h4>
          <Link to="/admin">Dashboard</Link><br/>
          <Link to="/admin/requests">All Requests</Link>
        </>
      )}
    </aside>
  );
}
