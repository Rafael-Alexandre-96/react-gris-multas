import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LabelFiltro, Input, Select } from '../../inputs/index'
import { BtnBuscar, BtnLimpar } from '../../buttons/index';
import { useFiltroContext } from '../../../context/FiltroContext/FiltroContext';

const Index = ({options, defaultField, showActiveFilter = true}) => {
  const [state, actions] = useFiltroContext();
  const [preFiltro, setPreFiltro] = useState({field: defaultField, value: '', showDeactive: true});

  const handleLimparFiltro = () => {
    actions.limparFiltro();
    setPreFiltro({field: defaultField, value: '', showDeactive: true});
  };

  const handleBuscar = () => {
    actions.filterResults(preFiltro);
  };

  return(
    <Row>
      <Col>
        <div className='input-group'>
          <LabelFiltro htmlFor='comboField' value='Campo' />
          <select className='form-select' id='comboField' value={preFiltro?.field} onChange={(e) => setPreFiltro({ ...preFiltro, field: e.target.value })}>
            { options && options.map((option) => (
              <option key={option.value} value={option.value}>{option.desc}</option>
            ))}
          </select>
          <LabelFiltro htmlFor='valor' value='Valor' />
          <Input
            className='text-center'
            name='valor'
            placeholder='Valor'
            value={preFiltro?.value || ''}
            onChange={(e) => setPreFiltro({...preFiltro, value: e.target.value})}
            maxLength={50}
          />
          <LabelFiltro htmlFor='comboDesativado' value='Mostrar Desativados?' />
          { showActiveFilter && 
            <Select
              name='comboDesativado'
              value={preFiltro?.showDeactive || false}
              onChange={(e) => setPreFiltro({...preFiltro, showDeactive: e.target.value})}
            >
              <option value={false}>Não</option>
              <option value={true}>Sim</option>
            </Select>
          }
          <BtnLimpar onClick={handleLimparFiltro} />
          <BtnBuscar onClick={handleBuscar} />
        </div>
        <p className='fst-italic text-center'>Registros encontrados: {state.pagination.totalElements}</p>
      </Col>
    </Row>
  );
}

export default Index;