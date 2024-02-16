import './styles.css';

const index = ({title, children}) => (
  <div className='card dashcard'>
    <div className='card-header text-center'>
      <p className='p-0 m-0'>{title}</p>
    </div>
    <div className='card-body text-center'>
      <div className='d-flex flex-column gap-3'>
        {children}
      </div>
    </div>
  </div>
);

export default index;