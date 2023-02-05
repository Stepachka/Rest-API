import {useDeliveryList} from "../hooks/DeliveryListGET";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {Loader} from "../components /Loader";
import {Modal} from "../components /Modal";
import {DeliveryListModel} from "../models/DeliveryListModel";
import {DeliveryItem} from "../components /DeliveryItem";
import {CreateTypeDelivery} from "../hooks/CREATEDeliveryList";
import {useOrderInProcessing} from "../hooks/OrderInProcessingGET";
import {OrderInProcessingModel} from "../models/OrderInProcessingModel";
import {OrderInProcessingItem} from "../components /OrderInProcessing";

const styleTd = {
    marginLeft: '20px',
    borderRight: '1px solid #000',
    padding: '10px 10px'
}

export function OrderInProcessingPage() {
    const {orderInProcessing, loading, addOrderInProcessing} = useOrderInProcessing()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (orderInProcessing: OrderInProcessingModel) => {
        close()
        addOrderInProcessing(orderInProcessing)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <table>
                <caption>Delivery List</caption>
                <tr className="border py-2 :px-2 rounded flex-col items-center mb-2">
                    <th style={styleTd}>First name</th>
                    <th style={styleTd}>Last name</th>
                    <th style={styleTd}>Phone number</th>
                    <th style={styleTd}>Type delivery</th>
                    <th style={styleTd}>Delivery status</th>
                </tr>

                {loading && <Loader />}
                {orderInProcessing.map((orderInProcessing, index) => <OrderInProcessingItem orderInProcessing={orderInProcessing} key={index} />)}
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