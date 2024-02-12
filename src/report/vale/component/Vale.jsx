import * as utils from '../../../utils/stringFormater';
import { Logo } from '../../../public/Logo';
import './styles.css';

export const Vale = ({multa, isNi = false}) => (
  <div className='vale'>
    <div className='grid-logo'>
      <Logo />
      <h4>VALE</h4>
      <div></div>
    </div>

    <div className='grid-resume'>
      <div className='highlight'>Frota</div>
      <div>{multa?.veiculo?.frota}</div>
      <div className='highlight'>Placa</div>
      <div>{multa?.veiculo?.placa}{multa?.semiReboque && "/" + multa.semiReboque.placa}</div>
      <div className='highlight'>Valor</div>
      <div>{utils.formatReal(!isNi ? multa?.valorValeBoleto : multa?.valorValeNi)}</div>
    </div>

    <div className='grid-info'>
      <div className='highlight'>Nome</div>
      <div>{multa?.motorista?.nome}</div>
      <div className='highlight'>Descricao</div>
      <div>{multa?.enquadramento?.descricao}</div>
      <div className='highlight'>Local</div>
      <div>{multa?.local}</div>
      <div className='highlight'>Data/Hora</div>
      <div>{utils.formatDateTime(multa?.dataInfracao)}</div>
      <div className='highlight'>Valor Extenso</div>
      <div>{utils.formatExtenso(!isNi ? multa?.valorValeBoleto : multa?.valorValeNi)}</div>
    </div>

    <div className='grid-pagamento'>
      <div className='highlight'>Parcela</div>
      <div className='highlight'>Vencimento</div>
      <div className='highlight'>Valor</div>
      <div>1/1</div>
      <div>{utils.formatDate(!isNi ? multa?.vencimentoBoleto : multa?.vencimentoNi)}</div>
      <div>{utils.formatReal(!isNi ? multa?.valorValeBoleto : multa?.valorValeNi)}</div>
    </div>

    <div className='grid-assinatura'>
      { isNi ? 
        <div className='highlight'>Multa de Não Indicação</div>
        :
        <div></div>
      }
      <div></div>
      <div>Assinatura</div>
      <div className='assinatura' />
    </div>
  </div>
)