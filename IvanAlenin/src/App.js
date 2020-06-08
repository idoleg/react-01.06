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
            <div className="App container">
                <div className="row no-gutters d-none d-md-flex">

                    <div className="flex-grow-1 px-2 text-center m-auto"><span className="h3">Title</span></div>


                    <div className="border-left">
                        <button className=" btn btn-outline-primary px-4 py-2" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>


                </div>
                <div className="row no-gutters overflow-hidden d-flex h-100">
                    <div className="ContactTab col-md-4 d-none d-md-flex flex-column">
                        <div className="alert">
                            <h2>
                                Header
                            </h2>
                        </div>
                        <div className="ContactGroup">
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>
                            <div className="alert">
                                <h2>
                                    Bla lalalaldkfjjkf
                                </h2>
                            </div>

                        </div>

                    </div>
                    <div className="MessageTab col-md-8 pt-2 d-flex flex-column">
                        <div className="MessageTabHead mb-auto">
                            <h2>
                                THis place for chat name, button prop and etc
                            </h2>

                        </div>

                        {msg}
                        <InputBlock readMessage={this.readMessage} on/>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;
