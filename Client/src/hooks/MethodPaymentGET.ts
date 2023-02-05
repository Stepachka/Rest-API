import {useEffect, useState} from "react";
import {MethodPaymentModel} from "../models/methodPaymentModel";
import axios from "axios";

export function useMethodPayment() {

    const [methodPayments , setMethodPayment] = useState<MethodPaymentModel[]>([])
    const [loading, setLoading] = useState(false)

    function addMethodPayment (methodPayment: MethodPaymentModel) {
        setMethodPayment(prev => [...prev, methodPayment])
    }

    const deleteMethodPayment = async (id: number) => {
        await axios.delete('http://localhost:8080/api/methodPayment/' + id);
        fetchMethodPayment();
    }

    async function fetchMethodPayment() {
        setLoading(true)
        const response = await axios.get<MethodPaymentModel[]>('http://localhost:8080/api/methodPayment')
        setMethodPayment(response.data)
        setLoading(false)
    }
    useEffect( () => {
        fetchMethodPayment()
    }, [])

    return {methodPayments, loading, addMethodPayment,deleteMethodPayment}
}
