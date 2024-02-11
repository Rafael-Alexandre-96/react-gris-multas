import { useState } from 'react';
import { useModalContext } from '../../context/ModalContext/ModalContext';
import * as service from '../../api/enquadramentoService';
import { Record } from './components/Record';
import * as apiFunctions from '../apiFunctions';

export const RecordEnquadramento = ({entity, updateFunction}) => {
  const [, modalActions] = useModalContext();
  const [enquadramento, setEnquadramento] = useState(entity);
  const [edit, setEdit] = useState();

  const handleSalvar = async () => {
    apiFunctions.updateEntity(service.updateEnquadramento, enquadramento)
      .then((enquadramento) => {
        setEnquadramento(enquadramento);
        modalActions.showModalSuccess('Registro salvo com sucesso.');
        setEdit(false);
      })
      .catch((error) => {
        modalActions.showModalDanger(error.message);
      });
  };

  const handleDeletar = async () => {
    modalActions.showModalQuestion("Deseja deletar o registro?", () => {
      apiFunctions.deleteById(service.deleteEnquadramentoById, enquadramento)
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
      handleSalvar={handleSalvar}
      handleDeletar={handleDeletar}
      enquadramento={enquadramento}
      setEdit={setEdit}
      setEnquadramento={setEnquadramento}
    />
  );
}