// app/cart/components/CartNavbar.js
'use client'

import Link from 'next/link'
import { useCart } from '@/lib/cart'

export default function CartNavbar() {
    const { cart } = useCart()

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/cart">
                        Cart ({cart.items.length})
                    </Link>
                </li>
            </ul>
        </nav>
    )
}