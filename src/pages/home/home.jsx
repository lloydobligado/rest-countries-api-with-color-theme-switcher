import React from 'react';
import Searchbar from '../../components/searchbar/searchbar';
import Filter from '../../components/filter/filter';
import Card from '../../components/card/card';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const region = location.pathname.includes('/region/') ? location.pathname.split('/region/')[1] : null;

  return (
    <Box className='mx-[30px] md:mx-[5rem]'>
      <Box className='mt-[2.94rem] flex justify-between flex-col md:flex-row'>
          <Searchbar/>
          <Filter/>
      </Box>
      <Box className='mt-[3.05rem] flex flex-wrap justify-between max-sm:justify-center'>
          <Card/>
      </Box>
    </Box> 
  )
}

export default HomePage