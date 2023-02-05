import {useEffect, useState} from "react";
import axios from "axios";
import {DeliveryListModel} from "../models/TypeDeliveryModel";

export function useTypeDelivery() {

    const [typesDelivery , setTypeDelivery] = useState<DeliveryListModel[]>([])
    const [loading, setLoading] = useState(false)

    function addTypeDelivery (TypeDelivery: DeliveryListModel) {
        setTypeDelivery(prev => [...prev, TypeDelivery])
    }

    async function fetchTypeDelivery() {
        setLoading(true)
        const response = await axios.get<DeliveryListModel[]>('http://localhost:8080/api/typeDelivery')
        setTypeDelivery(response.data)
        setLoading(false)
    }
    useEffect( () => {
        fetchTypeDelivery()
    }, [])

    return {typesDelivery, loading, addTypeDelivery}
}
