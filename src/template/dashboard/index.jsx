import { ModalContextProvider } from '../../context/ModalContext/ModalContext';
import Navbar from '../../components/navbar/index';
import { Container } from 'react-bootstrap';
import { Content } from './Content';
import { DialogModal } from '../../components/modal/DialogModal';

const index = () => (
  <ModalContextProvider>
    <Navbar />
    <Container>
      <Content />
    </Container>
    <DialogModal />
  </ModalContextProvider>
);

export default index;