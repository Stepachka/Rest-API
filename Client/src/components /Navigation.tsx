import React from 'react'
import {Link} from 'react-router-dom'

const styleLink = {
    border: '1px solid #FF992A',
    background: '#FF992A',
    padding: '5px 7px',
    borderRadius: '5px'
}

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-black items-center text-white">
            <span className="font-bold">Delivery</span>
            <span>
        <Link to="/methodPayment" style={styleLink} className="mr-2 hover:text-black">Method Payment</Link>
        <Link to="/typeDelivery" style={styleLink} className="mr-2 hover:text-black">Type Delivery</Link>
        <Link to="/deliveryList" style={styleLink} className="mr-2 hover:text-black">Delivery List</Link>
        <Link to="/orderInProcessing" style={styleLink} className="mr-2 hover:text-black">Order in processing</Link>
        <Link to="/orderProduct" style={styleLink} className="mr-2 hover:text-black">Order product</Link>
      </span>
        </nav>
    )
}