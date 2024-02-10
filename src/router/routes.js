import { createBrowserRouter } from 'react-router-dom';

import IndexMotorista from '../template/motorista/index';

/*import { IndexDashboard } from '../template/dashboard/IndexDashboard';
import { IndexVeiculo } from '../template/veiculo/IndexVeiculo';
import { IndexMulta } from '../template/multa/IndexMulta';
import { EditMulta } from '../template/multa/EditMulta';
import { ErrorRedirect } from './errorRedirect';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <IndexDashboard />,
      errorElement: <ErrorRedirect />
    },
    {
      path: '/veiculo',
      element: <IndexVeiculo />,
    },
    {
      path: '/multa',
      element: <IndexMulta />,
    },
    {
      path: '/multa/editar',
      element: <EditMulta />,
    },
    {
      path: '/multa/editar/:id',
      element: <EditMulta />,
    },
    {
      path: '/motorista',
      element: <IndexMotorista />,
    }
]);*/

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <IndexMotorista />,
    errorElement: <IndexMotorista />
  }
]);