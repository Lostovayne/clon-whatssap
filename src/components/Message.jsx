
import {formatDate} from '../helpers/formatDate';
const Message = ({message, date, email}) => {

  return (
    <div className='bg-white rounded-md px-3 justify-between flex  items-center gap-2 py-3 shadow'>
      <h3>{message}</h3>
      <p className='text-gray-300 text-xs translate-y-2 ' >{formatDate(date)}</p>
      {/* <p>{email}</p> */}
    </div>
  );
};
export default Message;
