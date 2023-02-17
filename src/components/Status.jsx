import PerfilCirculo from './PerfilCirculo';
import imagen2 from '../assets/imagen2.webp';
import imagen3 from "../assets/imagen3.webp"
import imagen4 from "../assets/imagen4.webp"
import imagen5 from '../assets/imagen5.webp';






const Status = () => {
  return (
    <div className='w-4/5 mx-auto mt-4 '>
      <p className='font-medium text-gray-700'>Status</p>
      <div className='flex gap-2 mt-3'>
        <PerfilCirculo img={imagen5} />
        <PerfilCirculo img={imagen2} />
        <PerfilCirculo img={imagen3} />
        <PerfilCirculo img={imagen4} />
      </div>
    </div>
  );
}
export default Status