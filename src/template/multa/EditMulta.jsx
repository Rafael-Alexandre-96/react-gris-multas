import { ModalContextProvider } from '../../context/ModalContext/ModalContext';
import Navbar from '../../components/navbar/index';
import { Container } from 'react-bootstrap';
import Card from '../../components/card/index';
import { FrmMulta } from './FrmMulta';
import { DialogModal } from '../../components/modal/DialogModal';
import './styles.css';

export const EditMulta = () => (
  <ModalContextProvider>
    <Navbar />
    <Container>
      <Card title='Cadastro de Multa'>
        <FrmMulta />
      </Card>
    </Container>
    <DialogModal />
  </ModalContextProvider>
);