import React from 'react'
import Navbar from './components/nav/navbar'
import Searchbar from './components/searchbar/searchbar'
import Filter from './components/filter/filter'
import Card from './components/card/card'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='mx-[5rem]'>
        <div className='mt-[2.94rem] flex flex-wrap justify-between'>
          <Searchbar/>
          <Filter/>
        </div>
        <div className='mt-[3.05rem] flex flex-wrap justify-between '>
          <Card/>
        </div>
      </div>
    </>
  )
}

export default App
