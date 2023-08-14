import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const url = 'https://restcountries.com/v3.1/all'

const Card = () => {

  const [countries, setCountries] = useState([])

  const getCountry = async () => {
    const response = await fetch(url)
    const country  = await response.json()
    setCountries(country)
  }

  useEffect(() => {
    getCountry()
  }, [])


  return (
    <>
    {countries.map((country) => {
        return (
          <Link
            className="flex-shrink-0"
            to={`/country-information/${country.name.common}`}
            key={country.name.common}
          >
            <div className='w-[16.5625rem] h-[20.9375rem] mb-[4.75rem] rounded-[0.1875rem] shadow-light'>
                <div className='flag w-full h-[160px]'>
                    <img className='w-[16.5625rem] h-[160px]  object-center object-cover' src={country.flags.svg} alt={country.name.common} />
                </div>
        
                <div className="card-text px-[1.5rem] pt-[1.70rem]">
                    <h6 className="country text-color-dark-secondary font-roboto text-[1.125rem] font-bold">{country.name.common}</h6>
                    <ul className="country-description h-[64px] mt-[1.20rem] flex flex-col justify-between">
                        <li className='text-color-dark-secondary font-roboto text-[.875rem] font-medium'>Population: <span className='opacity-50 font-normal'>{country.population}</span></li>
                        <li className='text-color-dark-secondary font-roboto text-[.875rem] font-medium'>Region: <span className='opacity-50 font-normal'>{country.region}</span></li>
                        <li className='text-color-dark-secondary font-roboto text-[.875rem] font-medium'>Capital: <span className='opacity-50 font-normal'>{country.capital}</span></li>
                    </ul>
        
                </div>
              </div>
            </Link>
        )
    })}
    </>
  )
}

export default Card