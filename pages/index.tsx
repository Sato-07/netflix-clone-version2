import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'

export async function getServerSideProps(context:NextPageContext){
  const session = await getSession(context)
  if(!session){
    return{
      redirect:{
        destination:'/auth',
        permanent:false,
      }
    }
  }
  return{
    props:{
      session
    }
  }
}


export default function Home() {
  return (
    <>
    <h1 className="text-2xl text-red-500">Netflix clone</h1>
    <button className='h-10 w-full bg-white' onClick={()=> signOut()}>Logout! </button>
    </>
  )
}
