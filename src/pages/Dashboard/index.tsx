import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Dashboard</h1>
            <button className="btn btn-danger" onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bienvenido, {user?.username}</h5>
              <p className="card-text">Esta es tu página de dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 