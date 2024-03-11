// app/store.js
import { create } from 'zustand';

const useStore = create((set, get) => ({
    cart: [],
    /* addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })), */
    addToCart: (item) => {
        set((state) => {
            const existingItem = state.cart.find((i) => i.name === item.name);

            if (existingItem) {
                /*                 const updatedCart = state.cart.map((i) =>
                                    i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
                                );
                                return { cart: updatedCart }; */
                const itemIndex = state.cart.findIndex((i) => i.name === item.name);
                const updatedCart = [...state.cart];
                updatedCart[itemIndex] = { ...updatedCart[itemIndex], quantity: updatedCart[itemIndex].quantity + 1 };
                return { cart: updatedCart };
            } else {
                return { cart: [...state.cart, { ...item }] };
            }
        });
    },
    removeFromCart: (itemIndex) =>
        set((state) => ({
            cart: state.cart.filter((item, index) => index !== itemIndex),
        })),
}));

export default useStore;