// src/pages/home/RegionPage.js
import React from 'react';
import Card from '../../components/card/card';
import Searchbar from '../../components/searchbar/searchbar';
import Filter from '../../components/filter/filter';
import { Box } from '@mui/material';

const RegionPage = () => {

  return (
    
    <Box className='mx-[30px] md:mx-[5rem]'>
      <Box className='mt-[2.94rem] flex justify-between flex-col md:flex-row'>
        <Searchbar/>
        <Filter/>
    </Box>
      <Box className='mt-[3.05rem] flex flex-wrap justify-between max-sm:justify-center'>
        <Card />
      </Box>
    </Box>
  );
};

export default RegionPage;
