import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'

import BlankLayout from './pages/blank.jsx'
import ErrorLayout from './pages/error.jsx'

import Introduce from './pages/introduce/introduce.jsx'
import Login from './pages/login/login.jsx'

import Layout from './pages/user/layout.jsx';

import DashBoard from './pages/user/dashboard/dashboard.jsx'

import Logs from './pages/user/logs/logs.jsx'
import Temperature from './pages/user/logs/temperature/temperature.jsx'
import Humidity from './pages/user/logs/humidity/humidity.jsx'
import Moisture from './pages/user/logs/moisture/moisture.jsx'
import Light from './pages/user/logs/light/light.jsx'

import Devices from './pages/user/devices/devices.jsx'
import Input from './pages/user/devices/input/input.jsx'
import Output from './pages/user/devices/output/output.jsx'

import Setting from './pages/user/setting/setting.jsx'

const App = () => {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

};

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlankLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: '',
        element: <Introduce />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'user',
        element: <Layout />,
        children: [
          {
            path: 'dashboard',
            element: <DashBoard />
          },
          {
            path: 'logs',
            element: <Logs />,
            children: [
              {
                path: 'temperature',
                element: <Temperature />
              },
              {
                path: 'humidity',
                element: <Humidity />
              },
              {
                path: 'moisture',
                element: <Moisture />
              },
              {
                path: 'light',
                element: <Light />
              }
            ]
          },
          {
            path: 'devices',
            element: <Devices />,
            children: [
              {
                path: 'input',
                element: <Input />
              },
              {
                path: 'output',
                element: <Output />
              }
            ]
          },
          {
            path: 'setting',
            element: <Setting />
          },
        ] 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)