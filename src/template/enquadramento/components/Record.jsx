import { EditRecord } from './Inputs';
import { BtnSalvarSm, BtnEditarSm, BtnDeletarSm } from '../../../components/buttons/index';
import * as utils from '../../../utils/stringFormater';

export const Record = ({edit, setEdit, enquadramento, setEnquadramento, handleSalvar, handleDeletar}) => (
  <tr>
      { edit ? 
        <EditRecord enquadramento={enquadramento} setEnquadramento={setEnquadramento} />
        :
        <>
          <td className='align-middle'><span>{enquadramento?.numeroEnquadramento || ''}</span></td>
          <td className='align-middle'><span>{enquadramento?.descricao || ''}</span></td>
          <td className='align-middle'><span>{enquadramento?.baseLegal || ''}</span></td>
          <td className='align-middle'><span>{enquadramento?.infrator || ''}</span></td>
          <td className='align-middle'><span>{enquadramento?.pontos || 0}</span></td>
          <td className='align-middle'><span>{utils.formatReal(enquadramento?.valor) || 'R$ 0,00' }</span></td>
        </>
      }
    <td className='d-flex gap-1 justify-content-between'>
      { edit ? 
        <BtnSalvarSm onClick={handleSalvar} />
        :
        <BtnEditarSm onClick={() => setEdit(true)} />
      }
      <BtnDeletarSm onClick={handleDeletar} />
    </td>
  </tr>
);