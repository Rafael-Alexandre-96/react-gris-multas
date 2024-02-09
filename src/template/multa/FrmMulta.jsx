import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import * as service from "../../service/api/multaService";
import * as enquadramentoService from "../../service/api/enquadramentoService";
import * as veiculoService from "../../service/api/veiculoService";
import * as motoristaService from "../../service/api/motoristaService";
import { DateLabel, DateTimeLabel, InputLabel, SelectLabel, TextAreaLabel, NumberLabel, DoubleLabel } from "../common/CustomInputs";
import { BtnSalvar, BtnVoltar, BtnImprimir } from "../common/CustomButtons";
import { useParams, useNavigate } from "react-router-dom";

export const FrmMulta = () => {
    const modalContext = useContext(ModalContext);
    const {
        showModalSuccess, showModalDanger
    } = modalContext;

    const navigate = useNavigate();
    const params = useParams();

    const [multa, setMulta] = useState({multiplicadorNi: 1, infrator: "MOTORISTA"});
    const [enquadramentos, setEnquadramentos] = useState([]);
    const [veiculos, setVeiculos] = useState([]);
    const [motoristas, setMotoristas] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        params.id && loadMulta(params.id);
    }, [params.id]);

    const loadData = async () => {
        let resEnquandramentos = await enquadramentoService.findAll();
        setEnquadramentos(resEnquandramentos.data);

        let resVeiculos = await veiculoService.findAll();
        setVeiculos(resVeiculos.data);

        let resMotoristas = await motoristaService.findAll();
        setMotoristas(resMotoristas.data);
    };

    const loadMulta = async (id) => {
        let resMultas = await service.findById(id);
        setMulta(resMultas.data);
    };
        
    const handleSalvar = async () => {
        try {
            let result = {};

            if (params?.id) {
                result = await service.updateMulta(multa.id, {...multa});
                setMulta(result.data);
                showModalSuccess(["Registro salvo com sucesso."]);
            } else {
                result = await service.createMulta({...multa});
                setMulta(result.data);
                showModalSuccess(["Registro salvo com sucesso."]);
                navigate(`/multa/editar/${result.data.id}`);
            }
            
        } catch (error) {
            var message = [];
            message.push(error.response.data.message);
            error.response.data.fieldErros?.forEach((fieldError) => 
                message.push(`\n ${fieldError.field}: ${fieldError.errorMsg}`)
            );
            showModalDanger(message);
        }
    };

    return(
        <div className="row g-3">
            <DateTimeLabel
                className="col-lg-3"
                name="dataInfracao"
                label="Data/Hora"
                placeholder="Data/Hora Infração"
                value={multa?.dataInfracao || ''}
                onChange={(e) => setMulta({...multa, dataInfracao: e.target.value})}
            />
            <InputLabel 
                className="col-lg-4"
                name="local"
                label="Local"
                placeholder="Local"
                value={multa?.local || ''}
                onChange={(e) => setMulta({...multa, local: e.target.value})}
            />
            <SelectLabel 
                className="col-lg-5"
                name="comboEnquadramento"
                label="Enquadramento"
                value={multa?.enquadramento?.id || 0}
                onChange={(e) => setMulta({...multa, enquadramento: { id: e.target.value }})}
            >
                <option value={0}>Selecione...</option>
                { enquadramentos && enquadramentos.map((enquadramento) => (
                    <option key={enquadramento.id} value={enquadramento.id}>{enquadramento.descricao}</option>
                ))}
            </SelectLabel>
            <SelectLabel 
                className="col-lg-2"
                name="comboVeiculo"
                label="Veículo"
                value={multa?.veiculo?.id || 0}
                onChange={(e) => setMulta({...multa, veiculo: { id: e.target.value }})}
            >
                <option value={0}>Selecione...</option>
                { veiculos && veiculos.map((veiculo) => (
                    <option key={veiculo.id} value={veiculo.id}>{veiculo.placa}</option>
                ))}
            </SelectLabel>
            <InputLabel 
                className="col-lg-2"
                name="semiReboque"
                label="Semi-Reboque"
                placeholder="Semi-Reboque"
                value={multa?.semiReboque?.id || 0}
                onChange={(e) => setMulta({...multa, semiReboque: null})}
            />
            <SelectLabel
                className="col-lg-8"
                name="comboMotorista"
                label="Motorista"
                value={multa?.motorista?.id || 0}
                onChange={(e) => setMulta({...multa, motorista: { id: e.target.value }})}
            >
                <option value={0}>Selecione...</option>
                { motoristas && motoristas.map((motorista) => (
                    <option key={motorista.id} value={motorista.id}>{motorista.nome}</option>
                ))}
            </SelectLabel>
            <SelectLabel
                className="col-lg-2"
                name="comboInfrator"
                label="Infrator"
                value={multa?.infrator || ''}
                onChange={(e) => setMulta({...multa, infrator: e.target.value })}
            >
                <option value="ANALISE">ANALISE</option>
                <option value="ARQUIVADO">ARQUIVADO</option>
                <option value="BAIXA">BAIXA</option>
                <option value="DESLIGADO">DESLIGADO</option>
                <option value="EMBARCADOR">EMBARCADOR</option>
                <option value="EMPRESA">EMPRESA</option>
                <option value="MANUTENCAO">MANUTENCAO</option>
                <option value="MOTORISTA">MOTORISTA</option>
                <option value="OPERACAO">OPERACAO</option>
                <option value="OUTROS">OUTROS</option>
                <option value="PEDESTRE">PEDESTRE</option>
                <option value="RECURSO">RECURSO</option>
            </SelectLabel>
            <InputLabel
                className="col-lg-2"
                name="numeroAit"
                label="Nº AIT"
                placeholder="Nº AIT"
                value={multa?.numeroAit || ''}
                onChange={(e) => setMulta({...multa, numeroAit: e.target.value})}
            />
            <DateLabel
                className="col-lg-2"
                name="prazoIndicacao"
                label="Prazo Indicação"
                placeholder="Prazo Indicação"
                value={multa?.prazoIndicacao || ''}
                onChange={(e) => setMulta({...multa, prazoIndicacao: e.target.value})}
            />
            <SelectLabel
                className="col-lg-2"
                id="comboIndicado"
                label="Indicado?"
                value={multa?.indicado || false}
                onChange={(e) => setMulta({...multa, indicado: e.target.value})}
            >
                <option value={false}>Não</option>
                <option value={true}>Sim</option>
            </SelectLabel>
            <SelectLabel
                className="col-lg-2"
                name="comboAssinado"
                label="Vales Assinados?"
                value={multa?.assinado || false}
                onChange={(e) => setMulta({...multa, assinado: e.target.value})}
            >
                <option value={false}>Não</option>
                <option value={true}>Sim</option>
            </SelectLabel>
            <DateLabel
                className="col-lg-2"
                name="envioPenalidade"
                label="Envio Penalidade"
                placeholder="Envio Penalidade"
                value={multa?.envioPenalidade || ''}
                onChange={(e) => setMulta({...multa, envioPenalidade: e.target.value})}
            />
            <SelectLabel
                className="col-lg-2"
                name="boletoRecebido"
                label="Boleto Recebido?"
                value={multa?.boletoRecebido || false}
                onChange={(e) => setMulta({...multa, boletoRecebido: e.target.value})}
            >
                <option value={false}>Não</option>
                <option value={true}>Sim</option>
            </SelectLabel>
            <DateLabel
                className="col-lg-2"
                name="vencimentoBoleto"
                label="Vencimento Boleto"
                placeholder="Vencimento Boleto"
                value={multa?.vencimentoBoleto || ''}
                onChange={(e) => setMulta({...multa, vencimentoBoleto: e.target.value})}
            />
            <DoubleLabel
                className="col-lg-2"
                name="valorBoleto"
                label="Valor Boleto"
                placeholder="Valor Boleto"
                value={multa?.valorBoleto || 0}
                onChange={(e) => setMulta({...multa, valorBoleto: e.target.value.replace(',', '.'), descontoBoleto: e.target.value * 0.2, valorNi: parseFloat(e.target.value) * parseFloat(multa.multiplicadorNi), descontoNi: (e.target.value * multa.multiplicadorNi * 0.2)})}
            />
            <DoubleLabel
                className="col-lg-2"
                name="descontoBoleto"
                label="Desconto Boleto"
                placeholder="Desconto Boleto"
                value={multa?.descontoBoleto || 0}
                onChange={(e) => setMulta({...multa, descontoBoleto: e.target.value.replace(',', '.')})}
            />
            <DoubleLabel
                className="col-lg-2"
                name="descontoBoleto"
                label="Vale Boleto"
                placeholder="Vale Boleto"
                value={multa?.valorBoleto - multa?.descontoBoleto || 0}
                onChange={() => {}}
            />
            <DateLabel
                className="col-lg-2"
                name="envioBoleto"
                label="Envio Boleto"
                placeholder="Envio Boleto"
                value={multa?.envioBoleto || ''}
                onChange={(e) => setMulta({...multa, envioBoleto: e.target.value})}
            />
            <SelectLabel
                className="col-lg-2"
                name="niRecebido"
                label="NI Recebido?"
                value={multa?.niRecebido || false}
                onChange={(e) => setMulta({...multa, niRecebido: e.target.value})}
            >
                <option value={false}>Não</option>
                <option value={true}>Sim</option>
            </SelectLabel>
            <DateLabel
                className="col-lg-2"
                name="vencimentoNi"
                label="Vencimento NI"
                placeholder="Vencimento NI"
                value={multa?.vencimentoNi || ''}
                onChange={(e) => setMulta({...multa, vencimentoNi: e.target.value})}
            />
            <NumberLabel
                className="col-lg-1"
                name="multiplicadorNi"
                label="Mult."
                placeholder="Mult."
                value={multa?.multiplicadorNi || 1}
                onChange={(e) => setMulta({...multa, multiplicadorNi: e.target.value, valorNi: multa.valorBoleto * e.target.value, descontoNi: multa.valorBoleto * e.target.value * 0.2 })}
                min={1}
                max={10}
            />
            <DoubleLabel
                className="col-lg-2"
                name="valorNi"
                label="Valor NI"
                placeholder="Valor NI"
                value={multa?.valorNi || 0}
                onChange={(e) => setMulta({...multa, valorNi: e.target.value, descontoNi: e.target.value * 0.2})}
            />
            <DoubleLabel
                className="col-lg-2"
                name="descontoNi"
                label="Desconto NI"
                placeholder="Desconto NI"
                value={multa?.descontoNi || 0}
                onChange={(e) => setMulta({...multa, descontoNi: e.target.value})}
            />
            <DateLabel
                className="col-lg-2"
                name="envioNi"
                label="Envio NI"
                placeholder="Envio NI"
                value={multa?.envioNi || ''}
                onChange={(e) => setMulta({...multa, envioNi: e.target.value})}
            />
            <TextAreaLabel
                className="col-lg-12"
                name="observacao"
                label="Observação"
                placeholder="Observação"
                value={multa?.observacao || ''}
                onChange={(e) => setMulta({...multa, observacao: e.target.value})}
            />

            <div class="input-group">
                <BtnSalvar onClick={handleSalvar} />
                <BtnImprimir onClick={() => {}} />
                <BtnVoltar onClick={() => navigate('/multa')} />
            </div>          
        </div>
    );
} 