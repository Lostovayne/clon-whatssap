import { supabase } from '../supabaseClient';

const MenuProfile = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className='w-56  border absolute top-7 right-0 bg-white rounded-xl p-5 px-7 transition-all  shadow'>
      <ul className='flex flex-col gap-3 items-end text-gray-700 font-medium'>
        <li className='py-2 w-full text-center hover:bg-gray-50 rounded-md '>
          New group
        </li>
        <li className='py-2 w-full text-center hover:bg-gray-50 rounded-md'>
          Create a room
        </li>
        <li className='py-2 w-full text-center hover:bg-gray-50 rounded-md'>
          Profile
        </li>
        <li className='py-2 w-full text-center hover:bg-gray-50 rounded-md'>
          Starred
        </li>
        <li className='py-2 w-full text-center hover:bg-gray-50 rounded-md'>
          Setting
        </li>
        <li
          onClick={handleLogout}
          className='py-2 w-full text-red-600 text-center hover:bg-gray-50 rounded-md'
        >
          Logout
        </li>
      </ul>
    </div>
  );
};
export default MenuProfile;
