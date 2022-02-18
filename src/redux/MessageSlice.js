import { createSlice } from '@reduxjs/toolkit';


const messageSlice = createSlice({
    name: 'messages',
    initialState: [
        { id: '1', content: 'Hello' },
        { id: '2', content: 'Hii' },
        { id: '3', content: 'How are you?' },
        { id: '4', content: 'I am fine, and you?' },
        { id: '5', content: 'Good, thanks' },
    ],
    reducers: {
        addMessage(state, action) {
            state.push(action.payload);
        },

        deleteMessage(state, action) {
            return state.filter((message) => message.id !== action.payload)
        }
    }
});

export const { addMessage, deleteMessage } = messageSlice.actions;

export default messageSlice.reducer;

