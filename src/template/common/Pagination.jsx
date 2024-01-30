export const Pagination = ({pagination, setPagination}) => {
    return(
        <nav>
            <ul className="pagination">
                <li className="page-item" style={{ cursor: "pointer"}} onClick={() => {setPagination({...pagination, page: 0})}}><a className="page-link">Primeiro</a></li>

                <li className="page-item" style={{ cursor: "pointer"}} onClick={() => {setPagination({...pagination, page: pagination.page})}}><a className="page-link">{pagination.page + 1}</a></li>
                
                
                {pagination.page + 1 < pagination.totalPages && <li className="page-item" style={{ cursor: "pointer"}} onClick={() => {setPagination({...pagination, page: pagination.page + 1})}}><a className="page-link">{pagination.page + 2}</a></li> }
                {pagination.page + 2 < pagination.totalPages && <li className="page-item" style={{ cursor: "pointer"}} onClick={() => {setPagination({...pagination, page: pagination.page + 2})}}><a className="page-link">{pagination.page + 3}</a></li> }
                
                <li className="page-item" style={{ cursor: "pointer"}} onClick={() => {setPagination({...pagination, page: pagination.totalPages - 1})}}><a className="page-link">Último</a></li>
            </ul>
        </nav>
    );
}