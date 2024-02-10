import { useFiltroContext } from '../../context/FiltroContext/FiltroContext';
import './styles.css';

export const Headers = ({fields}) => {
  const [, actions] = useFiltroContext();

  return(
    <thead className='text-center'>
      <tr>
        { fields && fields.map((field) => (
          <th key={field.sort} className='bg-light' onClick={() => {actions.changeSortField(field.sort); actions.toggleSortAsc()}}>{field.desc}</th>
        ))}
        <th className='bg-light'>Ações</th>
      </tr>
    </thead>
  );
}