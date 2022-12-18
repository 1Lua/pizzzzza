import { useState } from "react";
import { Button, Form, Modal, Tab, Tabs } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setItemCount, remove, setShowCart } from "../../redux/cart"
import CartItem from "./cart-item"

export default function CartModal({items, showCart, sum}) {
    const [tab, setTab] = useState('items');
    const navs = useSelector(state => state.nav.navs)
    const dispatch = useDispatch()

    const goToMenu = () => {
        dispatch(setShowCart(false))
        const navFunc = navs.menu
        if(navFunc) {
            navFunc()
        }
    } 

    return <Modal
        show={showCart}
        onHide={() => {
            dispatch(setShowCart(false))
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Корзина
            </Modal.Title>
        </Modal.Header>

        <Tabs
            defaultActiveKey="items"
            activeKey={tab}
            onSelect = {(k) => {setTab(k)}}
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="items" title="Заказ">
                <div style={{
                    maxHeight: "70vh",
                    overflowY: "auto"
                }}>
                    <Modal.Body>
                        {items.length > 0 ? items.map(item => {
                            return <CartItem 
                                payload={item} 
                                key={item.id}
                                remove={()=> {
                                    dispatch(remove(item))
                                }}
                                setCount={(count) => {
                                    dispatch(setItemCount({...item, count}))
                                }}
                            />
                        }) : <div className="d-flex flex-column pt-5 pb-5 align-items-center">
                            <div>Вы еще ничего не добавили :)</div>
                            <Button
                                variant="outline-dark"
                                className="mt-2"
                                onClick={goToMenu}
                            >Перейти в меню</Button>
                        </div>}
                    </Modal.Body>
                </div>
                <Modal.Footer className="d-flex justify-content-between">
                    <h3>Итого: {sum}</h3>
                    <Button
                        variant="outline-danger" 
                        onClick={()=>{
                            setTab("delivery")
                        }}
                    >Оформить доставку</Button>
                </Modal.Footer>
            </Tab>
            
            
            <Tab eventKey="delivery" title="Доставка">
                <div style={{
                    maxHeight: "70vh",
                    overflowY: "auto"
                }}>
                    <Modal.Body>
                        <Form>
                            <div>Укажите данные:</div>
                            
                            <div className="mt-2 d-flex">
                                <Form.Control
                                    placeholder="Ваше имя"
                                    type="text"
                                />
                                <Form.Control
                                    className="ms-2"
                                    placeholder="Ваш номер телефона"
                                    type="text"
                                />
                            </div>

                            <div className="mt-2">Способ оплаты:</div>

                            <div className="mt-2">
                                <Form.Check
                                    inline
                                    label="Наличными"
                                    group="group1"
                                    id="paymant-1"
                                />
                                <Form.Check
                                    inline
                                    label="По карте"
                                    group="group1"
                                    id="paymant-2"
                                />
                            </div>

                            <div className="mt-2">Адрес:</div>
                            
                            <div className="d-flex mt-2">
                                <Form.Control
                                    placeholder="Улица"
                                    type="text"
                                />
                                <Form.Control
                                    className="ms-2"
                                    placeholder="Дом"
                                    type="text"
                                />
                            </div>

                            <div className="d-flex mt-2">
                                <Form.Control
                                    placeholder="Подъезд"
                                    type="text"
                                />
                                <Form.Control
                                    className="ms-2"
                                    placeholder="Этаж"
                                    type="text"
                                />
                                <Form.Control
                                    className="ms-2"
                                    placeholder="Квартира"
                                    type="text"
                                />
                            </div>
                            <div className="mt-2">Комментарий:</div>
                            <Form.Control
                                className="mt-2"
                                type="text"
                            />
                        </Form>
                    </Modal.Body>
                </div>
                <Modal.Footer className="d-flex justify-content-between">
                    <h3>Итого: {sum}</h3>
                    <Button
                        variant="outline-danger" 
                        onClick={()=>{
                            
                        }}
                    >Подтвердить</Button>
                </Modal.Footer>
            </Tab>
        </Tabs>
    </Modal>
}