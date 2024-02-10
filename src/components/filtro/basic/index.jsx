import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LabelFiltro, Input, Select } from '../../inputs/index'
import { BtnBuscar, BtnLimpar } from '../../buttons/index';
import { useFiltroContext } from '../../../context/FiltroContext/FiltroContext';

const Index = () => {
  const [state, actions] = useFiltroContext();
  const [preFiltro, setPreFiltro] = useState({value: '', showDeactive: true});

  const handleLimparFiltro = () => {
    actions.limparFiltro();
    setPreFiltro({value: '', showDeactive: true});
  };

  const handleBuscar = () => {
    actions.filterResults(preFiltro);
  };

  return(
    <Row>
      <Col>
        <div className='input-group'>
          <LabelFiltro htmlFor='filtro' value='Filtro' />
          <Input
            className='text-center'
            name='filtro'
            placeholder='Filtro'
            value={preFiltro?.value || ''}
            onChange={(e) => setPreFiltro({...preFiltro, value: e.target.value})}
            maxLength={50}
          />
          <LabelFiltro htmlFor='comboDesativado' value='Mostrar Desativados?' />
          <Select
            name='comboDesativado'
            value={preFiltro?.showDeactive || false}
            onChange={(e) => setPreFiltro({...preFiltro, showDeactive: e.target.value})}
          >
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </Select>
          <BtnLimpar onClick={handleLimparFiltro} />
          <BtnBuscar onClick={handleBuscar} />
        </div>
        <p className='fst-italic text-end'>Registros encontrados: {state.pagination.totalElements}</p>
      </Col>
    </Row>
  );
}

export default Index;