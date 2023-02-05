import React, {useState} from "react";
import {MethodPaymentModel} from "../models/methodPaymentModel";
import {methodPayments} from "../data/methodPayment";
import axios from "axios";
import {ErrorMessage} from "../components /ErrorMessage";
const methodPaymentData:MethodPaymentModel = {
    method_payment: ''
}


interface CreateMethodPaymentProps {
        onCreate: (methodPayment: MethodPaymentModel) => void
}
export function CreateMethodPayment({onCreate}: CreateMethodPaymentProps) {

    const [value, setValue] =useState('')
    const [error, setError] =useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        methodPaymentData.method_payment = value
        const response = await axios.post<MethodPaymentModel>('http://localhost:8080/api/methodPayment', methodPaymentData)

        onCreate(response.data)
    }
    return(
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value = {value}
                onChange={event => {setValue(event.target.value)}}
            />

            {error && <ErrorMessage error={error} />}
            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}