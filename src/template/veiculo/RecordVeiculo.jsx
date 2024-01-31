import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import api from "../../service/api";
import { BtnSalvarSm, BtnEditarSm, BtnDesativarSm, BtnAtivarSm } from "../common/CustomButtons";
import { BdgAtivo, BdgInativo } from "../common/CustomBadges";

export const RecordVeiculo = ({entity}, key) => {
    const modalContext = useContext(ModalContext);
    const {
        showModalSuccess, showModalDanger
    } = modalContext;

    const [status, setStatus] = useState();
    const [veiculo, setVeiculo] = useState();

    useEffect(() => {
        setStatus(true);
        setVeiculo(entity);
    }, [entity]);

    const handleSalvar = async () => {
        await api.put(`/veiculo/${veiculo.id}`, {...veiculo})
            .then(() => {
                api.get(`/veiculo/${veiculo.id}`).then((response) => {setVeiculo(response.data)});
                showModalSuccess("Registro salvo com sucesso.");
                setStatus(true);
            })
            .catch(
                (error) => {
                    var message = error.response.data.message;
                    error.response.data.fieldErros?.forEach((fieldError) => 
                        message += `\n ${fieldError.field}: ${fieldError.errorMsg}`
                    );
                    showModalDanger(message);
                }
            );
    };

    const handleAtivar = async () => {
        await api.patch(`/veiculo/${veiculo.id}/active`).then(() => {
            api.get(`/veiculo/${veiculo.id}`).then((response) => {setVeiculo(response.data)});
        });
    }

    const handleDesativar = async () => {
        await api.patch(`/veiculo/${veiculo.id}/deactive`).then(() => {
            api.get(`/veiculo/${veiculo.id}`).then((response) => {setVeiculo(response.data)});
        });
    }
    
    return(
        <tr key={key}>
            <td className="align-middle">
                { !status ? 
                    <input
                        type="text"
                        className="form-control text-center"
                        name="placa"
                        placeholder="Placa"
                        value={veiculo?.placa || ''}
                        disabled={status}
                        onChange={(e) => setVeiculo({...veiculo, placa: e.target.value})}
                    />
                    :
                    <span>{veiculo?.placa || ''}</span>
                }
            </td>
            <td className="align-middle">
                { !status ? 
                    <input
                        type="text"
                        className="form-control text-center"
                        name="frota"
                        placeholder="Frota"
                        value={veiculo?.frota || ''}
                        disabled={status}
                        onChange={(e) => setVeiculo({...veiculo, frota: e.target.value})}
                    />
                    :
                    <span>{veiculo?.frota || ''}</span>
                }
            </td>
            <td className="align-middle">
                { veiculo?.registroStatus.active ?
                    <BdgAtivo />
                    :
                    <BdgInativo />
                }
            </td>
            <td className="d-flex gap-1 justify-content-between">
                { status ? 
                    <BtnEditarSm onClick={() => setStatus(false)} />
                    :
                    <BtnSalvarSm onClick={handleSalvar} />
                }
                { veiculo?.registroStatus.active ?
                    <BtnDesativarSm onClick={handleDesativar} />
                    :
                    <BtnAtivarSm onClick={handleAtivar} />
                }
            </td>
        </tr>
    );
}