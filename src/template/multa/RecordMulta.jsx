import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import * as service from "../../service/api/multaService";
import { BtnEditarSm, BtnDeletarSm, BtnImprimirSm } from "../common/CustomButtons";
import { useNavigate } from "react-router-dom";
import * as utils from '../../service/utils/stringFormater';

export const RecordMulta = ({entity, updateFunction}, key) => {
    const modalContext = useContext(ModalContext);
    const {
        showModalQuestion, showModalDanger
    } = modalContext;

    const navigate = useNavigate();

    const [multa, setMulta] = useState();

    useEffect(() => {
        setMulta(entity);
    }, [entity]);

    const handleDeletar = () => {
        showModalQuestion(["Deseja deletar?"], deleteMulta, () => {});
    };

    const deleteMulta = async () => {
        try {
            await service.deleteMulta(multa.id);
            updateFunction();
        } catch (error) {
            var message = [];
            message.push(error.response.data.message);
            showModalDanger(message);
        }
    };

    return(
        <tr key={key} style={{ fontSize: "80%"}}>
            <td className="align-middle">
                <span>{utils.formatDateTime(multa?.dataInfracao) || ''}</span>
            </td>
            <td className="align-middle">
                <span>{utils.limitString(multa?.local, 25) || ''}</span>
            </td>
            <td className="align-middle">
                <span>{utils.limitString(multa?.enquadramento?.descricao, 25) || ''}</span>
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
            <td className="d-flex gap-1 justify-content-between">
                <BtnEditarSm onClick={() => navigate(`/multa/editar/${multa.id}`)} />
                <BtnImprimirSm onClick={() => window.open(`/multa/imprimir/${multa.id}`, '_blank')} />
                <BtnDeletarSm onClick={handleDeletar} />
            </td>
        </tr>
    );
}