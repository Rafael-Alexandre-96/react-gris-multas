import { useState } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import * as service from '../../api/veiculoService';
import { Record } from './components/Record';
import * as apiFunctions from '../apiFunctions';

export const RecordVeiculo = ({entity}) => {
  const [, modalActions] = useModalContext();
  const [veiculo, setVeiculo] = useState(entity);
  const [edit, setEdit] = useState();

  const handleSalvar = async () => {
    apiFunctions.updateEntity(service.updateVeiculo, veiculo)
      .then((veiculo) => {
        setVeiculo(veiculo);
        modalActions.showModalSuccess('Registro salvo com sucesso.');
        setEdit(false);
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  };

  const handleAtivar = async () => { 
    apiFunctions.changeActiveEntity(service.deactiveVeiculoById, veiculo, setVeiculo)
      .then((veiculo) => {
        setVeiculo(veiculo);
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  };

  const handleDesativar = async () => {
    apiFunctions.changeActiveEntity(service.activeVeiculoById, veiculo, setVeiculo)
      .then((veiculo) => {
        setVeiculo(veiculo);
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  };

  return(
    <Record
      edit={edit}
      handleAtivar={handleAtivar}
      handleDesativar={handleDesativar}
      handleSalvar={handleSalvar}
      veiculo={veiculo}
      setEdit={setEdit}
      setVeiculo={setVeiculo}
    />
  );
}