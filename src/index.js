import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { IndexDashboard } from './template/dashboard/IndexDashboard';
import { IndexVeiculo } from './template/veiculo/IndexVeiculo';
import { IndexMotorista } from './template/motorista/IndexMotorista';
import { IndexMulta } from './template/multa/IndexMulta';
import { EditMulta } from './template/multa/EditMulta';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexDashboard />,
  },
  {
    path: "/veiculo",
    element: <IndexVeiculo />,
  },
  {
    path: "/multa",
    element: <IndexMulta />,
  },
  {
    path: "/multa/editar",
    element: <EditMulta />,
  },
  {
    path: "/motorista",
    element: <IndexMotorista />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
