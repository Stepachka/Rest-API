import {DeliveryListModel} from "../models/DeliveryListModel";
import React from "react";


const styleTd = {
    marginLeft: '20px',
    borderRight: '1px solid #000',
    padding: '10px 10px'
}

interface DeliveryListProps {
    deliveryList:  DeliveryListModel
}

export function DeliveryItem({deliveryList}: DeliveryListProps) {
    return(
        <tr className="border py-2 :px-2 rounded flex-col items-center mb-2"><td style={styleTd}>  {deliveryList.id} </td>
            <td style={styleTd}>   {deliveryList.delivery_status}   </td>
            <td style={styleTd}>   {deliveryList.payment_method}   </td>
            <td style={styleTd}>   {deliveryList.courier_id}   </td >
            <td style={styleTd}>   {deliveryList.order_id}   </td></tr>
    )
}