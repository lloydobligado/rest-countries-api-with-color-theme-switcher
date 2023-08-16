import React from 'react'
import Searchbar from '../../components/searchbar/searchbar'
import Filter from '../../components/filter/filter'
import Card from '../../components/card/card'
import { Box } from '@mui/material'

const HomePage = () => {
  return (
    <Box className='mx-[5rem]'>
        <Box className='mt-[2.94rem] flex flex-wrap justify-between'>
            <Searchbar/>
            <Filter/>
        </Box>
        <Box className='mt-[3.05rem] flex flex-wrap justify-between '>
            <Card/>
        </Box>
    </Box> 
  )
}

export default HomePage