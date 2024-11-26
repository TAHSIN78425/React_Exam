import React from 'react'
import Logo from '../assets/Panda_Logo.png'
import Slider from '../Components/Slider'

export default function Home() {
  return (
    <>
<div className='text-center flex justify-center flex-wrap gap-5'>
<img src={Logo} className='w-[48px] h-[48px] mt-6'/>
<h1 className=' text-pink-600 text-[60px] font-semibold'>Food Panda</h1>
</div>
<Slider/>
    </>
  )
}
