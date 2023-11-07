import {configureStore} from '@reduxjs/toolkit'
import appSlice from './appSlice';
import SearchSlice from './SearchSlice';
import PropSlice from './PropSlice';
import chatSlice from './chatSlice';
import SearchValue from './SearchValue';

const store = configureStore({
    reducer : {
        app:appSlice , 
        search:SearchSlice ,
        prop:PropSlice ,
        chat:chatSlice ,
        searchValue:SearchValue
    }
});

export default store 