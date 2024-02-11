import { useModalContext } from '../../context/ModalContext/ModalContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const DialogModal = () => {
  const [state, actions] = useModalContext();

  return(
    <Modal show={state.show} onHide={actions.closeModal} animation={true}>
      <Modal.Header closeButton style={{background: state.background}}>
        <Modal.Title>{state.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { state.body }
      </Modal.Body>
      <Modal.Footer>
        { state.question ? 
          <>
            <Button variant='success' onClick={() => {actions.closeModal(); state.onYes();}}>Sim</Button>
            <Button variant='danger' onClick={() => {actions.closeModal(); state.onNo();}}>Não</Button>
          </>
        :
          <Button variant='primary' onClick={actions.closeModal}>Fechar</Button>
        }
      </Modal.Footer>
    </Modal>
  );
}