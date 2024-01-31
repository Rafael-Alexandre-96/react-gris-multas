import { Container } from "react-bootstrap";
import { NavbarPrincipal } from "../common/NavbarPrincipal";
import { TableVeiculo } from "./TableVeiculo";
import { PrincipalCard } from "../common/PrincipalCard";
import { ModalContextProvider } from "../../context/ModalContext/ModalContextProvider";
import { VeiculoContextProvider } from "../../context/VeiculoContext/VeiculoContextProvider";
import { CustomModal } from "../common/CustomModal";

export const IndexVeiculo = () => {
    return(
        <ModalContextProvider>
            <NavbarPrincipal />
            <Container>
                <PrincipalCard title="Cadastro de Veículo">
                    <VeiculoContextProvider>
                        <TableVeiculo />
                    </VeiculoContextProvider>
                </PrincipalCard>
            </Container>
            <CustomModal />
        </ModalContextProvider>
    );
}