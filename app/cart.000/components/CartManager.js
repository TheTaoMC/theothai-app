'use client'

import { useCart } from '@/lib/cart'

export default function CartManager() {
    const { cart, addToCart, removeFromCart } = useCart()

    return (
        <div>
            <ul>
                {cart.items.map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${cart.total}</p>
            {/* แบบฟอร์มสำหรับเพิ่มสินค้าลงในตะกร้า */}
        </div>
    )
}