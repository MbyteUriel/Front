import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        cart: [],
        lastCart: {
            // The cart that was bought before the actual cart. Used when buying a new cart
            id: 0,
            totalPrice: 0,
            products: [],
        },
    }),
    getters: {
        getCartLength: (state) => state.cart.length,
        getTotalPrice: (state) => {
            let totalPrice = 0;

            state.cart.forEach((prod) => {
                totalPrice += prod.price * prod.quantity;
            });

            return totalPrice.toFixed(2); // toFixed(2) limits the decimals to only 2
        },
    },
    actions: {
        addToCart(prodObj) {
            prodObj.quantity = 1;
            this.cart.push(prodObj);
        },
        removeFromCart(prodObj) {
            const prodsInCart = this.cart.filter(
                (product) => product.id !== prodObj.id
            );

            this.cart = prodsInCart;
        },
        incrementProdQuant(prodObj) {
            this.cart.forEach((prod) => {
                if (prodObj.id === prod.id) {
                    prodObj.quantity++;
                }
            });
        },
        decreaseProdQuant(prodObj) {
            this.cart.forEach((prod) => {
                if (prodObj.id === prod.id && prod.quantity > 1) {
                    prodObj.quantity--;
                }
            });
        },
        setLastCart(newCartId) {
            this.lastCart.id = newCartId;
            this.lastCart.products = this.cart;
            this.lastCart.totalPrice = this.getTotalPrice;
            this.cart = [];
        },
    },
    persist: true,
});
