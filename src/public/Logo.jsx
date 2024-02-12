import LogoEstrelaBranca from './logo_estrela_branco.png';
import LogoEstrela from './logo_estrela.png';

export const LogoBranco = ({width = 196}) => (
  <img className='img-fluid' width={width} src={LogoEstrelaBranca} alt='logo'/>
);

export const Logo = ({width = 196}) => (
  <img className='img-fluid' width={width} src={LogoEstrela} alt='logo'/>
);