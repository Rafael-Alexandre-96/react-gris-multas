import React, { useState } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import * as service from '../../api/motoristaService';
import { New } from './components/New';
import * as apiFunctions from '../apiFunctions';

export const NewMotorista = ({updateFunction}) => {
  const [, modalActions] = useModalContext();
  const [motorista, setMotorista] = useState();

  const handleSalvar = async () => {
    apiFunctions.createEntity(service.createMotorista, motorista, setMotorista)
      .then(() => {
        setMotorista(null);
        updateFunction();
        modalActions.showModalSuccess('Registro salvo com sucesso.');
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  };

  return(
    <New
      handleSalvar={handleSalvar}
      motorista={motorista}
      setMotorista={setMotorista}
    />
  );
}