import Iconos from "./Iconos"
import PerfilHeader from './PerfilHeader';
import imagen2 from "../assets/imagen2.webp"


const Header = () => {
  return (
    <div className='bg-white z-50 h-20 fixed border-l border-r flex justify-between items-center px-3 w-[1031px]'>
      {/* <Perfil img={perfil1} /> */}
      <PerfilHeader img={imagen2} />
      <Iconos />
    </div>
  );
}
export default Header