import { Container } from "react-bootstrap";
import { NavbarPrincipal } from "../common/NavbarPrincipal";
import { PrincipalCard } from "../common/PrincipalCard";
import { ModalContextProvider } from "../../context/ModalContext/ModalContextProvider";
import { CustomModal } from "../common/CustomModal";
import { FrmMulta } from "../multa/FrmMulta";

export const EditMulta = () => {
    return(
        <ModalContextProvider>
            <NavbarPrincipal />
            <Container>
                <PrincipalCard title="Cadastro de Multa">
                    <FrmMulta />
                </PrincipalCard>
            </Container>
            <CustomModal />
        </ModalContextProvider>
    );
}