import React, { useEffect, useState, useContext, useCallback } from "react";
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
        state: { filtro, pagination }, changeTotalElements, changeTotalPages
    } = filtroContext;

    const [veiculos, setVeiculos] = useState([]);
    const findByFiltro = async () => {
        await api.get(`/veiculo/filtro?placa=${filtro.value}&showDeactive=${filtro.showDeactive}&page=${pagination.page}&inPage=10`)
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
    }, [filtro.value, pagination.page]);

    return(
        <>
            <FiltroVeiculo />
            <Table responsive striped bordered size="sm">
                <thead className="text-center">
                    <tr>
                        <th className="bg-light">Placa</th>
                        <th className="bg-light">Frota</th>
                        <th className="bg-light">Status</th>
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