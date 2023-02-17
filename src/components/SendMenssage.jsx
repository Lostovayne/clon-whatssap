import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useEffect } from 'react';

import { BsEmojiSmile,BsPaperclip, BsMic } from 'react-icons/bs';




const SendMenssage = ({scroll}) => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState();

  
  
  // datos de sesion
  
  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session.user.email);
  };

  useEffect(() => {
    getSession();
  }, []);

  
  //enviar messages
  const sendMessage = async (e) => {
    e.preventDefault();
    if (message !== '') {
      const insert = await supabase.from('messages').insert({
        content: message,
        email: user
      });
      
      setMessage('');
      
    }
    
    scroll.current.scrollIntoView({Behavior : "smooth"})
    
    
  };

  return (
    <form
      onSubmit={sendMessage}
      className='fixed bottom-[78px] w-[1030px] py-2 bg-white z-100 flex justify-between items-center pl-8 pr-10 '
    >
      <div className='flex text-2xl text-gray-400 items-center gap-5 '>
        <BsEmojiSmile />
        <BsPaperclip />
      </div>
      <input
        type='text'
        name='message'
        placeholder='Type a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='w-5/6 py-3 px-4 rounded-md outline-none'
      />

      <div className='text-2xl text-gray-400 '>
        <BsMic />
      </div>
    </form>
  );
};
export default SendMenssage;
