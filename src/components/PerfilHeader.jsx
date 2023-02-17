const PerfilHeader = ({img}) => {
  return (
    <div className='flex gap-2 items-left justify-start  '>
      <img
        src={img}
        alt=''
        className='h-10 w-10 border rounded-full object-cover'
      />
      <div className=' flex flex-col items-left justify-center'>
        <span className='text-gray-700 font-medium'>ExTraidora</span>
        <span className='text-sm text-gray-400'>Online</span>
      </div>
    </div>
  );
};
export default PerfilHeader;
