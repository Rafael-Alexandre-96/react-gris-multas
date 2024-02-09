import React, { useContext } from "react";
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";

export const TableHeaders = ({fields}) => {
    const filtroContext = useContext(FiltroContext);
    const {
        changeSortField, toggleSortAsc
    } = filtroContext;

    return(
        <thead className="text-center">
            <tr>
                { fields && fields.map((field) => (
                    <th className="bg-light" onClick={() => {changeSortField(field.sort); toggleSortAsc()}}>{field.desc}</th>
                ))}
                <th className="bg-light">Ações</th>
            </tr>
        </thead>
    );
}