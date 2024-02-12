import { Row, Col } from 'react-bootstrap';
import { BtnNovo } from '../../../components/buttons';
import { useNavigate } from 'react-router-dom';

export const NavButton = () => {
  const navigate = useNavigate();
  
  return(
    <Row>
      <Col>
        <BtnNovo onClick={() => navigate('/multa/editar')}>Novo</BtnNovo>
      </Col>
    </Row>
  );
}