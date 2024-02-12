import { useFiltroContext } from '../../context/FiltroContext/FiltroContext';
import './styles.css';

export const Headers = ({fields, isSmall = false}) => {
  const [, actions] = useFiltroContext();
  let className = isSmall ? 'small-header-table' : '';

  return(
    <thead className='text-center'>
      <tr className={className}>
        { fields && fields.map((field) => (
          <th key={field.sort} className='bg-light' onClick={() => {actions.changeSortField(field.sort); actions.toggleSortAsc()}}>{field.desc}</th>
        ))}
        <th className='bg-light'>Ações</th>
      </tr>
    </thead>
  );
}