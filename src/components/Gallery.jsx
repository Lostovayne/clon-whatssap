import chat1 from '../assets/chat1.webp';
import chat2 from '../assets/chat2.webp';
import chat3 from '../assets/chat3.webp';
import chat4 from '../assets/chat4.webp';


const Gallery = () => {
  return (
    <div className='flex gap-2' >
      <img
        src={chat1}
        alt=''
        className='h-16 w-16 rounded-xl object-cover border-2'
      />
      <img
        src={chat2}
        alt=''
        className='h-16 w-16 rounded-xl object-cover border-2'
      />
      <img
        src={chat3}
        alt=''
        className='h-16 w-16 rounded-xl object-cover border-2'
      />
      <img
        src={chat4}
        alt=''
        className='h-16 w-16 rounded-xl object-cover border-2'
      />
    </div>
  );
}
export default Gallery