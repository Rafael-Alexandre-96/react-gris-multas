import { useContext } from "react";
import { FiltroContext } from "../../context/FiltroContext/FiltroContextProvider";

export const Pagination = () => {
    const filtroContext = useContext(FiltroContext);
    const {
        state: { pagination }, changePage
    } = filtroContext;

    return(
        <nav>
            <ul className="pagination">
                <li className="page-item" style={{ cursor: "pointer"}} onClick={() => changePage(0)}><p className="page-link">Primeiro</p></li>
                <li className="page-item" style={{ cursor: "pointer"}} onClick={() => changePage(pagination.page)}><p className="page-link">{pagination.page + 1}</p></li>  
                { pagination.page + 1 < pagination.totalPages && <li className="page-item" style={{ cursor: "pointer"}} onClick={() => changePage(pagination.page + 1)}><p className="page-link">{pagination.page + 2}</p></li> }
                { pagination.page + 2 < pagination.totalPages && <li className="page-item" style={{ cursor: "pointer"}} onClick={() => changePage(pagination.page + 2)}><p className="page-link">{pagination.page + 3}</p></li> }
                <li className="page-item" style={{ cursor: "pointer"}} onClick={() => changePage(pagination.totalPages - 1)}><p className="page-link">Último</p></li>
            </ul>
        </nav>
    );
}