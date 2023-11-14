import { createSlice } from "@reduxjs/toolkit";

const statSlice = createSlice({
    name:"statistics" ,
    initialState : {
        statistics : ""

    },

    reducers : {

        addLike : (state ,action)=>{

            state.statistics = action.payload

        }

    }
})
export const {addLike} = statSlice.actions;
export default statSlice.reducer;
