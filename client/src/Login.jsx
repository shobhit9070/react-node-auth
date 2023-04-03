import { useRef, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { useAuth } from './Auth'
import { supabase } from './supabase'

export function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  // Get signUp function from the auth context
  const { signIn } = useAuth()

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password })

    if (error) {
        console.log(error)
      alert('error signing in')
    } else {
      // Redirect user to Dashboard
      // const {data}  = await supabase.auth.getSession()
      // const id = data.session.user
      // const {error} = await fetch("http://localhost:5000/storeuserid",{
      //   method: 'POST',
      //   body: JSON.stringify({id,email}),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      // if (error){
      //   console.log(error)
      // }
      // else{
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

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  )
}