import React, { useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import * as service from "../../service/api/veiculoService";
import { BtnSalvarSm } from "../common/CustomButtons";
import { BdgNovo } from "../common/CustomBadges";

export const NewVeiculo = ({updateFunction}) => {
    const modalContext = useContext(ModalContext);
    const {
        showModalSuccess, showModalDanger
    } = modalContext;
    const [veiculo, setVeiculo] = useState();

    const handleSalvar = async () => {
        try {
            await service.createVeiculo({...veiculo});
            setVeiculo(null);
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
                    name="placa"
                    placeholder="Placa"
                    value={veiculo?.placa || ''}
                    onChange={(e) => setVeiculo({...veiculo, placa: e.target.value})}
                />
            </td>
            <td className="align-middle">
                <input
                    type="text"
                    className="form-control text-center"
                    name="frota"
                    placeholder="Frota"
                    value={veiculo?.frota || ''}
                    onChange={(e) => setVeiculo({...veiculo, frota: e.target.value})}
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