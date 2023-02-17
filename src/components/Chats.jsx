import Chat from './Chat'

import imagen2 from '../assets/imagen2.webp';
import imagen4 from '../assets/imagen4.webp';
import imagen5 from '../assets/imagen5.webp';
import imagen6 from '../assets/imagen6.webp';
import imagen7 from '../assets/imagen7.webp';
import imagen8 from '../assets/imagen8.webp';
import imagen9 from "../assets/imagen9.jpg"
import imagen10 from "../assets/imagen10.jpg"


const Chats = () => {
  return (
    <div className='w-4/5 mx-auto mt-5 flex flex-col gap-3 '>
      <div className='flex gap-4 text-sm font-medium '>
        <p>ALL CHATS</p>
        <p>PRIVATE</p>
      </div>

      <div className=' mt-3'>
        <Chat img={imagen2}>
          <div className='flex flex-col justify-center gap-1'>
            <div className='flex justify-between '>
              <span className='font-medium'>ExTraidora</span>
              <span className='text-xs font-medium text-gray-400'>
                22:00 PM
              </span>
            </div>
            <p className='text-gray-500 text-sm w-52 truncate '>
              omg, this is amazing 🤣
            </p>
          </div>
        </Chat>
      </div>

      <div className=' mt-3'>
        <Chat img={imagen9}>
          <div className='flex flex-col justify-center gap-1'>
            <div className='flex justify-between '>
              <span className='font-medium truncate w-2/3'>
                Ing.Franklin Bustamante
              </span>
              <span className='text-xs font-medium text-gray-400'>
                18:57 AM
              </span>
            </div>
            <p className='text-gray-500 text-sm w-52 truncate '>
              Asi golpeo a las cariñosas siempre
            </p>
          </div>
        </Chat>
      </div>

      <div className=' mt-3'>
        <Chat img={imagen10}>
          <div className='flex flex-col justify-center gap-1'>
            <div className='flex justify-between '>
              <span className='font-medium'>El Cariñoso</span>
              <span className='text-xs font-medium text-gray-400'>
                22:00 PM
              </span>
            </div>
            <p className='text-gray-500 text-sm w-52 truncate '>
              El viejo de la base de datos quiere una nueva
            </p>
          </div>
        </Chat>
      </div>

      <div className=' mt-3'>
        <Chat img={imagen6}>
          <div className='flex flex-col justify-center gap-1'>
            <div className='flex justify-between '>
              <span className='font-medium'>Lilia</span>
              <span className='text-xs font-medium text-gray-400'>
                21:00 PM
              </span>
            </div>
            <p className='text-gray-500 text-sm w-52 truncate '>
              Lorem ipsum dolor sit, amet consectetur
            </p>
          </div>
        </Chat>
      </div>

      <div className=' mt-3'>
        <Chat img={imagen7}>
          <div className='flex flex-col justify-center gap-1'>
            <div className='flex justify-between '>
              <span className='font-medium'>Lilia</span>
              <span className='text-xs font-medium text-gray-400'>
                22:25 PM
              </span>
            </div>
            <p className='text-gray-500 text-sm w-52 truncate '>
              Lorem ipsum dolor sit, amet consectetur
            </p>
          </div>
        </Chat>
      </div>

      <div className=' mt-3'>
        <Chat img={imagen8}>
          <div className='flex flex-col justify-center gap-1'>
            <div className='flex justify-between '>
              <span className='font-medium'>Lilia</span>
              <span className='text-xs font-medium text-gray-400'>
                23:03 PM
              </span>
            </div>
            <p className='text-gray-500 text-sm w-52 truncate '>
              Lorem ipsum dolor sit, amet consectetur
            </p>
          </div>
        </Chat>
      </div>
    </div>
  );
}
export default Chats