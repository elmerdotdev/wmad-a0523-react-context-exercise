import { Col, Container, Row } from "react-bootstrap"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"

const App = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Products />
        </Col>
        <Col>
          <Cart />
        </Col>
      </Row>
    </Container>
  )
}

export default App