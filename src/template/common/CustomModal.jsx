import { useContext } from "react";
import { ModalContext } from '../../context/ModalContext/ModalContextProvider';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const CustomModal = () => {
    const modalContext = useContext(ModalContext);
    const {
        state: { body, title, show, background, question, onYes, onNo }, closeModal
    } = modalContext;

    return(
        <Modal show={show} onHide={closeModal} animation={true}>
            <Modal.Header closeButton style={{background: background}}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { body.map((msg) => (
                    <p key={msg}>{msg}</p>
                ))}
            </Modal.Body>
            <Modal.Footer>
                { question ? 
                    <>
                        <Button variant="success" onClick={() => {closeModal(); onYes();}}>Sim</Button>
                        <Button variant="danger" onClick={() => {closeModal(); onNo();}}>Não</Button>
                    </>
                :
                    <Button variant="primary" onClick={closeModal}>Fechar</Button>
                }
            </Modal.Footer>
        </Modal>
    );
}