import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage } from '../../redux/MessageSlice';
import './Chat.css';


const Chat = () => {
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();


    const messagesList = messages.map(message => (
        <div className='msg-list' key={messages.id} >
            <p className='msg-content' onClick={() => dispatch(deleteMessage(message.id))}>{message.content}</p>
        </div>
    ));

    return (
        <div className='message-list'>
            {messagesList}
        </div>
    );
}

export default Chat;