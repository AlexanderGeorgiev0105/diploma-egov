import { Link } from "react-router-dom";
import { categories } from "../../data/mockData";

export default function CategoriesPage() {
  return (
    <div>
      <h1>Categories</h1>
      <p>Избери категория:</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
        {categories.map((c) => (
          <Link
            key={c.id}
            to={`/categories/${c.id}/services`}
            style={{
              textDecoration: "none",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "12px",
              background: "white",
            }}
          >
            <h3 style={{ margin: 0 }}>{c.name}</h3>
            <p style={{ marginTop: 8, color: "#555" }}>Виж услуги →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
