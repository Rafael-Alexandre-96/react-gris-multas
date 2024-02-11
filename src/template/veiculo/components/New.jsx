import { EditRecord } from './Inputs';
import { BtnSalvarSm } from '../../../components/buttons/index';
import { BdgNovo } from '../../../components/badges/index';

export const New = ({veiculo, setVeiculo, handleSalvar}) => (
  <tr>
    <EditRecord veiculo={veiculo} setVeiculo={setVeiculo} />
    <td className='align-middle'>
      <BdgNovo />
    </td>
    <td className='align-middle text-start'>
      <BtnSalvarSm onClick={handleSalvar} />
    </td>
  </tr>
)