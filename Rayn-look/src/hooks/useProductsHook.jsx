import { useState,useEffect } from 'react'
import axios from 'axios'

const useProductsHook = () => {
    const [products, setProducts] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:8080/product')
        .then((response) => {
            setProducts(response.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
     }, [])
     
  return products
}

export default useProductsHook