import React from 'react'
import { ROUTES } from '../../utils/constants'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div>NotFound</div>
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