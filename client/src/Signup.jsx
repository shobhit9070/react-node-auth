import { useRef, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { supabase } from './supabase'

import { useAuth } from './Auth'

export function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()

  // Get signUp function from the auth context
  const { signUp } = useAuth()

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password })
    console.log(error)
    if (error) {
      alert('error signing in')
    } else {
        supabase.auth.getSession().then(({ data }) => {
            const x = data.session.user
            fetch("http://localhost:5000/user-login",{
                method: 'POST', 
                body: JSON.stringify({x,email,password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
        // fetch("local5000/store-user")
      // Redirect user to Dashboard
      history.push('/')
    } 
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  )
}


