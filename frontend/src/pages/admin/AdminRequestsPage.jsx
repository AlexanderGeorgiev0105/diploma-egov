import { useEffect, useState } from "react";

import {
  loadRequests,
  updateRequestStatus,
  clearAllRequests,
} from "../../utils/requestsStorage";

import {
  REQUEST_STATUSES,
  getStatusLabel,
  formatDateTime,
  canAdminProcess,
  canAdminApproveOrReject,
} from "../../utils/requestModel";

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setRequests(loadRequests());
      setLoading(false);
    }, 200);
  }, []);

  function markProcessing(id) {
    const updated = updateRequestStatus(id, REQUEST_STATUSES.PROCESSING);
    setRequests(updated);
  }

  function approve(id) {
    const updated = updateRequestStatus(id, REQUEST_STATUSES.APPROVED);
    setRequests(updated);
  }

  function reject(id) {
    const updated = updateRequestStatus(id, REQUEST_STATUSES.REJECTED);
    setRequests(updated);
  }

  function clearDemoData() {
    if (
      window.confirm("Сигурен ли си, че искаш да изтриеш всички demo заявки?")
    ) {
      clearAllRequests();
      setRequests([]);
    }
  }

  if (loading) {
    return (
      <div>
        <h1>Admin Requests</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <div>
        <h1>Admin Requests</h1>
        <p>Няма подадени заявки.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Requests</h1>

      <button className="btn" onClick={clearDemoData} style={{ marginBottom: 10 }}>
        Clear demo data
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Услуга</th>
            <th>Заявител</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((r) => (
            <tr key={r.id}>
              <td>{formatDateTime(r.createdAt)}</td>
              <td>{r.service.title}</td>
              <td>{r.applicant.fullName}</td>
              <td>{getStatusLabel(r.status)}</td>
              <td style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {canAdminProcess(r.status) && (
                  <button className="btn" onClick={() => markProcessing(r.id)}>
                    Mark Processing
                  </button>
                )}

                {canAdminApproveOrReject(r.status) && (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => approve(r.id)}
                    >
                      Approve
                    </button>
                    <button className="btn" onClick={() => reject(r.id)}>
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
