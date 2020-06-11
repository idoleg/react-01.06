import React, {createElement} from "react";
import Path from "path";
import {ChatContainer} from "./containers/ChatContainer/ChatContainer";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // ** public



    // ** private
    render() {
        return (
            <ChatContainer/>
        );
    }
}

export default App;
