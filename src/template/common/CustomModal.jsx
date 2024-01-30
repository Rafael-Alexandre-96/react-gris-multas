import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const CustomModal = ({title, body, background="#fff", setShowModalFalse}) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {setShow(false); setShowModalFalse();}
    const handleShow = () => setShow(true);
    
    return(
        <Modal show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton style={{ backgroundColor: background }}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose} >Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}