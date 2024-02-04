import { Container } from "react-bootstrap";
import { NavbarPrincipal } from "../common/NavbarPrincipal";
import { PrincipalCard } from "../common/PrincipalCard";
import { FiltroMotorista } from "./FiltroMotorista";
import { TableMotorista } from "./TableMotorista";
import { Pagination } from "../common/Pagination";
import { ModalContextProvider } from "../../context/ModalContext/ModalContextProvider";
import { FiltroContextProvider } from "../../context/FiltroContext/FiltroContextProvider";
import { CustomModal } from "../common/CustomModal";

export const IndexMotorista = () => {
    return(
        <ModalContextProvider>
            <NavbarPrincipal />
            <Container>
                <PrincipalCard title="Cadastro de Motorista">
                    <FiltroContextProvider>
                        <FiltroMotorista />
                        <TableMotorista />
                        <Pagination />
                    </FiltroContextProvider>
                </PrincipalCard>
            </Container>
            <CustomModal />
        </ModalContextProvider>
    );
}