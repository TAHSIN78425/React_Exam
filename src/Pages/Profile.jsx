import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../Components/Loading';
import Home from './Home';

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <><Loading/></>;
  }

  return (
    <>
    {
      isAuthenticated?
      <div className=' flex flex-col justify-center items-center'>

    <div className=' relative flex justify-center items-center w-[100%] h-[300px] bg-pink-500  mt-5 '>


      
      
     
      
</div>
<div className='absolute flex  justify-center items-center rounded-full w-[100%] top-[250px] left-[15px]  z-10'>
   <img
   src={user.picture} alt={user.name}
   className='flex  justify-center items-center rounded-full w-[200px] h-[200px]'
   
   
   />
 
 </div>
 <h1 className='text-center mt-6 text-[70px] text-pink-600 items-center'>
Name: 

 </h1>
 <br/>
 <span className='text-[70px] font-bold text-center'>{user.name}</span>
 <h2 className='text-center mt-6 text-[70px] text-pink-600 items-center' >
  Contact
</h2>
<p className='text-center text-[25px]'>{user.email}</p>
   
    </div>:<Home/>
    }
      </>
  )
}
