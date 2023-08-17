import React from 'react'
import { useParams } from 'react-router-dom'
import { useCountriesApi } from '../../services/rest-counties'
import ButtonComponent from '../../components/button/button';
import { Box, Button, CardMedia, CircularProgress } from '@mui/material';

const CountryInformationPage = () => {
  const params = useParams();

  const { useGetCountry } = useCountriesApi();

  const { data: details, isLoading } = useGetCountry(params.country);

  const countryDetails = details && details[0];

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }} className="h-full w-full flex justify-center">
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box className="w-full h-full px-20">
        <Box className="my-20">
          <ButtonComponent />
        </Box>
        <Box className="flex justify-between items-center">
          <CardMedia
            className="max-w-[555px] h-[400px]"
            component="img"
            image={countryDetails?.flags?.png}
            alt={countryDetails?.name?.common}
          />
          <Box className="w-[571px] h-[320px] flex flex-col justify-between">
            <h3 className="font-roboto font-extrabold text-[32px]">{countryDetails?.name?.common}</h3>

            <Box className="w-full flex !font-roboto !text-[#121214] !text-[16px] !font-normal">
                <Box className="w-1/2">
                  <p className="my-[6.5px]"> Native Name:      <span className="opacity-50">{countryDetails?.name?.common}</span> </p>
                  <p className="my-[6.5px]"> Population:       <span className="opacity-50">{countryDetails?.population.toLocaleString()}</span> </p>
                  <p className="my-[6.5px]"> Region:           <span className="opacity-50">{countryDetails?.region}</span> </p>
                  <p className="my-[6.5px]"> Sub Region:       <span className="opacity-50">{countryDetails?.subregion}</span> </p>
                  <p className="my-[6.5px]"> Capital:          <span className="opacity-50">{countryDetails?.capital}</span> </p>
                </Box>
                <Box className="w-1/2">
                  <p className="my-[6.5px]"> Top Level Domain: <span className="opacity-50">{countryDetails?.tld}</span> </p>
                  <p className="my-[6.5px]"> Currencies:       <span className="opacity-50">{Object.values(countryDetails?.currencies)?.[0]?.name}</span> </p>
                  <p className="my-[6.5px]"> Languages:        <span className="opacity-50">{Object.values(countryDetails?.languages)?.join(', ')}</span> </p>
                </Box>
              </Box>

            <Box className="flex items-center">
              <p className="mr-[13px] !font-roboto !text-[#121214] !text-[16px] !font-normal">Border Countries:</p>
              <Box>
                {countryDetails?.borders?.map((borderCountry) => (
                  <Button
                    key={borderCountry}
                    className="!m-[5px] !px-[27px] !h-[26px] !text-[#121214] !text-[14px] !font-normal shadow-light"
                    variant="text"
                  >
                    {borderCountry}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default CountryInformationPage