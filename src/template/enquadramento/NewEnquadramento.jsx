import React, { useState } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import * as service from '../../api/enquadramentoService';
import { New } from './components/New';
import * as apiFunctions from '../apiFunctions';

export const NewEnquadramento = ({updateFunction}) => {
  const [, modalActions] = useModalContext();
  const [enquadramento, setEnquadramento] = useState({pontos: 0, valor: 0, infrator: 'MOTORISTA'});

  const handleSalvar = async () => {
    apiFunctions.createEntity(service.createEnquadramento, enquadramento)
      .then(() => {
        setEnquadramento({pontos: 0, valor: 0, infrator: 'MOTORISTA'});
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
      enquadramento={enquadramento}
      setEnquadramento={setEnquadramento}
    />
  );
}