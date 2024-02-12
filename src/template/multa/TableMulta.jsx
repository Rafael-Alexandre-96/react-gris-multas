import React, { useEffect, useState, useCallback } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import { useFiltroContext } from '../../context/FiltroContext/FiltroContext';
import Table from 'react-bootstrap/Table';
import * as service from '../../api/multaService';
import { RecordMulta } from './RecordMulta';
import { Headers } from '../../components/tableData/Headers';
import { Body } from '../../components/tableData/Body';
import * as apiFunctions from '../apiFunctions';

export const TableMulta = () => {
  const [, modalActions] = useModalContext();
  const [filtroState, filtroActions] = useFiltroContext();

  const [multas, setMultas] = useState([]);

  const findByFiltro = useCallback(async() => {
    apiFunctions.findBy(service.findByFiltro(filtroState.pagination.page, filtroState.sort.field, filtroState.sort.asc), setMultas)
      .then((multas) => {
        setMultas(multas);
        filtroActions.changeTotalElements(multas.totalElements);
        filtroActions.changeTotalPages(multas.totalPages);
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  }, [filtroActions, filtroState.pagination.page, filtroState.sort.asc, filtroState.sort.field, modalActions]);

  useEffect(() => {  
    findByFiltro();
  }, [findByFiltro]);

  return(
    <Table responsive striped bordered size='sm'>
      <Headers 
        isSmall={true}
        fields={[
          {desc: 'Data/Hora Infração', sort: 'dataInfracao'},
          {desc: 'Local', sort: 'local'},
          {desc: 'Infração', sort: 'enquadramento.descricao'},
          {desc: 'Infrator', sort: 'infrator'},
          {desc: 'Tração', sort: 'veiculo.placa'},
          {desc: 'Reboque', sort: 'semiReboque.placa'},
          {desc: 'Motorista', sort: 'motorista.nome'}
        ]}
      />
      <Body>
        { multas.content && multas.content.map((entity) => (
          <RecordMulta entity={entity} updateFunction={findByFiltro} key={entity.id} />
        ))}
      </Body>
    </Table>
  )
};