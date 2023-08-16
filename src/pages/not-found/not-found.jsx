import React from 'react'
import { ROUTES } from '../../utils/constants'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

const NotFound = () => {
  return (
    <>
        <Box>NotFound</Box>
        <Link 
            className="bg-red-500"
            to={ROUTES.HOME}
        >
            BACK
        </Link>

    </>
  )
}

export default NotFound