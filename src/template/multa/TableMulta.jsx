import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";
import Table from 'react-bootstrap/Table';
import * as service from "../../service/api/multaService";
import { RecordMulta } from "./RecordMulta";

export const TableMulta = () => {
    const modalContext = useContext(ModalContext);
    const {
        showModalDanger
    } = modalContext;

    const filtroContext = useContext(FiltroContext);
    const {
        state: { filtro, pagination, sort }, changeTotalElements, changeTotalPages, changeSortField, toggleSortAsc
    } = filtroContext;

    const [multas, setMultas] = useState([]);

    const findByFiltro = async () => {
        try {
            let result = await service.findByFiltro(pagination.page, sort.field, sort.asc);
            setMultas(result.data.content);
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
                    <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("dataInfracao"); toggleSortAsc()}}>Data Infração</th>
                    <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("local"); toggleSortAsc()}}>Local</th>
                    <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("enquadramento.descricao"); toggleSortAsc()}}>Infração</th>
                    <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("veiculo.placa"); toggleSortAsc()}}>Tração</th>
                    <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("semiReboque.placa"); toggleSortAsc()}}>Reboque</th>
                    <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("motorista.nome"); toggleSortAsc()}}>Motorista</th>
                    <th className="bg-light">Ações</th>
                </tr>
            </thead>
            <tbody className="text-center">
                { multas && multas.map((entity) => (
                    <RecordMulta entity={entity} key={entity.id} />
                ))}
            </tbody>
        </Table>
    )
};