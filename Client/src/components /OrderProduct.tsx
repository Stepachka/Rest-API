import React from "react";
import {OrderProductModel} from "../models/OrderProduct";


const styleTd = {
    marginLeft: '20px',
    borderRight: '1px solid #000',
    padding: '10px 10px'
}

interface OrderProductsProps {
    orderProduct:  OrderProductModel
}

export function OrderProductItem({orderProduct}: OrderProductsProps) {
    return(
        <tr className="border py-2 :px-2 rounded flex-col items-center mb-2">
            <td style={styleTd}>  {orderProduct.first_name} </td>
            <td style={styleTd}>   {orderProduct.last_name}   </td>
            <td style={styleTd}>   {orderProduct.phone_number}   </td>
            <td style={styleTd}>   {orderProduct.district}   </td >
            <td style={styleTd}>   {orderProduct.house}   </td>
            <td style={styleTd}>   {orderProduct.apartment}   </td>
            <td style={styleTd}>   {orderProduct.date_get}   </td>
            <td style={styleTd}>   {orderProduct.status_order}   </td>
            <td style={styleTd}>   {orderProduct.menu}   </td>
            <td style={styleTd}>   {orderProduct.price}   </td>
            <td style={styleTd}>   {orderProduct.quantity}   </td>
        </tr>
    )
}