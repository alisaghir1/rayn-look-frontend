import { useState,useEffect } from 'react'
import axios from 'axios'

const useCategoriesHook = () => {
    const [categories, setCategory] = useState([])
    const [categoryLoading , setCategoryLoading] = useState(false)

    useEffect(() => {
        setCategoryLoading(true)
        axios.get('http://localhost:8080/category')
        .then((response) => {
            setCategory(response.data)
            setCategoryLoading(false)
        }).catch((error) => {
            console.log(error)
            setCategoryLoading(false)
        })
     }, [])
     
  return {categories, categoryLoading, setCategory}
}

export default useCategoriesHook