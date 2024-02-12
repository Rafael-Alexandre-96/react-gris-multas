import { useFiltroContext } from '../../context/FiltroContext/FiltroContext';
import './styles.css';

export const Pagination = () => {
  const [state, actions] = useFiltroContext();
  let lines = [];

  for (let index = 0; index < state?.pagination?.totalPages; index++) {
    lines.push(<li key={index} className='page-item' onClick={() => actions.changePage(index)}><p className='page-link'>{index + 1}</p></li>);
  };

  return(
    <nav className='nav-page'>
      <ul className='pagination'>
        <li className='page-item' onClick={() => actions.changePage(0)}><p className='page-link'>Primeiro</p></li>
        { lines }
        <li className='page-item' onClick={() => actions.changePage(state.pagination.totalPages - 1)}><p className='page-link'>Último</p></li>
      </ul>
    </nav>
  );
}