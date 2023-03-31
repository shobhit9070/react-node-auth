import React, { useContext, useState, useEffect } from 'react'
import { supabase } from './supabase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

async function get_session() {
    const session = await supabase.auth.getSession()
    return session
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //   get_session().then((data) => setUser(data.data.session))
    //   setLoading(false)

    //   const { data: listener } = supabase.auth.onAuthStateChange(
    //     async (event, session) => {
    //       console.log(event)
    //       get_session().then((data) => setUser(data.data.session))
    //       setLoading(false)
    //     }
    //   )
    //   console.log(user)
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session)
        setLoading(false)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session)
        setLoading(false)

      })
    }, [])
      // return () => { 
      //   listener?.unsubscribe()
      // }
  // useEffect(() => {
  //   const session = supabase.auth.getSession()

  //   setUser(session?.user ?? null)
  //   setLoading(false)

  //   const { data: listener } = supabase.auth.onAuthStateChange(
  //     async (event, session) => {
  //       setUser(session?.user ?? null)
  //       setLoading(false)
  //     }
  //   )

  //   // return () => {
  //   //   listener?.unsubscribe()
  //   // }
  // }, [])
  const value = {
    signUp: (data) =>  supabase.auth.signUp(
      {
        email: data.email,
        password: data.password,
        options: {
          data: {
            email_update: 'True',
            accepted_terms: 'True',
            is_verified: "False",
          }
        }
      }
    ),
    // signUp: (data) => fetch("http://localhost:5000/user-login",{
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers : {
    //     'Content-Type': 'application/json'
    //   }
    // }), 
    signIn: (data) => supabase.auth.signInWithPassword({email:data.email,password:data.password}),
    signOut: () => supabase.auth.signOut(),
    user,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}



  //frontend
  //backed -> session , 
    // signUp: (data) =>  supabase.auth.signUp(
    //   {
    //     email: data.email,
    //     password: data.password,
    //     options: {
    //       data: {
    //         first_name: 'John',
    //         age: 27,
    //       }
    //     }
    //   }
    // ),


  