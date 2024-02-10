import { EditRecord } from './Inputs';
import { BtnSalvarSm } from '../../../components/buttons/index';
import { BdgNovo } from '../../../components/badges/index';

export const New = ({motorista, setMotorista, handleSalvar}) => (
  <tr>
    <EditRecord motorista={motorista} setMotorista={setMotorista} />
    <td className='align-middle'>
      <BdgNovo />
    </td>
    <td className='align-middle text-start'>
      <BtnSalvarSm onClick={handleSalvar} />
    </td>
  </tr>
)