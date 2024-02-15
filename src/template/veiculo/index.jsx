import { ModalContextProvider } from '../../context/ModalContext/ModalContext';
import Navbar from '../../components/navbar/index';
import { Container } from 'react-bootstrap';
import Card from '../../components/card/index';
import { FiltroContextProvider } from '../../context/FiltroContext/FiltroContext';
import FiltroVeiculo from '../../components/filtro/basic/index';
import { filterFields } from './data/filterFields';
import { TableVeiculo } from './TableVeiculo';
import { Pagination } from '../../components/pagination/Pagination';
import { DialogModal } from '../../components/modal/DialogModal';
import './styles.css';

const index = () => (
  <ModalContextProvider>
    <Navbar />
    <Container>
      <Card title='Cadastro de Veículo'>
        <FiltroContextProvider>
          <FiltroVeiculo defaultField='placa' options={filterFields}/>
          <TableVeiculo />
          <Pagination />
        </FiltroContextProvider>
      </Card>
    </Container>
    <DialogModal />
  </ModalContextProvider>
);

export default index;