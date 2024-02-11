import React, { useState } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import * as service from '../../api/veiculoService';
import { New } from './components/New';
import * as apiFunctions from '../apiFunctions';

export const NewVeiculo = ({updateFunction}) => {
  const [, modalActions] = useModalContext();
  const [veiculo, setVeiculo] = useState();

  const handleSalvar = async () => {
    apiFunctions.createEntity(service.createVeiculo, veiculo)
      .then(() => {
        setVeiculo(null);
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
      veiculo={veiculo}
      setVeiculo={setVeiculo}
    />
  );
}