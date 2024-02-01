
class PaymentStrategy {
    calculateDiscount(amount){}
}

class PayPalPayment extends PaymentStrategy {
    calculateDiscount = (amount) => amount * 0.1
}

class CreditCardPayment extends PaymentStrategy {
    calculateDiscount = (amount) => amount * 0.15
}

class CashOnDeliveryPayment extends PaymentStrategy {
    calculateDiscount = (amount) =>  0;
}

class Shopping {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    calculateDiscount(amount) {
        return this.paymentStrategy.calculateDiscount(amount);
    }
}

const shoppingContext = new Shopping(new PayPalPayment());

const amountToPay = 1900;

console.log(`Discount applied: ${shoppingContext.calculateDiscount(amountToPay)}`);

shoppingContext.setPaymentStrategy(new CreditCardPayment());
console.log(`Discount applied: ${shoppingContext.calculateDiscount(amountToPay)}`);

shoppingContext.setPaymentStrategy(new CashOnDeliveryPayment());
console.log(`Discount applied: ${shoppingContext.calculateDiscount(amountToPay)}`);