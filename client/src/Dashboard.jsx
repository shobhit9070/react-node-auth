import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from './Auth'

export function Dashboard() {
  // Get current user and signOut function from context
  const { user, signOut } = useAuth()
  const [firstRender,setFirstRender] = useState(false)
  const history = useHistory()
  useEffect(() =>{
      const id = async (user) => {
      const userid = user.user.id
      const email = user.user.email
      const confirmed_at = user.user.confirmed_at
      const {error}  = await fetch("http://localhost:5000/storeuserid",{
        method: 'POST',
        body: JSON.stringify({userid,email}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  if (!firstRender){
    setFirstRender(true)
    console.log(user)
    id(user)
  }

  },[firstRender])
  async function handleSignOut() {
    // Ends user session
    await signOut()

    // Redirects the user to Login page
    history.push('/login')
  }

  return (
    <div>
      {/* Change it to display the user ID too 👇*/}
      <p>Welcome {user.user.id}</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}