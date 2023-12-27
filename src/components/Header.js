import React from 'react';
import { BsBag, BsPerson, BsThreeDotsVertical } from 'react-icons/bs';

const Header = () => {
  return (
      <header className='bg-blue-200 h-24 sticky top-0 shadow-2'>
        <div className='flex'>
          <img src='https://cdn-icons-png.flaticon.com/512/3501/3501047.png' className='w-20 h-20 p-2 ml-16'></img>
          <div className='bg-[#f5f5f5] rounded-2xl w-[700px] h-10 ml-[200px] mt-7'>
            <span className='text-[26px] ml-6 text-gray-300'>Search...</span>
          </div>
          <div className='ml-32 mt-7'>
            <BsBag size={35} color='#fff'/>
          </div>
          <div className='ml-28 mt-7'>
          <BsPerson size={40} color='#fff'/>
          </div>
          <div className='ml-28 mt-8'>
          <BsThreeDotsVertical size={30} color='#fff'/>
          </div>
          
        </div>
      </header>
      )
};

export default Header;
