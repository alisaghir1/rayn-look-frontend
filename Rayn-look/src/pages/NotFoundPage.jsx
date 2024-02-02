import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }
  return (
    <body>
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold text-warning2">404</h1>
                <p class="fs-3"> <span class="text-warning1">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <a onClick={handleNavigate} class="btn bg-warning1 w-75">Go Home</a>
            </div>
        </div>
    </body>
  )
}

export default NotFoundPage