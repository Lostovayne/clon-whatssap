
import circuloColores from "../assets/Component 1.png"
import { BsAppIndicator, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import MenuProfile from './MenuProfile';
import {useState} from 'react';





const HeaderSeccion1 = () => {
  
  
  const [showMenu, setShowMenu] = useState(false);
  
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <div className='bg-white h-20 flex rounded-tl-2xl justify-between items-center px-3 pl-4 w-full'>
      <img src={circuloColores} alt='' className='' />
      <div className='flex items-center gap-2'>
        <BsAppIndicator className='text-xl text-gray-500' />
        <button onClick={handleShowMenu} className='relative'>
          {showMenu ? (
            <BsChevronUp className='text-xl text-gray-500' />
          ) : (
            <BsChevronDown className='text-xl text-gray-500' />
          )}
          
        {showMenu && <MenuProfile />}
        </button>
      </div>
    </div>
  );
}
export default HeaderSeccion1