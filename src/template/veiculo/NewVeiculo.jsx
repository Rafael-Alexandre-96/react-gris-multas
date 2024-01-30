import React, { useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import api from "../../service/api";
import { BtnSalvarSm } from "../common/CustomButtons";
import { BdgNovo } from "../common/CustomBadges";
import { ACTIONS } from "../../context/ModalContext/modalAction";

export const NewVeiculo = ({updateFunction}) => {
    const modalContext = useContext(ModalContext);
    const [veiculo, setVeiculo] = useState();

    const handleSalvar = async () => {
        await api.post("/veiculo", {...veiculo})
            .then(() => {
                setVeiculo(null);
                updateFunction();
                showModalSuccess();
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

    const showModalSuccess = () => {
        modalContext.dispatch({ type: ACTIONS.CHANGE_TITLE, payload: "Registro salvo"});
        modalContext.dispatch({ type: ACTIONS.CHANGE_BODY, payload: "Registro salvo com sucesso"});
        modalContext.dispatch({ type: ACTIONS.SUCCESS });
        modalContext.dispatch({ type: ACTIONS.SHOW });
    }

    const showModalDanger = (body) => {
        modalContext.dispatch({ type: ACTIONS.CHANGE_TITLE, payload: "Erro"});
        modalContext.dispatch({ type: ACTIONS.CHANGE_BODY, payload: body});
        modalContext.dispatch({ type: ACTIONS.DANGER });
        modalContext.dispatch({ type: ACTIONS.SHOW });
    }

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