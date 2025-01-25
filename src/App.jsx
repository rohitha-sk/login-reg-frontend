import { Route, Routes } from "react-router-dom";
import Login from "./components/login-&-registration/Login";
import Registration from "./components/login-&-registration/Registration";
import Dashboard from "./components/admin/Dashboard";
import HomePage from "./components/customer/HomePage";
import ProtectedRoute from "./ProtectedRoute";


function App() {
    return (
        <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<Login />} />

            <Route 
                path="/admin-dashboard" 
                element={
                    <ProtectedRoute>
                        <Dashboard />  {/* Only accessible if authenticated */}
                    </ProtectedRoute>
                } 
            />
            <Route
                path="/customer-homepage"
                element={
                  <ProtectedRoute>
                        <HomePage /> 
                  </ProtectedRoute>
                }
            />
            
        </Routes>
    );
}

export default App;
