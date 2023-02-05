import React from "react";
import {OrderInProcessingModel} from "../models/OrderInProcessingModel";


const styleTd = {
    marginLeft: '20px',
    borderRight: '1px solid #000',
    padding: '10px 10px'
}

interface OrderInProcessingProps {
    orderInProcessing:  OrderInProcessingModel
}

export function OrderInProcessingItem({orderInProcessing}: OrderInProcessingProps) {
    return(
        <tr className="border py-2 :px-2 rounded flex-col items-center mb-2">
            <td style={styleTd}>  {orderInProcessing.first_name} </td>
            <td style={styleTd}>   {orderInProcessing.last_name}   </td>
            <td style={styleTd}>   {orderInProcessing.phone_number}   </td>
            <td style={styleTd}>   {orderInProcessing.type_delivery}   </td >
            <td style={styleTd}>   {orderInProcessing.delivery_status}   </td></tr>
    )
}