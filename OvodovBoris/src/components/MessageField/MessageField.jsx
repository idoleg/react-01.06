import React from 'react';


export default class MessageField extends React.Component {

    render() {
        return <div>
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    }
}
