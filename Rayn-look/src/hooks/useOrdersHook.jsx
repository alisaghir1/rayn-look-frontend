import { useState,useEffect } from 'react'
import axios from 'axios'

const useOrdersHook = () => {
    const [orders, setOrder] = useState([])
    const [orderLoading , setOrderLoading] = useState(false)

    useEffect(() => {
        setOrderLoading(true)
        axios.get('http://localhost:8080/order')
        .then((response) => {
            setOrder(response.data)
            setOrderLoading(false)
        }).catch((error) => {
            console.log(error)
            setOrderLoading(false)
        })
     }, [])
     
  return {orders, orderLoading}
}

export default useOrdersHook