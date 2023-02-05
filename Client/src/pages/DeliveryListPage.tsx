import {useDeliveryList} from "../hooks/DeliveryListGET";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {Loader} from "../components /Loader";
import {Modal} from "../components /Modal";
import {DeliveryListModel} from "../models/DeliveryListModel";
import {DeliveryItem} from "../components /DeliveryItem";
import {CreateTypeDelivery} from "../hooks/CREATEDeliveryList";

const styleTd = {
    marginLeft: '20px',
    borderRight: '1px solid #000',
    padding: '10px 10px'
}

export function DeliveryListPage() {
    const {deliveryList, loading, addDeliveryList} = useDeliveryList()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (deliveryList: DeliveryListModel) => {
        close()
        addDeliveryList(deliveryList)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <table>
                <caption>Delivery List</caption>
                <tr className="border py-2 :px-2 rounded flex-col items-center mb-2">
                    <th style={styleTd}>id</th>
                    <th style={styleTd}>payment_method</th>
                    <th style={styleTd}>delivery_status</th>
                    <th style={styleTd}>courier_id</th>
                    <th style={styleTd}>order_id</th>
                </tr>

            {loading && <Loader />}
            {deliveryList.map(deliveryItem => <DeliveryItem deliveryList={deliveryItem} key={deliveryItem.id} />)}
            </table>
                {modal && <Modal title="Create new method payment" onClose={close}>
                {<CreateTypeDelivery onCreate={createHandler}/>}
            </Modal>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                onClick={open}
            > + </button>
        </div>
    );

}