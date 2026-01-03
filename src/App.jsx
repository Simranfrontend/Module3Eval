import { Routes, Route } from "react-router-dom";
import Login  from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin/dashboard"
      element={
        <ProtectedRoute role="admin">
          <AdminDashboard />
        </ProtectedRoute>
      }
      />

      <Route path="/admin/restaurants/update/:id"
      element={
        <ProtectedRoute role="admin">
          <UpdateRestaurant />
        </ProtectedRoute>
      }
      />

      <Route path="/customers/dashboard"
      element={
        <ProtectedRoute role="admin">
          <CustomerDashboard />
        </ProtectedRoute>
      }
      />
    </Routes>
  );
};

export default App;







