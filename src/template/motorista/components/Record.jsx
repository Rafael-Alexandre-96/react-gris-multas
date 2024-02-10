import { EditRecord } from './Inputs';
import { BtnSalvarSm, BtnEditarSm, BtnDesativarSm, BtnAtivarSm } from '../../../components/buttons/index';
import { BdgAtivo, BdgInativo } from '../../../components/badges/index';

export const Record = ({edit, setEdit, motorista, setMotorista, handleSalvar, handleAtivar, handleDesativar}) => (
  <tr>
      { edit ? 
        <EditRecord motorista={motorista} setMotorista={setMotorista} />
        :
        <>
          <td className='align-middle'><span>{motorista?.nome || ''}</span></td>
          <td className='align-middle'><span>{motorista?.cpf || ''}</span></td>
        </>
      }
    <td className='align-middle'>
      { motorista?.registroStatus.active ?
        <BdgAtivo />
        :
        <BdgInativo />
      }
    </td>
    <td className='d-flex gap-1 justify-content-between'>
      { edit ? 
        <BtnSalvarSm onClick={handleSalvar} />
        :
        <BtnEditarSm onClick={() => setEdit(true)} />
      }
      { motorista?.registroStatus.active ?
        <BtnDesativarSm onClick={handleAtivar} />
        :
        <BtnAtivarSm onClick={handleDesativar} />
      }
    </td>
  </tr>
);