import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";
import Table from 'react-bootstrap/Table';
import api from "../../service/api";
import { FiltroVeiculo } from "./FiltroVeiculo";
import { NewVeiculo } from "./NewVeiculo";
import { RecordVeiculo } from "./RecordVeiculo";
import { Pagination } from "../common/Pagination";

export const TableVeiculo = () => {
    const modalContext = useContext(ModalContext);
    const {
        showModalDanger
    } = modalContext;

    const filtroContext = useContext(FiltroContext);
    const {
        state: { filtro, pagination, sort }, changeTotalElements, changeTotalPages, changeSortField, toggleSortAsc
    } = filtroContext;

    const [veiculos, setVeiculos] = useState([]);
    const findByFiltro = async () => {
        await api.get(`/veiculo/filtro?placa=${filtro.value}&showDeactive=${filtro.showDeactive}&page=${pagination.page}&inPage=10&sort=${sort.field}&asc=${sort.asc}`)
            .then((response) => {
                setVeiculos(response.data.content);
                changeTotalElements(response.data.totalElements);
                changeTotalPages(response.data.totalPages);
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
    useEffect(() => {   
        findByFiltro();
    }, [filtro, pagination.page, sort]);

    return(
        <>
            <FiltroVeiculo />
            <Table responsive striped bordered size="sm">
                <thead className="text-center">
                    <tr>
                        <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("placa"); toggleSortAsc()}}>Placa</th>
                        <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("frota"); toggleSortAsc()}}>Frota</th>
                        <th className="bg-light" style={{ cursor: "pointer" }} onClick={() => {changeSortField("registroStatus.active"); toggleSortAsc()}}>Status</th>
                        <th className="bg-light">Ações</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    { veiculos && veiculos.map((entity) => (
                        <RecordVeiculo entity={entity} key={entity.id} />
                    ))}
                    <NewVeiculo updateFunction={findByFiltro} />
                </tbody>
            </Table>
            <Pagination />
        </>
    )
};