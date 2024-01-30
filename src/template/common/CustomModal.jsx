import { useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ACTIONS } from "../../context/ModalContext/modalAction";

export const CustomModal = () => {
    const modalContext = useContext(ModalContext);
    const {
        state: { body, title, show, background }
    } = modalContext;

    const handleClose = () => {
        modalContext.dispatch({ type: ACTIONS.HIDE});
    };
    
    return(
        <Modal show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton style={{background: background}}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}