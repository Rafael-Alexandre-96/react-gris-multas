import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";
import Table from 'react-bootstrap/Table';
import * as service from "../../service/api/multaService";
import { RecordMulta } from "./RecordMulta";
import { TableHeaders } from "../common/TableHeaders";

export const TableMulta = () => {
    const modalContext = useContext(ModalContext);
    const {
        showModalDanger
    } = modalContext;

    const filtroContext = useContext(FiltroContext);
    const {
        state: { filtro, pagination, sort }, changeTotalElements, changeTotalPages
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
            <TableHeaders 
                fields={[
                    {desc: "Data/Hora Infração", sort: "dataInfracao"},
                    {desc: "Local", sort: "local"},
                    {desc: "Infração", sort: "enquadramento.descricao"},
                    {desc: "Tração", sort: "veiculo.placa"},
                    {desc: "Reboque", sort: "semiReboque.placa"},
                    {desc: "Motorista", sort: "motorista.nome"}
                ]}
            />
            <tbody className="text-center">
                { multas && multas.map((entity) => (
                    <RecordMulta entity={entity} key={entity.id} updateFunction={findByFiltro} />
                ))}
            </tbody>
        </Table>
    )
};