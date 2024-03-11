import CartNavbar from './components/CartNavbar.js'

export default function CartLayout({ children }) {
  return (
    <div>
      <CartNavbar />
      {children}
    </div>
  )
}