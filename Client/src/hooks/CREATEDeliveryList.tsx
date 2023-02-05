import React, {useState} from "react";
import {methodPayments} from "../data/methodPayment";
import axios from "axios";
import {ErrorMessage} from "../components /ErrorMessage";
import {DeliveryListModel} from "../models/DeliveryListModel";


const DeliveryListData:DeliveryListModel = {
    payment_method: 2,
    delivery_status: '',
    courier_id: 5,
    order_id: 21

}


interface CREATETypeDeliveryProps {
    onCreate: (typeDeliveryModel: DeliveryListModel) => void
}
export function CreateTypeDelivery({onCreate}: CREATETypeDeliveryProps) {

    const [value, setValue] =useState('')
    const [error, setError] =useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        DeliveryListData.delivery_status = value
        const response = await axios.post<DeliveryListModel>('http://localhost:8080/api/deliveryList', DeliveryListData)

        onCreate(response.data)
    }
    return(
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter delivery status..."
                value = {value}
                onChange={event => {setValue(event.target.value)}}
            />

            {error && <ErrorMessage error={error} />}
            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}