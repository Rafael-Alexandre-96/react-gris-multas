import { ModalContextProvider } from '../../context/ModalContext/ModalContext';
import Navbar from '../../components/navbar/index';
import { Container } from 'react-bootstrap';
import Card from '../../components/card/index';
import { FiltroContextProvider } from '../../context/FiltroContext/FiltroContext';
import FiltroMulta from '../../components/filtro/basic/index';
import { TableMulta } from './TableMulta';
import { Pagination } from '../../components/pagination/Pagination';
import { DialogModal } from '../../components/modal/DialogModal';
import './styles.css';
import { NavButton } from './components/NavButton';

const index = () => (
  <ModalContextProvider>
    <Navbar />
    <Container>
      <Card title='Cadastro de Multa'>
        <FiltroContextProvider>
          <FiltroMulta />
          <NavButton />
          <TableMulta />
          <Pagination />
        </FiltroContextProvider>
      </Card>
    </Container>
    <DialogModal />
  </ModalContextProvider>
);

export default index;