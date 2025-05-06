import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AppRoutes from './routes/Routes';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
