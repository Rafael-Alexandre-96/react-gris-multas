import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import * as service from '../../api/multaService';
import { Record } from './components/Record';
import * as apiFunctions from '../apiFunctions';

export const RecordMulta = ({updateFunction, entity}) => {
  const navigate = useNavigate();
  const [, modalActions] = useModalContext();
  const [multa, setMulta] = useState(entity);
  const [edit, setEdit] = useState();

  const handleDeletar = async () => {
    modalActions.showModalQuestion("Deseja deletar o registro?", () => {
      apiFunctions.deleteById(service.deleteMultaById, multa)
      .then(() => {
        updateFunction();
        modalActions.showModalSuccess('Registro deletado com sucesso.');
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
    });
  };

  return(
    <Record
      edit={edit}
      handleEditar={() => navigate(`/multa/editar/${multa.id}`)}
      handleDeletar={handleDeletar}
      multa={multa}
      setEdit={setEdit}
      setMulta={setMulta}
    />
  );
}