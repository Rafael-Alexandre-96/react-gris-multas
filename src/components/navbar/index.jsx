import { Link } from 'react-router-dom';
import { LogoBranco } from '../../public/Logo';
import './styles.css';

const index = () => (
    <nav className='navbar navbar-expand-lg bg-empresa-color mb-4'>
			<div className='container-fluid'>
		    <Link className='navbar-brand text-light' to={`/`}><LogoBranco /></Link>
		    <button className='navbar-toggler btn-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent'>...</button>
		    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
		    	<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
		        	<li className='nav-item'>
		        		<Link className='nav-link text-light' to={`/`}>Dashboard</Link>
		        	</li>
			        <li className='nav-item dropdown'>
				        <div className='nav-link dropdown-toggle text-light' role='button' data-bs-toggle='dropdown' aria-expanded='false'>Cadastros</div>
				        <ul className='dropdown-menu'>
									<li><Link className='dropdown-item' to={`/enquadramento`}>Enquadramento</Link></li>
					        <li><Link className='dropdown-item' to={`/motorista`}>Motorista</Link></li>
					        <li><Link className='dropdown-item' to={`/multa`}>Multa</Link></li>
					        <li><Link className='dropdown-item' to={`/veiculo`}>Veículo</Link></li>
				        </ul>
			        </li>
		      </ul>
		      <div className='m-2 text-light'>Rafael</div>
		      <button className='btn btn-outline-danger' type='submit'>Sair</button>
		    </div>
		</div>
	</nav>
);

export default index;