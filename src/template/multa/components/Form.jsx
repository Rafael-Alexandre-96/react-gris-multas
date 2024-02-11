import { DateLabel, DateTimeLabel, InputLabel, SelectLabel, SelectInfratorLabel, TextAreaLabel, NumberLabel, DoubleLabel } from '../../../components/inputs';
import { BtnSalvar, BtnVoltar, BtnImprimir } from '../../../components/buttons';

export const Form = ({multa, setMulta, enquadramentos, veiculos, motoristas, handleSalvar, handleImprimir, handleVoltar}) => {

  const handleOnChangeEnquadramento = (e) => {
    setMulta({ ...multa, enquadramento: { id: e.target.value } });
    enquadramentos.forEach((enquadramento) => {
      if (enquadramento.id === e.target.value) {
        changeValorBoleto(enquadramento.valor);
      }
    });
  };

  const changeValorBoleto = (valor) => {
    setMulta({
      ...multa,
      valorBoleto: valor,
      descontoBoleto: (valor * 0.2).toFixed(2),
      valorNi: valor * multa.multiplicadorNi,
      descontoNi: (valor * multa.multiplicadorNi * 0.2).toFixed(2)
    });
  };

  const changeMultiplicador = (multiplicador) => {
    setMulta({
      ...multa,
      multiplicadorNi: multiplicador,
      valorNi: multa.valorBoleto * multiplicador,
      descontoNi: (multa.valorBoleto * multiplicador * 0.2).toFixed(2)
    });
  };

  const changeValorNi = (valor) => {
    setMulta({
      ...multa,
      valorNi: valor,
      descontoNi: (valor * 0.2).toFixed(2)
    });
  };

  return(
    <div className='row g-3'>
      <DateTimeLabel
        className='col-lg-3'
        name='dataInfracao'
        label='Data/Hora'
        placeholder='Data/Hora Infração'
        value={multa?.dataInfracao || ''}
        onChange={(e) => setMulta({ ...multa, dataInfracao: e.target.value })}
      />
      <InputLabel
        className='col-lg-4'
        name='local'
        label='Local'
        placeholder='Local'
        value={multa?.local || ''}
        onChange={(e) => setMulta({ ...multa, local: e.target.value })}
      />
      <SelectLabel
        className='col-lg-5'
        name='comboEnquadramento'
        label='Enquadramento'
        value={multa?.enquadramento?.id || 0}
        onChange={handleOnChangeEnquadramento}
      >
        <option value={0}>Selecione...</option>
        {enquadramentos && enquadramentos.map((enquadramento) => (
          <option key={enquadramento.id} value={enquadramento.id}>{enquadramento.descricao}</option>
        ))}
      </SelectLabel>
      <SelectLabel
        className='col-lg-2'
        name='comboVeiculo'
        label='Veículo'
        value={multa?.veiculo?.id || 0}
        onChange={(e) => setMulta({ ...multa, veiculo: { id: e.target.value } })}
      >
        <option value={0}>Selecione...</option>
        {veiculos && veiculos.map((veiculo) => (
          <option key={veiculo.id} value={veiculo.id}>{veiculo.placa}</option>
        ))}
      </SelectLabel>
      <InputLabel
        className='col-lg-2'
        name='semiReboque'
        label='Semi-Reboque'
        placeholder='Semi-Reboque'
        value={multa?.semiReboque?.id || 0}
        onChange={(e) => setMulta({ ...multa, semiReboque: null })}
      />
      <SelectLabel
        className='col-lg-8'
        name='comboMotorista'
        label='Motorista'
        value={multa?.motorista?.id || 0}
        onChange={(e) => setMulta({ ...multa, motorista: { id: e.target.value } })}
      >
        <option value={0}>Selecione...</option>
        {motoristas && motoristas.map((motorista) => (
          <option key={motorista.id} value={motorista.id}>{motorista.nome}</option>
        ))}
      </SelectLabel>
      <SelectInfratorLabel
        className='col-lg-2'
        name='comboInfrator'
        label='Infrator'
        value={multa?.infrator || ''}
        onChange={(e) => setMulta({ ...multa, infrator: e.target.value })}
      />
      <InputLabel
        className='col-lg-2'
        name='numeroAit'
        label='Nº AIT'
        placeholder='Nº AIT'
        value={multa?.numeroAit || ''}
        onChange={(e) => setMulta({ ...multa, numeroAit: e.target.value })}
      />
      <DateLabel
        className='col-lg-2'
        name='prazoIndicacao'
        label='Prazo Indicação'
        placeholder='Prazo Indicação'
        value={multa?.prazoIndicacao || ''}
        onChange={(e) => setMulta({ ...multa, prazoIndicacao: e.target.value })}
      />
      <SelectLabel
        className='col-lg-2'
        id='comboIndicado'
        label='Indicado?'
        value={multa?.indicado || false}
        onChange={(e) => setMulta({ ...multa, indicado: e.target.value })}
      >
        <option value={false}>Não</option>
        <option value={true}>Sim</option>
      </SelectLabel>
      <SelectLabel
        className='col-lg-2'
        name='comboAssinado'
        label='Vales Assinados?'
        value={multa?.assinado || false}
        onChange={(e) => setMulta({ ...multa, assinado: e.target.value })}
      >
        <option value={false}>Não</option>
        <option value={true}>Sim</option>
      </SelectLabel>
      <DateLabel
        className='col-lg-2'
        name='envioPenalidade'
        label='Envio Penalidade'
        placeholder='Envio Penalidade'
        value={multa?.envioPenalidade || ''}
        onChange={(e) => setMulta({ ...multa, envioPenalidade: e.target.value })}
      />
      <SelectLabel
        className='col-lg-2'
        name='boletoRecebido'
        label='Boleto Recebido?'
        value={multa?.boletoRecebido || false}
        onChange={(e) => setMulta({ ...multa, boletoRecebido: e.target.value })}
      >
        <option value={false}>Não</option>
        <option value={true}>Sim</option>
      </SelectLabel>
      <DateLabel
        className='col-lg-2'
        name='vencimentoBoleto'
        label='Vencimento Boleto'
        placeholder='Vencimento Boleto'
        value={multa?.vencimentoBoleto || ''}
        onChange={(e) => setMulta({ ...multa, vencimentoBoleto: e.target.value })}
      />
      <DoubleLabel
        className='col-lg-2'
        name='valorBoleto'
        label='Valor Boleto'
        placeholder='Valor Boleto'
        value={multa?.valorBoleto || ''}
        onChange={(e) => changeValorBoleto(e.target.value)}
      />
      <DoubleLabel
        className='col-lg-2'
        name='descontoBoleto'
        label='Desconto Boleto'
        placeholder='Desconto Boleto'
        value={multa?.descontoBoleto || ''}
        onChange={(e) => setMulta({ ...multa, descontoBoleto: e.target.value })}
      />
      <DoubleLabel
        className='col-lg-2'
        name='valeBoleto'
        label='Vale Boleto'
        placeholder='Vale Boleto'
        value={multa?.valorBoleto - multa?.descontoBoleto || ''}
        onChange={() => { }}
      />
      <DateLabel
        className='col-lg-2'
        name='envioBoleto'
        label='Envio Boleto'
        placeholder='Envio Boleto'
        value={multa?.envioBoleto || ''}
        onChange={(e) => setMulta({ ...multa, envioBoleto: e.target.value })}
      />
      <SelectLabel
        className='col-lg-2'
        name='niRecebido'
        label='NI Recebido?'
        value={multa?.niRecebido || false}
        onChange={(e) => setMulta({ ...multa, niRecebido: e.target.value })}
      >
        <option value={false}>Não</option>
        <option value={true}>Sim</option>
      </SelectLabel>
      <DateLabel
        className='col-lg-2'
        name='vencimentoNi'
        label='Vencimento NI'
        placeholder='Vencimento NI'
        value={multa?.vencimentoNi || ''}
        onChange={(e) => setMulta({ ...multa, vencimentoNi: e.target.value })}
      />
      <NumberLabel
        className='col-lg-1'
        name='multiplicadorNi'
        label='Mult.'
        placeholder='Mult.'
        value={multa?.multiplicadorNi || 1}
        onChange={(e) => changeMultiplicador(e.target.value)}
        min={1}
        max={10}
      />
      <DoubleLabel
        className='col-lg-2'
        name='valorNi'
        label='Valor NI'
        placeholder='Valor NI'
        value={multa?.valorNi || ''}
        onChange={(e) => changeValorNi(e.target.value)}
      />
      <DoubleLabel
        className='col-lg-2'
        name='descontoNi'
        label='Desconto NI'
        placeholder='Desconto NI'
        value={multa?.descontoNi || ''}
        onChange={(e) => setMulta({ ...multa, descontoNi: e.target.value })}
      />
      <DateLabel
        className='col-lg-2'
        name='envioNi'
        label='Envio NI'
        placeholder='Envio NI'
        value={multa?.envioNi || ''}
        onChange={(e) => setMulta({ ...multa, envioNi: e.target.value })}
      />
      <TextAreaLabel
        className='col-lg-12'
        name='observacao'
        label='Observação'
        placeholder='Observação'
        value={multa?.observacao || ''}
        onChange={(e) => setMulta({ ...multa, observacao: e.target.value })}
      />
      <div className='input-group'>
        <BtnSalvar onClick={handleSalvar} />
        <BtnImprimir onClick={handleImprimir} />
        <BtnVoltar onClick={handleVoltar} />
      </div>
    </div>
  );
}