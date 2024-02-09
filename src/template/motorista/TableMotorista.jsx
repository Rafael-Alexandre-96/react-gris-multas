import React, { useEffect, useState, useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";
import Table from 'react-bootstrap/Table';
import * as service from "../../service/api/motoristaService";
import { NewMotorista } from "./NewMotorista";
import { RecordMotorista } from "./RecordMotorista";
import { TableHeaders } from "../common/TableHeaders";

export const TableMotorista = () => {
    const modalContext = useContext(ModalContext);
    const {
        showModalDanger
    } = modalContext;

    const filtroContext = useContext(FiltroContext);
    const {
        state: { filtro, pagination, sort }, changeTotalElements, changeTotalPages
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
            <TableHeaders 
                fields={[
                    {desc: "Nome", sort: "nome"},
                    {desc: "CPF", sort: "cpf"},
                    {desc: "Status", sort: "registroStatus.active"}
                ]}
            />
            <tbody className="text-center">
                { motoristas && motoristas.map((entity) => (
                    <RecordMotorista entity={entity} key={entity.id} />
                ))}
                <NewMotorista updateFunction={findByFiltro} />
            </tbody>
        </Table>
    )
};