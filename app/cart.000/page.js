import CartPage from './components/CartPage'
import CartManager from './components/CartManager'

export default function Cart() {
    return (
        <div>
            {/* Server Component สำหรับแสดงรายการสินค้า */}
            <CartPage />

            {/* Client Component สำหรับจัดการตะกร้าสินค้า */}
            <CartManager />
        </div>
    )
}