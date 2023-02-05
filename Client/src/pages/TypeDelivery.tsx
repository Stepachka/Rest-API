import {useMethodPayment} from "../hooks/MethodPaymentGET";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {MethodPaymentModel} from "../models/methodPaymentModel";
import {Loader} from "../components /Loader";
import {Modal} from "../components /Modal";
import {useTypeDelivery} from "../hooks/TypeDelivetyGET";
import {DeliveryListModel} from "../models/TypeDeliveryModel";
import {TypeDelivery} from "../components /TypeDelivery";
import {CreateTypeDelivery} from "../hooks/CREATETypeDelivery";

export function TypeDeliveryPages() {
    const {typesDelivery, loading, addTypeDelivery} = useTypeDelivery()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (typeDelivery: DeliveryListModel) => {
        close()
        addTypeDelivery(typeDelivery)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <p className="mb-4">Type delivery</p>
            {loading && <Loader />}
            {typesDelivery.map(typeDelivery => <TypeDelivery typeDelivery={typeDelivery} key={typeDelivery.id} />)}
            {modal && <Modal title="Create new method payment" onClose={close}>
               { <CreateTypeDelivery onCreate={createHandler}/>}
            </Modal>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                onClick={open}
            > + </button>
        </div>
    );
}