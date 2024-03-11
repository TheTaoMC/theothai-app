import getCurrentCart from '../../../cart'

export default async function CartPage() {
    const cart = await getCurrentCart()

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cart.items.map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total: ${cart.total}</p>
        </div>
    )
}