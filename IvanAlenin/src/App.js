import React, {createElement} from "react";
import {InputBlock} from "./components/InputBlock";
import {MessageGroup} from "./components/MessageGroup";

//import "./App.css";

// ------ //

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userMessage: '',
            isChanged: 'false'
        }
        this.readMessage = this.readMessage.bind(this);
    }

    readMessage = (message) => {
        // this.state.userMessage === message
        //     ? this.setState({userMessage: message});
        //     : this.state.isChanged = 'true';
        this.state.userMessage === message
            ? this.setState({isChanged: 'false'})
            : this.setState({isChanged: 'true'});
        //this.state.userMessage = message;
        this.setState({userMessage: message});

        console.log('Get:' + this.state.userMessage);
    }


    render() {
        return (
            <div className="App">
                <MessageGroup isAddMessage={this.state.isChanged} message={this.state.userMessage}/>
                <InputBlock readMessage={this.readMessage} on/>
            </div>
        )
    }
}

// ------ //

// function App() {

//     return (
//         <div className="App">
//             <MessageGroup/>
//             <InputBlock/>
//         </div>
//     );
// }


export default App;
