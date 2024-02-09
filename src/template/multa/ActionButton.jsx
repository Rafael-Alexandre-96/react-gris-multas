import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { BtnNovo } from "../common/CustomButtons";

export const ActionButton = () => {
    const navigate = useNavigate();

    return (
        <Row>
            <Col>
                <BtnNovo onClick={() => navigate('/multa/editar')} />
            </Col>
        </Row>
    );
}