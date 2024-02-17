import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import { useFiltroContext } from '../../context/FiltroContext/FiltroContext';
import Table from 'react-bootstrap/Table';
import * as service from '../../api/multaService';
import { RecordMulta } from './RecordMulta';
import { Headers } from '../../components/tableData/Headers';
import { Body } from '../../components/tableData/Body';
import * as apiFunctions from '../apiFunctions';

export const TableMulta = () => {
  const params = useParams();
  const location = useLocation();
  const [, modalActions] = useModalContext();
  const [filtroState, filtroActions] = useFiltroContext();

  const [multas, setMultas] = useState([]);

  const findByFiltro = useCallback(async(field = filtroState.filtro.field, value = filtroState.filtro.value) => {
    let findFunction = () => {};
    if (params.situacao === 'aguardando-assinatura') {
      findFunction = service.findAguardandoAssinatura(field, value, filtroState.pagination.page, filtroState.sort.sort, filtroState.sort.asc);
    } else {
      findFunction = service.findByFieldPageable(field, value, filtroState.pagination.page, filtroState.sort.sort, filtroState.sort.asc);
    }

    apiFunctions.findBy(findFunction, setMultas)
      .then((multas) => {
        setMultas(multas);
        filtroActions.changeTotalElements(multas.totalElements);
        filtroActions.changeTotalPages(multas.totalPages);
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  }, [filtroActions, filtroState.filtro.field, filtroState.filtro.value, filtroState.pagination.page, filtroState.sort.asc, filtroState.sort.sort, modalActions, params.situacao]);

  useEffect(() => {
    findByFiltro(location?.state?.field, location?.state?.value);
  }, [filtroActions, findByFiltro, location.state]);

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
          {desc: 'Motorista', sort: 'motorista.nome'},
          {desc: 'Situação', sort: 'situacao'}
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