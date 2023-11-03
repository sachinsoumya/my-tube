import {configureStore} from '@reduxjs/toolkit'
import appSlice from './appSlice';
import SearchSlice from './SearchSlice';
import PropSlice from './PropSlice';
import chatSlice from './chatSlice';

const store = configureStore({
    reducer : {
        app:appSlice , 
        search:SearchSlice ,
        prop:PropSlice ,
        chat:chatSlice
    }
});

export default store 