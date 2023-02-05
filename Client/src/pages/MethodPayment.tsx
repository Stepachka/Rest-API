import {useMethodPayment} from "../hooks/MethodPaymentGET";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {MethodPaymentModel} from "../models/methodPaymentModel";
import {Loader} from "../components /Loader";
import {MethodPayment} from "../components /methodPayment";
import {Modal} from "../components /Modal";
import {CreateMethodPayment} from "../hooks/CREATEMethodPayment"

export function MethodPaymentPages() {
    const {methodPayments, loading, addMethodPayment, deleteMethodPayment} = useMethodPayment()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (methodPayment: MethodPaymentModel) => {
        close()
        addMethodPayment(methodPayment)
    }


    return (
        <div className="container mx-auto max-w-2xl pt-5">
            Method payment
            {loading && <Loader />}
            {methodPayments.map(methodPayment => <MethodPayment onDeleteMethodPayment={deleteMethodPayment} methodPayment={methodPayment} key={methodPayment.id} />)}
            {modal && <Modal title="Create new method payment" onClose={close}>
                <CreateMethodPayment onCreate={createHandler}/>
            </Modal>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                onClick={open}
            > + </button>
        </div>
    );
}