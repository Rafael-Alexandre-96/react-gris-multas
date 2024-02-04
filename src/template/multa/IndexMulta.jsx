import { Container } from "react-bootstrap";
import { NavbarPrincipal } from "../common/NavbarPrincipal";
import { PrincipalCard } from "../common/PrincipalCard";
import { FiltroMulta } from "./FiltroMulta";
import { TableMulta } from "./TableMulta";
import { Pagination } from "../common/Pagination";
import { ModalContextProvider } from "../../context/ModalContext/ModalContextProvider";
import { FiltroContextProvider } from "../../context/FiltroContext/FiltroContextProvider";
import { CustomModal } from "../common/CustomModal";

export const IndexMulta = () => {
    return(
        <ModalContextProvider>
            <NavbarPrincipal />
            <Container>
                <PrincipalCard title="Cadastro de Multa">
                    <FiltroContextProvider>
                        <FiltroMulta />
                        <TableMulta />
                        <Pagination />
                    </FiltroContextProvider>
                </PrincipalCard>
            </Container>
            <CustomModal />
        </ModalContextProvider>
    );
}