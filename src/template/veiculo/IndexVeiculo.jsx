import { Container } from "react-bootstrap";
import { NavbarPrincipal } from "../common/NavbarPrincipal";
import { PrincipalCard } from "../common/PrincipalCard";
import { FiltroVeiculo } from "./FiltroVeiculo";
import { TableVeiculo } from "./TableVeiculo";
import { Pagination } from "../common/Pagination";
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
                        <FiltroVeiculo />
                        <TableVeiculo />
                        <Pagination />
                    </FiltroContextProvider>
                </PrincipalCard>
            </Container>
            <CustomModal />
        </ModalContextProvider>
    );
}