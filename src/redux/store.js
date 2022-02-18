import { configureStore } from '@reduxjs/toolkit';

import messageReducer from './MessageSlice';

export default configureStore({
    reducer: {
        messages: messageReducer
    }
});

