import React from 'react'
import { useParams } from 'react-router-dom'

const CountryInformationPage = () => {
  const params = useParams();
  console.log(params)

  return (
    <div>CountryInformationPage</div>
  )
}

export default CountryInformationPage