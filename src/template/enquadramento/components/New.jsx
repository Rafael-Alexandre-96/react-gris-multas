import { EditRecord } from './Inputs';
import { BtnSalvarSm } from '../../../components/buttons/index';

export const New = ({enquadramento, setEnquadramento, handleSalvar}) => (
  <tr>
    <EditRecord enquadramento={enquadramento} setEnquadramento={setEnquadramento} />
    <td className='align-middle text-center'>
      <BtnSalvarSm onClick={handleSalvar} />
    </td>
  </tr>
)