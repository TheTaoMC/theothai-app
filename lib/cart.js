"use client"
import { useState, useEffect } from 'react';

export const useCart = () => {
    const [cart, setCart] = useState({ items: [], total: 0 });

    useEffect(() => {
        // ดึงข้อมูลตะกร้าจากฐานข้อมูลหรือ API
        const fetchCart = async () => {
            const cartData = await getCartFromDatabase();
            setCart(cartData);
        };
        fetchCart();
    }, []);

    const addToCart = (item) => {
        // ตรวจสอบว่าสินค้าอยู่ในตะกร้าแล้วหรือไม่
        const existingItem = cart.items.find((i) => i.id === item.id);

        if (existingItem) {
            // หากมีอยู่แล้ว ให้เพิ่มจำนวน
            const updatedItems = cart.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
            const updatedTotal = cart.total + item.price;
            setCart({ items: updatedItems, total: updatedTotal });
        } else {
            // หากยังไม่มี ให้เพิ่มสินค้าใหม่
            const updatedItems = [...cart.items, { ...item, quantity: 1 }];
            const updatedTotal = cart.total + item.price;
            setCart({ items: updatedItems, total: updatedTotal });
        }
    };

    const removeFromCart = (itemId) => {
        // ลบสินค้าออกจากตะกร้า
        const updatedItems = cart.items.filter((i) => i.id !== itemId);
        const updatedTotal = updatedItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        setCart({ items: updatedItems, total: updatedTotal });
    };

    return { cart, addToCart, removeFromCart };
};

export default async function getCurrentCart() {

    // โค้ดสำหรับดึงข้อมูลตะกร้าจากฐานข้อมูลหรือ API
    const cartData = await getCartFromDatabase();
    return cartData;
}