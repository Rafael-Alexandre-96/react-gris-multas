import * as utils from '../../../utils/stringFormater';
import { Logo } from '../../../public/Logo';
import { empresa } from '../../../data/empresa';
import './styles.css';

export const Notificacao = ({multa}) => (
  <div className='notificacao'>
    <Logo width={512} />
    <h3>NOTIFICAÇÃO DE MULTA DE TRÂNSITO</h3>

    <div className='grid-data'>
      <div>Notificamos que o Sr:</div>
      <div>{multa?.motorista?.nome}</div>
      <div>CPF:</div>
      <div>{multa?.motorista?.cpf}</div>
    </div>

    <div>Está sendo comunicado sobre a infração de trânsito ocorrida na seguinte data:</div>

    <div className='grid-data'>
      <div>Placa:</div>
      <div>{multa?.veiculo?.placa}{multa?.semiReboque && "/" + multa.semiReboque.placa}</div>
      <div>Data/Hora:</div>
      <div>{utils.formatDateTime(multa?.dataInfracao)}</div>
      <div>Enquadramento:</div>
      <div>{`${multa?.enquadramento?.numeroEnquadramento} - ${multa?.enquadramento?.descricao}`}</div>
    </div>

    <div>Ficam abaixo a critério do colaborador em optar por indicar ou não o condutor para as devidas providências junto ao Órgão Competente:</div>

    <div className='grid-indicacao'>
      <div>Opto pela Indicação</div>
      <div />
      <div>Não opto pela Indicação</div>
    </div>

    <div>Ressaltamos que a não indicação do condutor, acarretará a cobrança do valor multiplicado do órgão de trânsito para com esta empresa, estando V. Sa ciente conforme acima assinado.</div>
  
    <div className='text-small'>
      <p>{empresa.endereco.logradouro} - {empresa.endereco.bairro}, {empresa.endereco.cidade}</p>
      <p>Telefone: {empresa.contato.fone} - E-mail: {empresa.contato.email}</p>
    </div>
  </div>
)