import {useEffect, useState} from "react";
import axios from "axios";
import {OrderProductModel} from "../models/OrderProduct";

export function useOrderProduct() {

    const [orderProduct , setOrderProduct] = useState<OrderProductModel[]>([])
    const [loading, setLoading] = useState(false)

    function addOrderProduct (orderProduct: OrderProductModel) {
        setOrderProduct(prev => [...prev, orderProduct])
    }

    async function fetchOrderProduct() {
        setLoading(true)
        const response = await axios.get<OrderProductModel[]>('http://localhost:8080/api/orderProduct')
        setOrderProduct(response.data)
        setLoading(false)
    }
    useEffect( () => {
        fetchOrderProduct()
    }, [])

    return {orderProduct, loading, addOrderProduct}
}
