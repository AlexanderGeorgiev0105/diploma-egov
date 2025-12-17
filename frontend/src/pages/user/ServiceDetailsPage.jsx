import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { servicesByCategory } from "../../data/mockData";

function findServiceById(serviceId) {
  for (const key of Object.keys(servicesByCategory)) {
    const service = servicesByCategory[key].find((s) => s.id === serviceId);
    if (service) return service;
  }
  return null;
}

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const service = useMemo(() => findServiceById(id), [id]);

  const [form, setForm] = useState({ fullName: "", egn: "", details: "" });

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    alert(`Заявката е записана локално (demo).\nУслуга: ${service?.title}\nИме: ${form.fullName}`);
    setForm({ fullName: "", egn: "", details: "" });
  }

  if (!service) return <h1>Service not found</h1>;

  return (
    <div>
      <h1>Service Details</h1>
      <h2 style={{ marginTop: 0 }}>{service.title}</h2>
      <p style={{ color: "#555" }}>{service.description}</p>

      <h3>Подай заявка (demo)</h3>
      <form onSubmit={onSubmit} style={{ maxWidth: 520, display: "grid", gap: 10 }}>
        <input name="fullName" placeholder="Три имена" value={form.fullName} onChange={onChange} />
        <input name="egn" placeholder="ЕГН" value={form.egn} onChange={onChange} />
        <textarea name="details" placeholder="Допълнителни данни" rows={4} value={form.details} onChange={onChange} />
        <button type="submit">Изпрати</button>
      </form>
    </div>
  );
}
