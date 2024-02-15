import React, { useEffect, useState, useCallback } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import { useFiltroContext } from '../../context/FiltroContext/FiltroContext';
import Table from 'react-bootstrap/Table';
import * as service from '../../api/motoristaService';
import { NewMotorista } from './NewMotorista';
import { RecordMotorista } from './RecordMotorista';
import { Headers } from '../../components/tableData/Headers';
import { Body } from '../../components/tableData/Body';
import * as apiFunctions from '../apiFunctions';

export const TableMotorista = () => {
  const [, modalActions] = useModalContext();
  const [filtroState, filtroActions] = useFiltroContext();

  const [motoristas, setMotoristas] = useState([]);

  const findByFiltro = useCallback(async() => {
    apiFunctions.findBy(service.findByFieldPageable(filtroState.filtro.field, filtroState.filtro.value, filtroState.filtro.showDeactive, filtroState.pagination.page, filtroState.sort.sort, filtroState.sort.asc), setMotoristas)
      .then((motoristas) => {
        setMotoristas(motoristas);
        filtroActions.changeTotalElements(motoristas.totalElements);
        filtroActions.changeTotalPages(motoristas.totalPages);
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
          {desc: 'Nome', sort: 'nome'},
          {desc: 'CPF', sort: 'cpf'},
          {desc: 'Status', sort: 'registroStatus.active'}
        ]}
      />
      <Body>
        { motoristas.content && motoristas.content.map((entity) => (
          <RecordMotorista entity={entity} key={entity.id} />
        ))}
        <NewMotorista updateFunction={findByFiltro} />
      </Body>
    </Table>
  )
};