import { useState } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import * as service from '../../api/motoristaService';
import { Record } from './components/Record';
import * as apiFunctions from '../apiFunctions';

export const RecordMotorista = ({entity}) => {
  const [, modalActions] = useModalContext();
  const [motorista, setMotorista] = useState(entity);
  const [edit, setEdit] = useState();

  const handleSalvar = async () => {
    apiFunctions.updateEntity(service.updateMotorista, motorista, setMotorista)
      .then(() => {
        modalActions.showModalSuccess('Registro salvo com sucesso.');
        setEdit(false);
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  };

  const handleAtivar = async () => { 
    apiFunctions.changeActiveEntity(service.deactiveMotoristaById, motorista, setMotorista)
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  };

  const handleDesativar = async () => {
    apiFunctions.changeActiveEntity(service.activeMotoristaById, motorista, setMotorista)
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
      motorista={motorista}
      setEdit={setEdit}
      setMotorista={setMotorista}
    />
  );
}