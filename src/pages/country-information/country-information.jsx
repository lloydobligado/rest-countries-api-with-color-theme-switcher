import { Box } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'

const CountryInformationPage = () => {
  const params = useParams();
  console.log(params)

  return (
    <Box>CountryInformationPage</Box>
  )
}

export default CountryInformationPage