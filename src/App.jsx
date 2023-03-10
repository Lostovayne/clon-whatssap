import Messages from './components/Messages'
import Login from './components/Login'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

function App () {
  const [session, setSession] = useState(null)

  const getSession = async () => {
    const { data } = await supabase.auth.getSession()
    setSession(data.session)
  }

  useEffect(() => {
    getSession()
  }, [])

  return (
    <div className='App font-Inter h-screen flex items-center mx-auto bg-gradient-to-t  from-blue-100 to-emerald-400'>
      {session ? <Messages /> : <Login />}
    </div>
  )
}

export default App
