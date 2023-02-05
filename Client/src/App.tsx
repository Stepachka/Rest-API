import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {MethodPaymentPages} from "./pages/MethodPayment";
import {DeliveryListPage} from "./pages/DeliveryListPage";
import {Navigation} from "./components /Navigation";
import {TypeDeliveryPages} from "./pages/TypeDelivery";
import {OrderInProcessingPage} from "./pages/OrderInProcessingPage";
import {OrderProductPage} from "./pages/OrderProductPage";

function App() {
    return(
        <>
            <Navigation/>
            <Routes>
                <Route path="/methodPayment" element={<MethodPaymentPages />} />
                <Route path="/typeDelivery" element={<TypeDeliveryPages />} />
                <Route path="/deliveryList" element={<DeliveryListPage/>} />
                <Route path="/orderInProcessing" element={<OrderInProcessingPage/>} />
                <Route path="/orderProduct" element={<OrderProductPage/>} />
            </Routes>
        </>

    )
}

export default App;
