import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUB_KEY = "pk_test_51Kg9NkGJzFGi4iKwVf395admRhUu1mmhgpQGiRmPlBYXvITqodSKP6CfY2Dka99miNxvNdO0hwwaAzZswNOp8hl500Ou8x6nyu"

const stripeTestPromise = loadStripe(PUB_KEY);

export default function StripeContainer() {
    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}