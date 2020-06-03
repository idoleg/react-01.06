import React, {createElement} from "react";
import {InputBlock} from "./components/InputBlock";
import {MessageGroup} from "./components/MessageGroup";

//import "./App.css";

// ------ //

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userMessage: 'none',
            isNewMessage: 'false'
        }
        this.readMessage = this.readMessage.bind(this);
    }

    readMessage = (message) => {
        this.setState({userMessage: message, isNewMessage: 'true'});
    }

    render() {
        let msg;
        {
            if (this.state.isNewMessage === 'true') {
                msg = <MessageGroup message={this.state.userMessage}/>
                this.setState({isNewMessage: 'false'});
            } else
                msg = <MessageGroup message='false'/>
        }


        return (
            <div className="App">
                {msg}
                <InputBlock readMessage={this.readMessage} on/>
                <div id="wwscroll"></div>
            </div>
        // Невидимый элемент, фактически браузер прокручивает его

        )
    }
}

export default App;
