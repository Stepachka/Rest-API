import {useEffect, useState} from "react";
import axios from "axios";
import {DeliveryListModel} from "../models/DeliveryListModel";

export function useDeliveryList() {

    const [deliveryList , setDeliveryList] = useState<DeliveryListModel[]>([])
    const [loading, setLoading] = useState(false)

    function addDeliveryList (deliveryList: DeliveryListModel) {
        setDeliveryList(prev => [...prev, deliveryList])
    }

    async function fetchMethodPayment() {
        setLoading(true)
        const response = await axios.get<DeliveryListModel[]>('http://localhost:8080/api/deliveryList')
        setDeliveryList(response.data)
        setLoading(false)
    }
    useEffect( () => {
        fetchMethodPayment()
    }, [])

    return {deliveryList, loading, addDeliveryList}
}
