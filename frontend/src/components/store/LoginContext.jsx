import { configureStore,createSlice } from "@reduxjs/toolkit";

const initialLoginState = {show:false,accessToken:''}

const loginSlice = createSlice(
    {
        name:'login',
        initialState:initialLoginState,
        reducers:{
            toggle(state){
                state.show = !state.show
            },
            postLogin(state,action){
                state.accessToken = action.payload.message
            },
            logout(state){
                state.accessToken = ''
                
            }
        }
    }
)

const store = configureStore({reducer:{log:loginSlice.reducer}})
export const loginAction = loginSlice.actions
export default store;
