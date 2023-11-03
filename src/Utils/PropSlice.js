import { createSlice } from "@reduxjs/toolkit";

const PropSlice = createSlice({
    name :"prop",
    initialState:{
        propValue:""

    } ,

    reducers : {
        storeValue : (state , action)=>{
            state.propValue = action.payload
        }

    }
})

export const {storeValue} = PropSlice.actions
export default PropSlice.reducer;