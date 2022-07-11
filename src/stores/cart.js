import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        cart: [],
        lastCart: {
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
                totalPrice += prod.precio * prod.quantity;
            });

            return totalPrice.toFixed(2); 
        },
    },
    actions: {
        addToCart(prodObj) {
            prodObj.quantity = 1;
            this.cart.push(prodObj);
        },
        removeFromCart(prodObj) {
            const prodsInCart = this.cart.filter(
                (product) => product.clave !== prodObj.clave
            );

            this.cart = prodsInCart;
        },
        incrementProdQuant(prodObj) {
            this.cart.forEach((prod) => {
                if (prodObj.clave === prod.clave) {
                    prodObj.quantity++;
                }
            });
        },
        decreaseProdQuant(prodObj) {
            this.cart.forEach((prod) => {
                if (prodObj.clave === prod.clave && prod.quantity > 1) {
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
