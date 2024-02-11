import React, { useEffect, useState, useCallback } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import { useFiltroContext } from '../../context/FiltroContext/FiltroContext';
import Table from 'react-bootstrap/Table';
import * as service from '../../api/enquadramentoService';
import { NewEnquadramento } from './NewEnquadramento';
import { RecordEnquadramento } from './RecordEnquadramento';
import { Headers } from '../../components/tableData/Headers';
import { Body } from '../../components/tableData/Body';
import * as apiFunctions from '../apiFunctions';

export const TableEnquadramento = () => {
  const [, modalActions] = useModalContext();
  const [filtroState, filtroActions] = useFiltroContext();

  const [enquadramentos, setEnquadramentos] = useState([]);

  const findByFiltro = useCallback(async() => {
    apiFunctions.findBy(service.findByFiltro(filtroState.filtro.value, filtroState.pagination.page, filtroState.sort.field, filtroState.sort.asc))
      .then((enquadramentos) => {
        setEnquadramentos(enquadramentos);
        filtroActions.changeTotalElements(enquadramentos.totalElements);
        filtroActions.changeTotalPages(enquadramentos.totalPages);
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  }, [filtroActions, filtroState.filtro.value, filtroState.pagination.page, filtroState.sort.asc, filtroState.sort.field, modalActions]);

  useEffect(() => {  
    findByFiltro();
  }, [findByFiltro]);

  return(
    <Table responsive striped bordered size='sm'>
      <Headers 
        fields={[
          {desc: 'Enquadramento', sort: 'numeroEnquadramento'},
          {desc: 'Descrição', sort: 'descricao'},
          {desc: 'Base Legal', sort: 'baseLegal'},
          {desc: 'Infrator', sort: 'infrator'},
          {desc: 'Pontos', sort: 'pontos'},
          {desc: 'Valor', sort: 'valor'}
        ]}
      />
      <Body>
        { enquadramentos.content && enquadramentos.content.map((entity) => (
          <RecordEnquadramento entity={entity} updateFunction={findByFiltro} key={entity.id} />
        ))}
        <NewEnquadramento updateFunction={findByFiltro} />
      </Body>
    </Table>
  )
};