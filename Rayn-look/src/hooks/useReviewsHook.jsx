import { useState,useEffect } from 'react'
import axios from 'axios'

const useReviewsHook = () => {
    const [reviews, setReviews] = useState([])
    const [reviewLoading , setReviewLoading] = useState(false)

    useEffect(() => {
        setReviewLoading(true)
        axios.get('http://localhost:8080/Review')
        .then((response) => {
            setReviews(response.data)
            setReviewLoading(false)
        }).catch((error) => {
            console.log(error)
            setReviewLoading(false)
        })
     }, [])
     
  return {reviews, reviewLoading}
}

export default useReviewsHook