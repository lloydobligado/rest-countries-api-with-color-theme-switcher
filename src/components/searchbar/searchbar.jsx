import React from 'react';

const Searchbar = () => {
  return (
    <div className='w-[30rem] h-[3.5rem] py-[1.0625rem] px-[1.875rem] shadow-light flex flex-row justify-start items-center rounded-[0.1875rem]'>
      <svg className='mr-[1.5rem]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 12.5L17.5 17.5" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <input className='w-full focus:outline-none' type="text" placeholder='Search for a country...' />
    </div>
  );
}

export default Searchbar;
