import { NavbarPrincipal } from "../common/NavbarPrincipal";
import { TableVeiculo } from "./TableVeiculo";
import { PrincipalCard } from "../common/PrincipalCard";

export const IndexVeiculo = () => {
    return(
        <>
            <NavbarPrincipal />
            <div className="container">
                <PrincipalCard title="Cadastro de Veículo">
                    <TableVeiculo />
                </PrincipalCard>
            </div>
        </>
    );
}