import React, {createElement} from "react";
import Path from "path";
import {InputBlock} from "./components/InputBlock/InputBlock";
import {MessageGroup} from "./components/MessageGroup/MessageGroup";


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

        console.log(Path.resolve(__dirname));
        console.log(Path.resolve(__dirname, 'public', 'background_2.png'));
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
            <div className="App container-md">
                <div className=" pt-2">
                    <div className="alert alert-info ">
                        <h2>
                            Привет! Попробуй отгадать загадку по JS или просто поболтать с моим ботом))
                        </h2>
                    </div>
                    {msg}
                    <InputBlock readMessage={this.readMessage} on/>
                </div>
            </div>
        )
    }
}

export default App;
