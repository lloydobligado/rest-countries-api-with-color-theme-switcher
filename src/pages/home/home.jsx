import React from 'react'
import Searchbar from '../../components/searchbar/searchbar'
import Filter from '../../components/filter/filter'
import Card from '../../components/card/card'

const HomePage = () => {
  return (
    <div className='mx-[5rem]'>
        <div className='mt-[2.94rem] flex flex-wrap justify-between'>
            <Searchbar/>
            <Filter/>
        </div>
        <div className='mt-[3.05rem] flex flex-wrap justify-between '>
            <Card/>
        </div>
    </div> 
  )
}

export default HomePage