import React from "react";
import { Outlet } from 'react-router-dom';
import './devices.css';

const Devices = () => {
    return (
        <div className="devices">
        <h1>Devices</h1>
            <Outlet />
        </div>
    );
}

export default Devices;