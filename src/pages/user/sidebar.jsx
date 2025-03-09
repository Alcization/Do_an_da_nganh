// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import IconDashBoard from '../../assets/IconDashboard.png';
import IconLogs from '../../assets/IconLogs.png';
import IconDevices from '../../assets/IconDevice.png';
import IconSetting from '../../assets/IconSetting.png';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h3>Smart Garden</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink 
            to="/user/dashboard" 
            end 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          > 
            <img src={IconDashBoard} alt="IconDashBoard" />
            <div>Dashboard</div>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/user/logs" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <img src={IconLogs} alt="IconLogs" />
            <div>Lịch sử</div>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/user/devices" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <img src={IconDevices} alt="IconDevices" />
            <div>Thiết bị</div>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/user/setting" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <img src={IconSetting} alt="IconSetting" />
            <div>Người dùng</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
