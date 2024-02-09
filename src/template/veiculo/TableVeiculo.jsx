import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";
import Table from 'react-bootstrap/Table';
import * as service from "../../service/api/veiculoService";
import { NewVeiculo } from "./NewVeiculo";
import { RecordVeiculo } from "./RecordVeiculo";
import { TableHeaders } from "../common/TableHeaders";

export const TableVeiculo = () => {
    const modalContext = useContext(ModalContext);
    const {
        showModalDanger
    } = modalContext;

    const filtroContext = useContext(FiltroContext);
    const {
        state: { filtro, pagination, sort }, changeTotalElements, changeTotalPages
    } = filtroContext;

    const [veiculos, setVeiculos] = useState([]);

    const findByFiltro = async () => {
        try {
            let result = await service.findByFiltro(filtro.value, filtro.showDeactive, pagination.page, sort.field, sort.asc);
            setVeiculos(result.data.content);
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
            <TableHeaders 
                fields={[
                    {desc: "Placa", sort: "placa"},
                    {desc: "Frota", sort: "frota"},
                    {desc: "Status", sort: "registroStatus.active"}
                ]}
            />
            <tbody className="text-center">
                { veiculos && veiculos.map((entity) => (
                    <RecordVeiculo entity={entity} key={entity.id} />
                ))}
                <NewVeiculo updateFunction={findByFiltro} />
            </tbody>
        </Table>
    )
};