import { useEffect, useState } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import api from '../../api/api';
import { Col, Row } from 'react-bootstrap';
import DashCard from '../../components/dashCard/index';

export const Content = () => {
  const [, modalActions] = useModalContext();
  const [dashboard, setDashboard] = useState();

  useEffect(() => {
    const loadDashboard = async () => {
      await api.get('/dashboard')
        .then((response) => setDashboard(response.data))
        .catch((error) => modalActions.showModalDanger(error.message));
    };

    loadDashboard();
  }, [modalActions]);

  return(
    <>
      <Row>
        <Col>
          <DashCard title={"Aguardando Assinatura"}>
            {dashboard?.aguardandoAssinatura}
          </DashCard>
        </Col>
        <Col>
          <DashCard title={"Aguardando Boleto"}>
            {dashboard?.aguardandoBoletos}
          </DashCard>
        </Col>
        <Col>
          <DashCard title={"Enviar Financeiro"}>
            {dashboard?.aguardandoEnvio}
          </DashCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <DashCard title={"Motoristas Ativos"}>
            {dashboard?.motoristasAtivos}
          </DashCard>
        </Col>
        <Col>
          <DashCard title={"Veículos Ativos"}>
            {dashboard?.veiculosAtivos}
          </DashCard>
        </Col>
        <Col>
          <DashCard title={"Reboques Ativos"}>
            {dashboard?.reboquesAtivos}
          </DashCard>
        </Col>
      </Row>
    </>
    
  );
}