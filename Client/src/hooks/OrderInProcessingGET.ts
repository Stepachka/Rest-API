import {useEffect, useState} from "react";
import axios from "axios";
import {OrderInProcessingModel} from "../models/OrderInProcessingModel";

export function useOrderInProcessing() {

    const [orderInProcessing , setOrderInProcessing] = useState<OrderInProcessingModel[]>([])
    const [loading, setLoading] = useState(false)

    function addOrderInProcessing (orderInProcessing: OrderInProcessingModel) {
        setOrderInProcessing(prev => [...prev, orderInProcessing])
    }

    async function fetchOrderInProcessing() {
        setLoading(true)
        const response = await axios.get<OrderInProcessingModel[]>('http://localhost:8080/api/courierInProcessing')
        setOrderInProcessing(response.data)
        setLoading(false)
    }
    useEffect( () => {
        fetchOrderInProcessing()
    }, [])

    return {orderInProcessing, loading, addOrderInProcessing}
}
