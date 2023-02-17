import { supabase } from '../supabaseClient';
import logoGoogle from '../assets/logo-google.svg';
import logowhatssap from "../assets/Frame 2023.png"


const Login = () => {
  
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
  };


  return (
    <div className=' h-5/6 bg-white shadow border w-11/12 mx-auto rounded-2xl flex flex-col gap-6 p-10 items-center justify-center'>
      <img src={logowhatssap} alt='' className='w-64' />
      <p className='font-medium cursor-pointer'>Login in to WhatsApp by QR Code</p>
      <p className='text-gray-500 cursor-pointer'>Open WhatsApp on your phone</p>
      <p className='text-gray-500 cursor-pointer'>
        Point your phone to this screen to capture{' '}
      </p>
      <span> or </span>
      <div
        onClick={handleLogin}
        className='bg-white   flex justify-center rounded-xl hover:bg-gray-50 delay-100 transition-colors hover:transition-colors items-center gap-2  py-3 w-60 cursor-pointer border  '
      >
        <img src={logoGoogle} alt='logo-google' className='w-6 h-6 ' />
        <span className='font-medium text-gray-700 text-base '>
          Sign in with Google
        </span>
      </div>
      {/* <div onClick={handleLogout}>Cerrar Sesion</div> */}
    </div>
  );
};
export default Login;
