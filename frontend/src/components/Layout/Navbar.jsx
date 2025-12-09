export default function Navbar({ role }) {
    return (
      <header style={{ background: "#f0f0f0", padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <strong>Administrative Services App</strong> — {role === "admin" ? "Admin Panel" : "User Panel"}
      </header>
    );
  }
  