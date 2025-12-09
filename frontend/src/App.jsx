import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";

// User pages
import UserDashboard from "./pages/user/UserDashboard";
import CategoriesPage from "./pages/user/CategoriesPage";
import ServicesByCategoryPage from "./pages/user/ServicesByCategoryPage";
import ServiceDetailsPage from "./pages/user/ServiceDetailsPage";
import MyRequestsPage from "./pages/user/MyRequestsPage";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRequestsPage from "./pages/admin/AdminRequestsPage";

// Public pages
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />

      {/* User */}
      <Route path="/" element={<MainLayout role="user" />}>
        <Route index element={<UserDashboard />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route
          path="categories/:id/services"
          element={<ServicesByCategoryPage />}
        />
        <Route path="services/:id" element={<ServiceDetailsPage />} />
        <Route path="my-requests" element={<MyRequestsPage />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<MainLayout role="admin" />}>
        <Route index element={<AdminDashboard />} />
        <Route path="requests" element={<AdminRequestsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
