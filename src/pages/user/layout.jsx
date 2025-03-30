import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar.jsx';
import './layout.css';

function Layout() {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-main">
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
