import CartHeader from "./CartHeader"
import CartList from "./CartList"
import CartTotal from "./CartTotal"

const Cart = () => {
  return (
    <div className="p-3 bg-dark text-white rounded-4">
      <CartHeader />
      <CartList />
      <CartTotal />
    </div>
  )
}

export default Cart