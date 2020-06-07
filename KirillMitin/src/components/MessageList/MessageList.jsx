import React from 'react'
import Message from '../Message/Message'

export const MessageList = ({ Message }) => (
    <ul>
        {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>
)