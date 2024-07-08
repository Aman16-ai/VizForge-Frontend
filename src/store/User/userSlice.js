import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "../../service/user/index";

export const userDetailsThunk = createAsyncThunk('userDetails/userDetails',async(thunkApi) => {
    try {
        console.log('running thunk')
        const result = await getUserDetails()
        console.log('thunk result ---->',result)
        return result
    }
    catch(err) {
        return thunkApi.rejectWithValue
    }
})
export const userSlice = createSlice({
    name:"user",
    initialState : {
        userData : {},
        isAuthenticated : false
    },
    reducers : {
        setIsAuthenticated : (state,action) => {
            state.isAuthenticated = action.payload
        }
    },
    extraReducers : {
        [userDetailsThunk.fulfilled] : (state,action) => {
            console.log('user data thunk --------> ',action.payload)
            state.userData = action.payload
            state.isAuthenticated = true
        },
        [userDetailsThunk.rejected] : (state,action) => {
            state.userData = null
            state.isAuthenticated = false
        }
    }
})

export const {setIsAuthenticated} = userSlice.actions
export const selectUserData = (state) => state.user.userData
export const selectIsAuthenticated = (state) => state.user.isAuthenticated
export default userSlice.reducer