import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes; 