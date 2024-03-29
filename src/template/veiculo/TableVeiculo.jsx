import React, { useEffect, useState, useCallback } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import { useFiltroContext } from '../../context/FiltroContext/FiltroContext';
import Table from 'react-bootstrap/Table';
import * as service from '../../api/veiculoService';
import { NewVeiculo } from './NewVeiculo';
import { RecordVeiculo } from './RecordVeiculo';
import { Headers } from '../../components/tableData/Headers';
import { Body } from '../../components/tableData/Body';
import * as apiFunctions from '../apiFunctions';

export const TableVeiculo = () => {
  const [, modalActions] = useModalContext();
  const [filtroState, filtroActions] = useFiltroContext();

  const [veiculos, setVeiculos] = useState([]);

  const findByFiltro = useCallback(async() => {
    apiFunctions.findBy(service.findByFieldPageable(filtroState.filtro.field, filtroState.filtro.value, filtroState.filtro.showDeactive, filtroState.pagination.page, filtroState.sort.sort, filtroState.sort.asc), setVeiculos)
      .then((veiculos) => {
        setVeiculos(veiculos);
        filtroActions.changeTotalElements(veiculos.totalElements);
        filtroActions.changeTotalPages(veiculos.totalPages);
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  }, [filtroActions, filtroState.filtro.field, filtroState.filtro.showDeactive, filtroState.filtro.value, filtroState.pagination.page, filtroState.sort.asc, filtroState.sort.sort, modalActions]);

  useEffect(() => {  
    findByFiltro();
  }, [findByFiltro]);

  return(
    <Table responsive striped bordered size='sm'>
      <Headers 
        fields={[
          {desc: 'Placa', sort: 'placa'},
          {desc: 'Frota', sort: 'frota'},
          {desc: 'Tipo', sort: 'tipoRodado'},
          {desc: 'Status', sort: 'registroStatus.active'}
        ]}
      />
      <Body>
        { veiculos.content && veiculos.content.map((entity) => (
          <RecordVeiculo entity={entity} key={entity.id} />
        ))}
        <NewVeiculo updateFunction={findByFiltro} />
      </Body>
    </Table>
  )
};