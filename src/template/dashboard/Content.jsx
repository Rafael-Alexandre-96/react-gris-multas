import { useEffect, useState } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import api from '../../api/api';
import * as multaService from '../../api/multaService';
import { Col, Row } from 'react-bootstrap';
import DashCard from '../../components/dashCard/index';
import TableSimple from '../../components/tableSimple/index'
import { useNavigate } from 'react-router-dom';

export const Content = () => {
  const navigate = useNavigate();
  const [, modalActions] = useModalContext();
  const [dashboard, setDashboard] = useState();
  const [aguardandoAssinatura, setAguardandoAssinatura] = useState([]);

  useEffect(() => {
    const loadDashboard = async () => {
      await api.get('/dashboard')
        .then((response) => setDashboard(response.data))
        .catch((error) => modalActions.showModalDanger(error.message));

      await multaService.motoristasAguardandoAssinatura()
        .then((response) => setAguardandoAssinatura(response.data))
        .catch((error) => modalActions.showModalDanger(error.message));
    };
    loadDashboard();
  }, [modalActions]);

  return(
    <>
      <Row>
        <Col>
          <DashCard title={'Aguardando Assinatura'}>
            {dashboard?.aguardandoAssinatura}
          </DashCard>
        </Col>
        <Col>
          <DashCard title={'Aguardando Boleto'}>
            {dashboard?.aguardandoBoletos}
          </DashCard>
        </Col>
        <Col>
          <DashCard title={'Enviar Financeiro'}>
            {dashboard?.aguardandoEnvio}
          </DashCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <DashCard title={'Motoristas Ativos'}>
            {dashboard?.motoristasAtivos}
          </DashCard>
        </Col>
        <Col>
          <DashCard title={'Veículos Ativos'}>
            {dashboard?.veiculosAtivos}
          </DashCard>
        </Col>
        <Col>
          <DashCard title={'Reboques Ativos'}>
            {dashboard?.reboquesAtivos}
          </DashCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <DashCard title={'Para Assinar'}>
            <TableSimple
              headers={['Motorista', 'Quantidade']}
              style={{fontSize: "medium"}}
            >
              {aguardandoAssinatura && aguardandoAssinatura?.map(entity => entity?.id ? (
                  <tr key={entity?.id?.id} style={{cursor: "pointer"}}>
                    <td onClick={() => navigate('/multa/aguardando-assinatura', { state: { field: 'motorista.nome', value: entity?.id?.nome }})}>{entity?.id?.nome}</td>
                    <td>{entity?.total}</td>
                  </tr>
                ) : (
                  <tr key={0} style={{cursor: "pointer"}}>
                    <td>SEM IDENTIFICAÇÃO</td>
                    <td>{entity?.total}</td>
                  </tr>
                ))}
            </TableSimple>
          </DashCard>
        </Col>
        <Col>
        </Col>
      </Row>
    </>
    
  );
}