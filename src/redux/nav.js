
import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
    name: "nav",
    initialState: {
        navs: {}
    },

    reducers: {
        
        addNav: (state, {payload}) => {
            const {key, navFunc} = payload
            state.navs[key] = navFunc
        },

        getNav: (state, {payload}) => {
            
        }

    }
})

export const { addNav, getNav} = navSlice.actions
export default navSlice.reducer