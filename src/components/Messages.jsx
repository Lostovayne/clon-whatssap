import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Message from './Message';
import Header from './Header';
import HeaderSeccion1 from './HeaderSeccion1';
import Status from './Status';
import Buscador from './Buscador';
import Chats from './Chats';
import HeaderSeccion2 from './HeaderSeccion2';
import imagen2 from '../assets/imagen2.webp';
import Gallery from './Gallery';
import OpcionesPerfil from './OpcionesPerfil';
import { BsTelephone, BsCameraVideo } from 'react-icons/bs';
import SendMenssage from './SendMenssage';
import { useRef } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  const callSupabase = async () => {
    const { data } = await supabase.from('messages').select('*');
    setMessages(data);
  };

  useEffect(() => {
    callSupabase();
  }, []);

  //realtime supabase
  useEffect(() => {
    const chanel = supabase
      .channel('*')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          tabla: 'messages'
        },
        (payload) => {
          const newMessage = payload.new;
          setMessages((messages) => [...messages, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(chanel);
    };
  }, []);

  //Mapeando datos
  return (
    <div className='grid grid-cols-5  box-border   w-11/12 mx-auto '>
      <section className='bg-white rounded-l-xl '>
        <HeaderSeccion1 />
        <div className='flex items-center flex-col'>
          <Buscador />
        </div>
        <Status />
        <Chats />
      </section>

      <section className='bg-bg-imagen relative bg-center bg-contain col-span-3 w-full h-[780px] overflow-y-scroll  flex flex-col '>

          <Header />
          <div className='flex flex-col gap-3 w-fit p-4 last:mb-40 mt-20 '>
            {messages.map((item) => (
              <Message
                key={item.id}
                message={item.content}
                date={item.created_at}
                email={item.email}
              />
            ))}
          </div>

        <SendMenssage scroll={scroll} />
        <span ref={scroll}></span>
      </section>

      <section className='bg-white rounded-r-xl '>
        <HeaderSeccion2 />

        <div className='flex w-full  flex-col items-center gap-2'>
          <img
            src={imagen2}
            className='h-32 w-32 rounded-full object-cover object-top border-2 border-gray-300'
          />
          <h2 className='font-medium text-lg '>ExTraidora</h2>
          <span className='text-sm text-gray-500'>Online</span>
          <div className='text-2xl text-gray-500 flex gap-3 '>
            <BsCameraVideo className='cursor-pointer hover:text-gray-900' />
            <BsTelephone className='cursor-pointer hover:text-gray-900' />
          </div>
          <div className='w-full py-2 px-8 flex flex-col gap-3'>
            <h3 className='font-medium'>About</h3>
            <p className='text-sm text-gray-600'>
              Hello My name is ExTraidora...
            </p>
            <p className='font-medium'>Media,links and doc</p>
          </div>
          <Gallery />
          <OpcionesPerfil />
        </div>
      </section>
    </div>
  );
};
export default Messages;
