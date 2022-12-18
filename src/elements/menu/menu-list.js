import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add, remove, setItemCount, setShowCart } from "../../redux/cart";
import MenuItem from "./menu-item";

export default function MenuList({list}) {

    const dispatch = useDispatch()

    const addItemToCart = (item) => {
        dispatch(add(item))
    }

    const removeItemFromCart = (item) => {
        dispatch(remove(item))
    }

    const openCart = () => {
        dispatch(setShowCart(true))
    }

    return <Container>
        <Row
            className="d-flex flex-nowrap"
            xs={2}
            sm={2}
            md={2}
            lg={3}
            xl={4}

            style={{
                overflow: "auto",
            }}
        >
            {list.map((item, index) => {
                const addToCart = () => {
                    addItemToCart(item)
                }

                const setCountInCart = (count) => {
                    dispatch(setItemCount({...item, count}))
                }

                const removeFromCart = () => {
                    removeItemFromCart(item)
                }

                return <Col key={index}>
                    <MenuItem
                        name={item.name}
                        cost={item.cost}
                        description={item.description}
                        photo={item.photo}
                        addToCart={addToCart}
                        setCountInCart={setCountInCart}
                        removeFromCart={removeFromCart}
                        openCart={openCart}
                    />
                </Col>
            })}
        </Row>
    </Container>
}