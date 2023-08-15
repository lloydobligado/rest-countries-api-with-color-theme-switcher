import React, { useState } from 'react'

const Filter = () => {

  const [toggleFilter, setToggleFilter] = useState(false)

  const handleFilter = () => {
    setToggleFilter((prevToggleFilter) => !prevToggleFilter)
  }
  
  const RegionData = 
  [
    { id: 1, region: 'Africa'},
    { id: 2, region: 'America'},
    { id: 3, region: 'Asia'},
    { id: 4, region: 'Europe'},
    { id: 5, region: 'Oceania'}
  ]

  const Regions = RegionData.map((region) => {
    return (
        <li key={region.id} className='px-[1.5rem] hover:bg-gray-100'>{region.region}</li>
    )
  })
  return (
    <div className='relative hover:cursor-pointer w-[12.5rem] h-[3.5rem] py-4 pl-[1.5rem] pr-[.75rem] flex justify-between items-center rounded-[0.1875rem] shadow-light'
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
    </div>
  )
}

export default Filter