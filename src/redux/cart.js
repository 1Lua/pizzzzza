import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        showCart: false,
        items: []
    },

    reducers: {
        
        setShowCart: (state, {payload}) => {
            state.showCart = payload
        },

        add: (state, item) => {
            const exist = state.items.reduce((acc, i) => {
                if(item.payload.id === i.id) {
                    acc = true
                }
                return acc
            }, false)

            const payload = {
                ...item.payload,
                count: 1
            }

            if(! exist) {
                state.items = [...state.items, payload]
            }
        },

        remove: (state, item) => {
            const newArr = []
            state.items.forEach(i => {
                if(i.id !== item.payload.id) {
                    newArr.push(i)
                }
            })
            state.items = newArr
        },

        setItemCount: (state, item) => {
            const newArr = []
            state.items.forEach( i => {
                if(i.id === item.payload.id) {
                    i = item.payload
                }
                newArr.push(i)
            })
            state.items = newArr
        }
    }
})

export const { add, remove, setItemCount, setShowCart} = cartSlice.actions
export default cartSlice.reducer