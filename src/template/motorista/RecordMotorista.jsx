import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import * as service from "../../service/api/motoristaService";
import { BtnSalvarSm, BtnEditarSm, BtnDesativarSm, BtnAtivarSm } from "../common/CustomButtons";
import { BdgAtivo, BdgInativo } from "../common/CustomBadges";

export const RecordMotorista = ({entity}, key) => {
    const modalContext = useContext(ModalContext);
    const {
        showModalSuccess, showModalDanger
    } = modalContext;

    const [status, setStatus] = useState();
    const [motorista, setMotorista] = useState();

    useEffect(() => {
        setStatus(true);
        setMotorista(entity);
    }, [entity]);

    const handleSalvar = async () => {
        try {
            let result = await service.updateMotorista(motorista.id, {...motorista});
            setMotorista(result.data);
            showModalSuccess(["Registro salvo com sucesso."]);
            setStatus(true);
        } catch (error) {
            var message = [];
            message.push(error.response.data.message);
            error.response.data.fieldErros?.forEach((fieldError) => 
                message.push(`\n ${fieldError.field}: ${fieldError.errorMsg}`)
            );
            showModalDanger(message);
        }
    };

    const handleAtivar = async () => {
        let result = await service.activeMotorista(motorista.id);
        setMotorista(result.data);
    };

    const handleDesativar = async () => {
        let result = await service.deactiveMotorista(motorista.id);
        setMotorista(result.data);
    };

    return(
        <tr key={key}>
            <td className="align-middle">
                { !status ? 
                    <input
                        type="text"
                        className="form-control text-center"
                        name="nome"
                        placeholder="Nome"
                        value={motorista?.nome || ''}
                        disabled={status}
                        onChange={(e) => setMotorista({...motorista, nome: e.target.value})}
                    />
                    :
                    <span>{motorista?.nome || ''}</span>
                }
            </td>
            <td className="align-middle">
                { !status ? 
                    <input
                        type="text"
                        className="form-control text-center"
                        name="cpf"
                        placeholder="CPF"
                        value={motorista?.cpf || ''}
                        disabled={status}
                        onChange={(e) => setMotorista({...motorista, cpf: e.target.value})}
                    />
                    :
                    <span>{motorista?.cpf || ''}</span>
                }
            </td>
            <td className="align-middle">
                { motorista?.registroStatus.active ?
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
                { motorista?.registroStatus.active ?
                    <BtnDesativarSm onClick={handleDesativar} />
                    :
                    <BtnAtivarSm onClick={handleAtivar} />
                }
            </td>
        </tr>
    );
}