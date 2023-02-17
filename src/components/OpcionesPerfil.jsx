import {
  BsToggleOn,
  BsClockHistory,
  BsHandThumbsDown,
  BsTrash2
} from 'react-icons/bs';
const OpcionesPerfil = () => {
  return (
    <div className='mt-4 w-full px-8 flex flex-col gap-3 '>
      <div className='flex justify-between  items-center '>
        <p>Mute Notifications</p>
        <BsToggleOn className='text-gray-500 text-3xl' />
      </div>
      <p>Dissappearing messages</p>
      <span className='text-sm text-gray-600 font-medium'>Off</span>

      <div className='flex flex-col gap-4 mt-1'>
        <button className=' text-gray-600 flex  gap-4 items-center '>
          <BsClockHistory className='text-xl' />
          <span>Block ExTraidora</span>
        </button>
        <button className=' text-gray-600 flex  gap-4 items-center '>
          <BsHandThumbsDown className='text-xl' />
          <span>Report ExTraidora</span>
        </button>
        <button className=' text-gray-600 flex  gap-4 items-center '>
          <BsTrash2 className='text-xl' />
          <span>Delete Chat</span>
        </button>
      </div>
    </div>
  );
};
export default OpcionesPerfil;
