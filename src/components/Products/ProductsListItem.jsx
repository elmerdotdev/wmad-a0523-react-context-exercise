import ListGroupItem from "react-bootstrap/ListGroupItem"
import Button from 'react-bootstrap/Button'

const ProductsListItem = () => {
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <span></span>
      <Button>Add to Cart</Button>
    </ListGroupItem>
  )
}

export default ProductsListItem