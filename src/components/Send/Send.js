import React, { useState } from 'react';
import { Dispatch } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addMessage } from '../../redux/MessageSlice';
import { useDispatch } from 'react-redux';
import './Send.css';



const Send = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
        if (content) {
            dispatch(
                addMessage({
                    content
                })
            )
            setContent('');
        };
    }


    const handleChange = e => setContent(e.target.value);


    const handleClick = () => {
        if (content) {
            dispatch(
                addMessage({
                    id: nanoid(),
                    content,
                })
            )
            setContent('');
        }
    }


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type='text'
                    className='send-input'
                    placeholder='Your message...'
                    value={content}
                    onChange={handleChange}
                ></input>
                <button onClick={handleClick} className='btn'>
                    ➤
                </button>
            </form>
        </div>
    );
};

export default Send;