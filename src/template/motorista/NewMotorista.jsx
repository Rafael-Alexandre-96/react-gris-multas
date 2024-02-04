import React, { useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import * as service from "../../service/api/motoristaService";
import { BtnSalvarSm } from "../common/CustomButtons";
import { BdgNovo } from "../common/CustomBadges";

export const NewMotorista = ({updateFunction}) => {
    const modalContext = useContext(ModalContext);
    const {
        showModalSuccess, showModalDanger
    } = modalContext;
    const [motorista, setMotorista] = useState();

    const handleSalvar = async () => {
        try {
            await service.createMotorista({...motorista});
            setMotorista(null);
            updateFunction();
            showModalSuccess(["Registro salvo com sucesso."]);
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
        <tr>
            <td className="align-middle">
                <input
                    type="text"
                    className="form-control text-center"
                    name="nome"
                    placeholder="Nome"
                    value={motorista?.nome || ''}
                    onChange={(e) => setMotorista({...motorista, nome: e.target.value})}
                />
            </td>
            <td className="align-middle">
                <input
                    type="text"
                    className="form-control text-center"
                    name="cpf"
                    placeholder="CPF"
                    value={motorista?.cpf || ''}
                    onChange={(e) => setMotorista({...motorista, cpf: e.target.value})}
                />
            </td>
            <td className="align-middle">
                <BdgNovo />
            </td>
            <td className="align-middle text-start">
                <BtnSalvarSm onClick={handleSalvar} />
            </td>
        </tr>
    );
}