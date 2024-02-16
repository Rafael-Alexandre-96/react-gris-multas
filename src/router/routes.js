import { createBrowserRouter } from 'react-router-dom';

import IndexDashboard from '../template/dashboard/index';
import IndexMotorista from '../template/motorista/index';
import IndexVeiculo from '../template/veiculo/index';
import IndexMulta from '../template/multa/index';
import { EditMulta } from '../template/multa/EditMulta';
import Vale from '../report/vale/index';
import IndexEnquadramento from '../template/enquadramento/index'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <IndexDashboard />,
    errorElement: <IndexDashboard />
  },
  {
    path: '/motorista',
    element: <IndexMotorista />
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
    path: '/multa/imprimir/:id',
    element: <Vale />,
  },
  {
    path: '/enquadramento',
    element: <IndexEnquadramento />,
  },
]);