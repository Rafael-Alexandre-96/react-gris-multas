import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import * as service from "../../service/api/multaService";
import { BtnEditarSm, BtnDeletarSm } from "../common/CustomButtons";
import { redirect } from "react-router-dom";

export const RecordMulta = ({entity}, key) => {
    const modalContext = useContext(ModalContext);
    const {
        showModalDanger
    } = modalContext;
    const [multa, setMulta] = useState();

    useEffect(() => {
        setMulta(entity);
    }, [entity]);

    const handleDeletar = async () => {
        //let result = await service.deleteMulta(multa.id);
        //setMulta(result.data);
        showModalDanger(["Deseja deletar?"]);
    };

    return(
        <tr key={key}>
            <td className="align-middle">
                <span>{multa?.dataInfracao || ''}</span>
            </td>
            <td className="align-middle">
                <span>{multa?.local || ''}</span>
            </td>
            <td className="align-middle">
                <span>{multa?.enquadramento?.descricao || ''}</span>
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
                <BtnEditarSm onClick={() => {redirect(`/multa/editar`)}} />
                <BtnDeletarSm onClick={handleDeletar} />
            </td>
        </tr>
    );
}