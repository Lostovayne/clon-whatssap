import { BsX } from 'react-icons/bs';

const HeaderSeccion2 = () => {
  return (
    <div className='bg-white h-20 flex rounded-tr-2xl justify-between items-center px-3 w-full'>
      <div className='flex gap-2 items-center'>
        <BsX className='text-2xl text-gray-500 ' />
        <p className='font-medium text-gray-800'>Contact Info</p>
      </div>
    </div>
  );
};
export default HeaderSeccion2;
