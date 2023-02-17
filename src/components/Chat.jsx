import PerfilCirculo from './PerfilCirculo';

const Chat = ({img,children}) => {
  return (
    <div className='flex gap-1'>
      <PerfilCirculo img={img} />
      {children}
    </div>
  )
}
export default Chat