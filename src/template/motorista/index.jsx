import { ModalContextProvider } from '../../context/ModalContext/ModalContext';
import Navbar from '../../components/navbar/index';
import { Container } from 'react-bootstrap';
import Card from '../../components/card/index';
import { FiltroContextProvider } from '../../context/FiltroContext/FiltroContext';
import FiltroMotorista from '../../components/filtro/basic/index';
import { filterFields } from './data/filterFields';
import { TableMotorista } from './TableMotorista';
import { Pagination } from '../../components/pagination/Pagination';
import { DialogModal } from '../../components/modal/DialogModal';
import './styles.css';

const index = () => (
  <ModalContextProvider>
    <Navbar />
    <Container>
      <Card title='Cadastro de Motorista'>
        <FiltroContextProvider>
          <FiltroMotorista defaultField='nome' options={filterFields}/>
          <TableMotorista />
          <Pagination />
        </FiltroContextProvider>
      </Card>
    </Container>
    <DialogModal />
  </ModalContextProvider>
);

export default index;