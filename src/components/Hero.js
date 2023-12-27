import React from 'react';

// import image
import MenImg from '../img/men_hero.png'

import {Link} from 'react-router-dom'
const Hero = () => {
  return <section className='bg-blue-200 h-[650px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
     <div className='container mx-auto flex justify-around'>
      <div className="flex flex-col justify-center">
        <div>
          <div>New Trending</div>
        </div>
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>End Year Sale<br/>
          <span className='font-semibold'>Get your style</span> 
        </h1>
      </div>
      <div className="">
        <div className='hidden lg:block'>
          <img src={MenImg}/>
        </div>
      </div>
     </div>
  </section>;
};

export default Hero;
