import {configureStore} from '@reduxjs/toolkit'
import appSlice from './appSlice';
import SearchSlice from './SearchSlice';
import PropSlice from './PropSlice';
import chatSlice from './chatSlice';
import SearchValue from './SearchValue';
import statSlice from './statSlice';

const store = configureStore({
    reducer : {
        app:appSlice , 
        search:SearchSlice ,
        prop:PropSlice ,
        chat:chatSlice ,
        searchValue:SearchValue,
        statistics :statSlice ,
    }
});

export default store 