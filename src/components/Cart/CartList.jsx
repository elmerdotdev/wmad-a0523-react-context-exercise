import ListGroup from "react-bootstrap/ListGroup"
import CartListItem from "./CartListItem"

const CartList = () => {
  return (
    <ListGroup variant="flush" className="mt-3 mb-4">
      <CartListItem />
    </ListGroup>
  )
}

export default CartList