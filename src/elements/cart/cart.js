import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../../redux/cart";
import CartModal from "./cart-modal";
import CartOffcanvas from "./cart-offcanvas";


export default function Cart() {

    const items = useSelector(state => state.cart.items)
    const showCart = useSelector(state => state.cart.showCart)
    const dispatch = useDispatch()
    
    const [showCartOffcanvas, setShowCartOffcanvas] = useState(false)
    const [sum, setSum] = useState(0)

    useEffect(() => {
        const sum = items.reduce((acc, item) => acc + item.cost * item.count, 0)
        setSum(sum)
    }, [items])

    useEffect(()=> {
        setShowCartOffcanvas(sum > 0 && !showCart)
    }, [sum, showCart])

    const closeCartOffCanvas = () => {
        setShowCartOffcanvas(false)
    }

    const openCart = () => {
        dispatch(setShowCart(true))
    }

    return <>
        <CartModal 
            items={items}
            showCart={showCart}
            sum={sum}
        />
        <CartOffcanvas 
            show={showCartOffcanvas} 
            handleClose={closeCartOffCanvas}
            sum={sum}
            openCart={openCart}
        />
    </>
}