"use client"
import React, { useState } from 'react'

const page = () => {
  const [username, setusername] = useState("")
  return (
    <>
    <h1 className='mx-5 text-xl'>Enter Your Name</h1>
    <form>
      <input type="text" className='border-2 border-zinc-800 px-4 py-2 text-x1' value={username} onChange={(e)=>{
        setusername(e.target.value)
        console.log(username)
      }} />
    </form>
    </>
  )
}

export default page
