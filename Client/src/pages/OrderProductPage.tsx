import {useDeliveryList} from "../hooks/DeliveryListGET";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {Loader} from "../components /Loader";
import {Modal} from "../components /Modal";
import {useOrderInProcessing} from "../hooks/OrderInProcessingGET";
import {OrderInProcessingModel} from "../models/OrderInProcessingModel";
import {OrderInProcessingItem} from "../components /OrderInProcessing";
import {useOrderProduct} from "../hooks/OrderProductGET";
import {OrderProductModel} from "../models/OrderProduct";
import {OrderProductItem} from "../components /OrderProduct";

const styleTd = {
    marginLeft: '20px',
    borderRight: '1px solid #000',
    padding: '10px 10px'
}

export function OrderProductPage() {
    const {orderProduct, loading, addOrderProduct} = useOrderProduct()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (orderProduct: OrderProductModel) => {
        close()
        addOrderProduct(orderProduct)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <table>
                <caption>Delivery List</caption>
                <tr className="border py-2 :px-2 rounded flex-col items-center mb-2">
                    <th style={styleTd}>First name</th>
                    <th style={styleTd}>Last name</th>
                    <th style={styleTd}>Phone number</th>
                    <th style={styleTd}>District</th>
                    <th style={styleTd}>House</th>
                    <th style={styleTd}>Apartment</th>
                    <th style={styleTd}>Date get</th>
                    <th style={styleTd}>Status order</th>
                    <th style={styleTd}>Menu</th>
                    <th style={styleTd}>Price</th>
                    <th style={styleTd}>Quantity</th>
                </tr>

                {loading && <Loader />}
                {orderProduct.map((orderProduct, index) => <OrderProductItem orderProduct={orderProduct} key={index} />)}
            </table>
            {modal && <Modal title="Create new method payment" onClose={close}>
                {/* {<CreateTypeDelivery onCreate={createHandler}/>}*/}
            </Modal>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                onClick={open}
            > + </button>
        </div>
    );

}