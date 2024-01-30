import LogoBranco from '../../public/LogoBranco';
import './styles.css';

export const NavbarPrincipal = () => (
    <nav className="navbar navbar-expand-lg bg-estrela-blue mb-4">
		<div className="container-fluid">
		    <a className="navbar-brand text-light" href="#"><LogoBranco /></a>
		    <button className="navbar-toggler btn-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">...
		    </button>
		    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    	<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		        	<li className="nav-item">
		        		<a className="nav-link text-light" href={`/`}>Dashboard</a>
		        	</li>
			        <li className="nav-item dropdown">
				        <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cadastros</a>
				        <ul className="dropdown-menu">
					        <li><a className="dropdown-item" href={`/motorista`}>Motorista</a></li>
					        <li><a className="dropdown-item" href="#">Multa</a></li>
					        <li><a className="dropdown-item" href={`/veiculo`}>Veículo</a></li>
				        </ul>
			        </li>
		      </ul>
		      <div className="m-2 text-light">Rafael</div>
		      <button className="btn btn-outline-danger" type="submit">Sair</button>
		    </div>
		</div>
	</nav>
)