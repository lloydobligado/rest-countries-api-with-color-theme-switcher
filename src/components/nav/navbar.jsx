import { Box } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Box className="w-[100%] h-20 flex justify-between items-center bg-white shadow-light">
        <h1 className="ml-20 font-roboto-flex font-bold text-[1.5625rem] text-color-dark-secondary">Where in the world?</h1>
        <Box className="mode mr-20 flex justify-center items-center">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4608 11.4609C14.8403 11.649 14.1819 11.7501 13.5 11.7501C9.77208 11.7501 6.75 8.72802 6.75 5.0001C6.75 4.31816 6.85113 3.65983 7.0392 3.03931C4.26756 3.87937 2.25 6.45412 2.25 9.5001C2.25 13.228 5.27208 16.2501 9 16.2501C12.046 16.2501 14.6207 14.2325 15.4608 11.4609Z" stroke="#121214" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="ml-[.69rem] font-roboto text-4 font-normal">Dark Mode</span>
        </Box>
    </Box>
  )
}

export default Navbar