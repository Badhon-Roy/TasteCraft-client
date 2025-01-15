import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useCart from "../../../Hook/useCart";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const [ClientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [cart , refetch] = useCart()
    const totalPrice = (cart ?? []).reduce((total, item) => total + item.price, 0);



    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then((res) => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log("Payment error", error);
            setError(error.message)
        }
        else {
            console.log("Payment method", paymentMethod)
            setError('')
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(ClientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log("confirm error", confirmError);
        }
        else {
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                const payment = {
                    email: user.email,
                    name: user.displayName,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    data: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: "pending"
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                refetch();
                if(res.data.paymentResult.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Thank you for your pay.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary my-6" type="submit" disabled={!stripe || !ClientSecret}>
                    Pay
                </button>
                {error && <p className="text-red-600">{error}</p>}
                {transactionId && <p className="text-green-600">Your transaction intent id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;