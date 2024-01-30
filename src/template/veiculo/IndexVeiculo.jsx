import { NavbarPrincipal } from "../common/NavbarPrincipal";
import { TableVeiculo } from "./TableVeiculo";
import { PrincipalCard } from "../common/PrincipalCard";
import { ModalContextProvider } from "../../context/ModalContext/ModalContextProvider";
import { CustomModal } from "../common/CustomModal";

export const IndexVeiculo = () => {
    return(
        <ModalContextProvider>
            <NavbarPrincipal />
            <div className="container">
                <PrincipalCard title="Cadastro de Veículo">
                    <TableVeiculo />
                </PrincipalCard>
            </div>
            <CustomModal />
        </ModalContextProvider>
    );
}