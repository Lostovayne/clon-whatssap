import { BsSearch } from 'react-icons/bs';

const Buscador = () => {
  return (
  
  <div className='w-[4/5] bg-gray-50 rounded-2xl flex items-center justify-between py-2 px-3 '>
    <button>
      <BsSearch className='text-xl text-gray-600' />   
    </button>
    <input type="text" placeholder='Search or start new chat' className='placeholder:px-1 text-gray-600 px-2 bg-transparent outline-none' />
    
  </div>)
};
export default Buscador;
