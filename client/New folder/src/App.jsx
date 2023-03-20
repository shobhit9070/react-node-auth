import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { supabase } from './supabaseClient'
import Auth from './auth'
import Account from './account'
import {signup} from './signup'
import {login} from './login'
import { dashboard } from './dashboard'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.getSession().then((data) => console.log(data)) 
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

// async function ses () {
//   const x = await supabase.auth.getSession()
//   console.log(x)
// }
  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}

export default App