import Image from 'next/image'
import React from 'react'
import "@/style/hero.css"
const Hero = () => {
  return (
    <div className='header-container'>
      <div className='header-box'>
        <Image src={"/kaka11.jpg"} width={200} height={200} alt='profile' className='bbb-op'/>
    <h2 className='jjj'>Hello Its Me<span className='hh'>Rizwan Arain</span>
  <span className='rr'>And I am a </span><span className='aa'>Fronted Developer</span>
<p className='oop'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, minus atque nobis consequatur, laudantium velit sapiente omnis hic ab voluptas incidunt ipsum provident veniam debitis, quae sint soluta quis ducimus.</p>
 </h2></div>
 </div>
  )
}

export default Hero