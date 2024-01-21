import { useState,useEffect } from 'react'
import axios from 'axios'

const useProductsHook = () => {
    const [products, setProducts] = useState([])
    const [productLoading , setProductLoading] = useState(true)

    useEffect(() => {
        setProductLoading(true)
        axios.get('http://localhost:8080/product')
        .then((response) => {
            setProducts(response.data)
            setProductLoading(false)
        }).catch((error) => {
            console.log(error)
            setProductLoading(false)
        })
     }, [])
     
  return {products, productLoading}
}

export default useProductsHook