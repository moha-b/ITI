const User = require('../lab2.js');

describe('User class', () => {
    let user;

    beforeEach(() => {
        user = new User('mohab', 'pass123');
    });

    describe('addToCart method', () => {
        it('should add a product to the cart array', () => {
            const product = { name: 'Product A', price: 50 };
            user.addToCart(product);

            expect(user.cart.length).toBe(1);
            expect(user.cart[0]).toEqual(product);
        });
    });

    describe('calculateTotalCartPrice method', () => {
        it('should return the correct total cart price', () => {
            const products = [
                { name: 'Product A', price: 50 },
                { name: 'Product B', price: 30 },
                { name: 'Product C', price: 20 }
            ];

            products.forEach(product => user.addToCart(product));

            const totalPrice = user.calculateTotalCartPrice();
            expect(totalPrice).toBe(100); // 50 + 30 + 20 = 100
        });
    });

    describe('checkout method', () => {
        it('should call paymentModel methods and return true if payment is verified', () => {
            const paymentModel = {
                goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
                returnBack: jasmine.createSpy('returnBack'),
                isVerify: jasmine.createSpy('isVerify').and.returnValue(true)
            };

            const result = user.checkout(paymentModel);

            expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
            expect(paymentModel.returnBack).toHaveBeenCalled();
            expect(paymentModel.isVerify).toHaveBeenCalled();
            expect(result).toBe(true);
        });

        it('should return false if payment is not verified', () => {
            const paymentModel = {
                goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
                returnBack: jasmine.createSpy('returnBack'),
                isVerify: jasmine.createSpy('isVerify').and.returnValue(false)
            };

            const result = user.checkout(paymentModel);

            expect(result).toBe(false);
        });
    });
});