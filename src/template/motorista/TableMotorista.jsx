import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";
import Table from 'react-bootstrap/Table';
import * as service from "../../service/api/motoristaService";
import { NewMotorista } from "./NewMotorista";
import { RecordMotorista } from "./RecordMotorista";

export const TableMotorista = () => {
    const modalContext = useContext(ModalContext);
    const {
        showModalDanger
    } = modalContext;

    const filtroContext = useContext(FiltroContext);
    const {
        state: { filtro, pagination, sort }, changeTotalElements, changeTotalPages, changeSortField, toggleSortAsc
    } = filtroContext;

    const [motoristas, setMotoristas] = useState([]);

    const findByFiltro = async () => {
        try {
            let result = await service.findByFiltro(filtro.value, filtro.showDeactive, pagination.page, sort.field, sort.asc);
            setMotoristas(result.data.content);
            changeTotalElements(result.data.totalElements);
            changeTotalPages(result.data.totalPages);
        } catch (error) {
            var message = [];
            message.push(error.response.data.message);
            showModalDanger(message);
        }
    };

    useEffect(() => {   
        findByFiltro();
    }, [pagination.page, sort, filtro]);

    return(
        <Table responsive striped bordered size="sm">
            <thead className="text-center">
                <tr>
                    <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("nome"); toggleSortAsc()}}>Placa</th>
                    <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("cpf"); toggleSortAsc()}}>CPF</th>
                    <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("registroStatus.active"); toggleSortAsc()}}>Status</th>
                    <th className="bg-light">Ações</th>
                </tr>
            </thead>
            <tbody className="text-center">
                { motoristas && motoristas.map((entity) => (
                    <RecordMotorista entity={entity} key={entity.id} />
                ))}
                <NewMotorista updateFunction={findByFiltro} />
            </tbody>
        </Table>
    )
};