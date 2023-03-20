import React from 'react'
import { useRef,useState} from 'react'
function signup() {

    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()

        //write the code logic later
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
    </>
  )
}

export default signup