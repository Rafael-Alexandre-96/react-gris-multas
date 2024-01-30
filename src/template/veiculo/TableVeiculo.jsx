import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import api from "../../service/api";
import { FiltroVeiculo } from "./FiltroVeiculo";
import { NewVeiculo } from "./NewVeiculo";
import { RecordVeiculo } from "./RecordVeiculo";
import { Pagination } from "../common/Pagination";

export const TableVeiculo = () => {
    const [veiculos, setVeiculos] = useState([]);
    const [filtro, setFiltro] = useState({value: '', showDeactive: "true"});
    const [pagination, setPagination] = useState({page: 0, totalPages: 0, totalElements: 0});
    const findByFiltro = async () => {
        await api.get(`/veiculo/filtro?placa=${filtro.value}&showDeactive=${filtro.showDeactive}&page=${pagination.page}&inPage=5`).then((response) => {setVeiculos(response.data.content); setPagination({...pagination, totalPages: response.data.totalPages, totalElements: response.data.totalElements})});
    };
    useEffect(() => {
        findByFiltro();
    }, [pagination.page, filtro]);

    const handleOnChangeFiltro = (e) => setFiltro({...filtro, value: e.target.value});
    const handleOnChangeDesativado = (e) => setFiltro({...filtro, showDeactive: e.target.value});
    const handleOnClickBuscar = () => {
        setPagination({page: 0, totalPages: 0});
        findByFiltro();
    };
    const handleOnClickLimpar = () => {
        setFiltro({value: '', showDeactive: "true"});
    };

    return(
        <>
            <FiltroVeiculo
                filtro={filtro}
                totalElements={pagination.totalElements}
                handleOnChangeFiltro={handleOnChangeFiltro}
                handleOnChangeDesativado={handleOnChangeDesativado}
                handleOnClickBuscar={handleOnClickBuscar}
                handleOnClickLimpar={handleOnClickLimpar}
            />
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
            <Pagination pagination={pagination} setPagination={setPagination}/>
        </>
    )
};