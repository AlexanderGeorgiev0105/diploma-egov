export default function Navbar({ role }) {
  return (
    <header
      style={{
        background: "white",
        borderBottom: "1px solid #e6e8ef",
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <strong>Administrative Services App</strong>
      <span className="badge">{role === "admin" ? "Admin Panel" : "User Panel"}</span>
    </header>
  );
}
