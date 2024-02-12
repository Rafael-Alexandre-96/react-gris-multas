import { EditRecord } from './Inputs';
import { BtnSalvarSm, BtnEditarSm, BtnDesativarSm, BtnAtivarSm } from '../../../components/buttons/index';
import { BdgAtivo, BdgInativo } from '../../../components/badges/index';

export const Record = ({edit, setEdit, veiculo, setVeiculo, handleSalvar, handleAtivar, handleDesativar}) => (
  <tr>
      { edit ? 
        <EditRecord veiculo={veiculo} setVeiculo={setVeiculo} />
        :
        <>
          <td className='align-middle'><span>{veiculo?.placa || ''}</span></td>
          <td className='align-middle'><span>{veiculo?.frota || ''}</span></td>
          <td className='align-middle'><span>{veiculo?.tipoRodado || ''}</span></td>
        </>
      }
    <td className='align-middle'>
      { veiculo?.registroStatus.active ?
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
      { veiculo?.registroStatus.active ?
        <BtnDesativarSm onClick={handleAtivar} />
        :
        <BtnAtivarSm onClick={handleDesativar} />
      }
    </td>
  </tr>
);