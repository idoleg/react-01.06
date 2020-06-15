import React, {createElement} from "react";
import Path from "path";
import {BrouserRouter, Switch, Route} from "react-router-dom";
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

            <BrouserRouter>
                <Switch>
                    <Route path="/" exact> </Route>

                </Switch>
            </BrouserRouter>,



            <ChatContainer/>
        );
    }
}

export default App;
