import { configureStore,createSlice } from "@reduxjs/toolkit";

const initialLoginState = {show:false}

const loginSlice = createSlice(
    {
        name:'login',
        initialState:initialLoginState,
        reducers:{
            toggle(state){
                state.show = !state.show
            }
        }
    }
)

const store = configureStore({reducer:{log:loginSlice.reducer}})
export const loginAction = loginSlice.actions
export default store;
