import React from 'react'
import "@/style/about.css"
import Image from 'next/image'
const About = () => {
  return (
    <div className='container '>
      <div>
          <h2 className='hho'>About Me</h2>

      
    <div className='kk'> <p>Hi I'am Rizwan Arain<br/>I am a passionate and dedicated Full Stack Developer with a strong focus on front-end technologies. Over the years, I've honed my skills in <span className='yy'>HTML</span> <span className='yy'>Css</span>, <span className='yy'>JavaScript</span>, and <span className='yy'>TypeScript</span>. I've expanded my expertise to modern frameworks such as <span className='yy'>Next.js</span>,<br/> always striving to stay up-to-date with the latest technologies.</p></div>
    <Image src={"/kaka11.jpg"} alt='ptofile' width={200} height={200} className='dd'/>
  </div></div>
  )
}

export default About