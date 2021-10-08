import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({price})=> {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JiC2VGDfeuEXf81DGMApVXMbrLbjK3prS6VmSsZK6EHcrbJocYmepb1NK3MKHYGROhKIkhfA8WSrh56zsXl1Ohf00vyobth9n';
    const onToken = token =>{
            console.log(token);
            alert('PAYMENT WAS SUCCESSFUL');

        };
    return (
        <StripeCheckout
            label= 'PAY NOW'
            name= 'Asap Biggie Store'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            panelLabel='PAY NOW'
            stripeKey={publishableKey}
        />
    );
    };

    export default StripeCheckOutButton;