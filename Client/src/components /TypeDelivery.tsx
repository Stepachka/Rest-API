import React, {useState} from "react";
import {DeliveryListModel} from "../models/TypeDeliveryModel";

interface TypeDeliveryProps {
    typeDelivery: DeliveryListModel
}
export function TypeDelivery({typeDelivery}: TypeDeliveryProps) {


    return (
        <div className="border py-2 :px-2 rounded flex flex-col items-center mb-2">
            <p>{typeDelivery.type_delivery}</p>
        </div>

    )
}