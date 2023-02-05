import React, {useState} from "react";
import {MethodPaymentModel} from "../models/methodPaymentModel";

interface methodPaymentProps {
    methodPayment: MethodPaymentModel;
    onDeleteMethodPayment: (id:number) => void;
}
export function MethodPayment({methodPayment, onDeleteMethodPayment}: methodPaymentProps) {


    return (
        <div className="border py-2 :px-2 rounded mb-2"
             style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <p style={{width: "5%"}} >{methodPayment.method_payment}</p>
            <div style={{width: "5%"}}>
                <button
                    onClick={() => methodPayment.id && onDeleteMethodPayment(methodPayment.id)}
                    className="py-2 px-4 border bg-yellow-400 hover:text-white">
                    -
                </button>
            </div>
        </div>

    )
}