// src/components/Sidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './sidebar.css';

import IconDashBoard from '../../assets/IconDashboard.png';
import IconLogs from '../../assets/IconLogs.png';
import IconGarden from '../../assets/iconGarden.png';
import IconDevices from '../../assets/IconDevice.png';
import IconUser from '../../assets/iconUser.png';
import IconLogout from '../../assets/IconLogout.png';
import IconNotification from '../../assets/iconNotification.png';

function Sidebar() {
  const navigate = useNavigate();

  const user = {
    name: "Nguyễn Khánh Lộc",
    role: "Quản lý",
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h3>Smart Garden</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/user/dashboard" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <img src={IconDashBoard} alt="Dashboard" />
            <div>Dashboard</div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/logs" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <img src={IconLogs} alt="Logs" />
            <div>Lịch sử</div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/garden" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <img src={IconGarden} alt="Logs" />
            <div>Khu vườn</div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/devices" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <img src={IconDevices} alt="Devices" />
            <div>Thiết bị</div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/setting" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <img src={IconUser} alt="Settings" />
            <div>Người dùng</div>
          </NavLink>
        </li>
      </ul>

      {/* Thêm phần người dùng & logout */}
      <div className="sidebar-footer">
        <NavLink to="/user/notifications" className="sidebar-item">
          <img src={IconNotification} alt="Notifications" style={{width:20, height:20}}/>
          <div>Thông báo</div>
        </NavLink>

        <NavLink to="/user/profile" className="sidebar-user">
          <div className="user-avatar">{getInitials(user.name)}</div>
          <div className="user-info">
            <span className="user-name">{user.name}</span>
            <span className="user-role">{user.role}</span>
          </div>
        </NavLink>

        <button onClick={handleLogout} className="sidebar-item logout-button">
          <img src={IconLogout} alt="Logout" style={{width:20, height:20}}/>
          <div>Đăng xuất</div>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
