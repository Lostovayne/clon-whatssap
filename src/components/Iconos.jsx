import { BsCameraVideo, BsTelephone, BsThreeDots } from 'react-icons/bs';






const Iconos = () => {
  return (
    <div className='font-medium text-gray-500 flex items-center gap-3 text-lg'>
      <button>
        <BsCameraVideo className='text-xl' />
      </button>
      <button>
        <BsTelephone />
      </button>
      <button >
        <BsThreeDots />
      </button>
    </div>
  );}
export default Iconos;
