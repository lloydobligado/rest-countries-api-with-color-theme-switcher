import { Box } from '@mui/material'
import React, { useState } from 'react'
import { RegionData } from '../../utils/constants'

const Filter = () => {

  const [toggleFilter, setToggleFilter] = useState(false)

  const handleFilter = () => {
    setToggleFilter((prevToggleFilter) => !prevToggleFilter)
  }

  const handleRegion = (region) => {
  }

  const Regions = RegionData.map((region) => {
    return (
        <li key={region.id} className='px-[1.5rem] hover:bg-gray-100' onClick={() => handleRegion(region.region)}>{region.region}</li>
    )
  })
  return (
    <Box className='relative hover:cursor-pointer w-[12.5rem] h-[3.5rem] max-md:mt-[50px] py-4 pl-[1.5rem] pr-[.75rem] flex justify-between items-center rounded-[0.1875rem] shadow-light'
         onClick={handleFilter}>
      <p className='font-roboto text-color-dark-secondary text-[.875rem]'>
        Filter by Region
      </p>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15 11L12 14L9 11'
          stroke='#121214'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <ul className={`absolute top-[3.75rem] right-0 w-[12.5rem] h-[10.125rem] pt-[1.12rem] pb-4 bg-white shadow-light ${toggleFilter ? "flex" : "hidden"} flex-col justify-between rounded-[0.1875rem] z-10`}>
        {Regions}
      </ul>
    </Box>
  )
}

export default Filter