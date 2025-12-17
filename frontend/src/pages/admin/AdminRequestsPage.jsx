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

  useEffect(() => {
    setRequests(loadRequests());
  }, []);

  function markProcessing(id) {
    const updated = updateRequestStatus(
      id,
      REQUEST_STATUSES.PROCESSING
    );
    setRequests(updated);
  }

  function approve(id) {
    const updated = updateRequestStatus(
      id,
      REQUEST_STATUSES.APPROVED
    );
    setRequests(updated);
  }

  function reject(id) {
    const updated = updateRequestStatus(
      id,
      REQUEST_STATUSES.REJECTED
    );
    setRequests(updated);
  }

  if (requests.length === 0) {
    return (
      <div>
        <h1>Admin Requests</h1>
        <p>Няма подадени заявки.</p>
      </div>
    );
  }

  function clearDemoData() {
    if (window.confirm("Сигурен ли си, че искаш да изтриеш всички demo заявки?")) {
      clearAllRequests();
      setRequests([]);
    }
  }  

  return (
    <div>
      <h1>Admin Requests</h1>

      <button
  onClick={clearDemoData}
  style={{ marginBottom: "10px" }}
>
  Clear demo data
</button>

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
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
              <td>
                {canAdminProcess(r.status) && (
                  <button onClick={() => markProcessing(r.id)}>
                    Mark Processing
                  </button>
                )}

                {canAdminApproveOrReject(r.status) && (
                  <>
                    <button onClick={() => approve(r.id)}>
                      Approve
                    </button>
                    <button onClick={() => reject(r.id)}>
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
