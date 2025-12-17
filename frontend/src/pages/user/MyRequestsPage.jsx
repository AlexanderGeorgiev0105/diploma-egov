import { useEffect, useState } from "react";
import {
  loadRequests,
  updateRequestStatus,
} from "../../utils/requestsStorage";
import {
  REQUEST_STATUSES,
  getStatusLabel,
  formatDateTime,
  canUserCancel,
} from "../../utils/requestModel";

export default function MyRequestsPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(loadRequests());
  }, []);

  function cancelRequest(requestId) {
    const updated = updateRequestStatus(
      requestId,
      REQUEST_STATUSES.CANCELLED
    );
    setRequests(updated);
  }

  if (requests.length === 0) {
    return (
      <div>
        <h1>My Requests</h1>
        <p>Все още нямате подадени заявки.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>My Requests</h1>

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th>Дата</th>
            <th>Услуга</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((r) => (
            <tr key={r.id}>
              <td>{formatDateTime(r.createdAt)}</td>
              <td>{r.service.title}</td>
              <td>{getStatusLabel(r.status)}</td>
              <td>
              {canUserCancel(r.status) && (
  <button onClick={() => cancelRequest(r.id)}>
    Cancel
  </button>
)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
