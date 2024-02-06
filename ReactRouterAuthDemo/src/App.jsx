import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {Secret} from "./pages/Secret.jsx";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/secret"
                    element={
                        <ProtectedRoute>
                            <Secret />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}

export default App;