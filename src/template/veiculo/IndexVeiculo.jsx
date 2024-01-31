import { Container } from "react-bootstrap";
import { NavbarPrincipal } from "../common/NavbarPrincipal";
import { TableVeiculo } from "./TableVeiculo";
import { PrincipalCard } from "../common/PrincipalCard";
import { ModalContextProvider } from "../../context/ModalContext/ModalContextProvider";
import { FiltroContextProvider } from "../../context/FiltroContext/FiltroContextProvider";
import { CustomModal } from "../common/CustomModal";

export const IndexVeiculo = () => {
    return(
        <ModalContextProvider>
            <NavbarPrincipal />
            <Container>
                <PrincipalCard title="Cadastro de Veículo">
                    <FiltroContextProvider>
                        <TableVeiculo />
                    </FiltroContextProvider>
                </PrincipalCard>
            </Container>
            <CustomModal />
        </ModalContextProvider>
    );
}