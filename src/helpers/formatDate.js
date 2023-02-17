export const formatDate = messageDate => {
  
  const date = new Date(messageDate)
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let time =  hour +":"+ minutes
  
  return time
}