import { useFiltroContext } from '../../context/FiltroContext/FiltroContext';

export const Pagination = () => {
  const [state, actions] = useFiltroContext();

  return(
    <nav>
      <ul className='pagination'>
        <li className='page-item' style={{ cursor: 'pointer'}} onClick={() => actions.changePage(0)}><p className='page-link'>Primeiro</p></li>
        <li className='page-item' style={{ cursor: 'pointer'}} onClick={() => actions.changePage(state.pagination.page)}><p className='page-link'>{state.pagination.page + 1}</p></li>  
        { state.pagination.page + 1 < state.pagination.totalPages && <li className='page-item' style={{ cursor: 'pointer'}} onClick={() => actions.changePage(state.pagination.page + 1)}><p className='page-link'>{state.pagination.page + 2}</p></li> }
        { state.pagination.page + 2 < state.pagination.totalPages && <li className='page-item' style={{ cursor: 'pointer'}} onClick={() => actions.changePage(state.pagination.page + 2)}><p className='page-link'>{state.pagination.page + 3}</p></li> }
        <li className='page-item' style={{ cursor: 'pointer'}} onClick={() => actions.changePage(state.pagination.totalPages - 1)}><p className='page-link'>Último</p></li>
      </ul>
    </nav>
  );
}