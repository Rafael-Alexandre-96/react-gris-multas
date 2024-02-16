import { BtnEditarSm, BtnImprimirSm, BtnDeletarSm } from '../../../components/buttons/index';
import * as utils from '../../../utils/stringFormater';
import '../styles.css';

export const Record = ({multa, handleEditar, handleImprimir, handleDeletar}) => (
  <tr className='small-text-table'>
    <td className="align-middle">
      <span>{utils.formatDateTime(multa?.dataInfracao) || ''}</span>
    </td>
    <td className="align-middle">
        <span>{multa?.local || ''}</span>
    </td>
    <td className="align-middle">
        <span>{multa?.enquadramento?.descricao || ''}</span>
    </td>
    <td className="align-middle">
        <span>{multa?.infrator || ''}</span>
    </td>
    <td className="align-middle">
        <span>{multa?.veiculo?.placa || ''}</span>
    </td>
    <td className="align-middle">
        <span>{multa?.semiReboque?.placa || ''}</span>
    </td>
    <td className="align-middle">
        <span>{multa?.motorista?.nome || ''}</span>
    </td>
    <td className="align-middle">
        <span>{multa?.situacao || ''}</span>
    </td>
    <td className="d-flex gap-1 justify-content-between">
      <BtnEditarSm onClick={handleEditar} />
      <BtnImprimirSm onClick={handleImprimir} />
      <BtnDeletarSm onClick={handleDeletar} />
    </td>
  </tr>
);