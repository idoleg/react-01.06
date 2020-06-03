import React from "react";

export class InputBlock extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();

        this.state = {
            message: ''
        };
    }

    btnClick() {
        //this.setState({message: this.inputRef.current.value});
        this.state.message = this.inputRef.current.value;
        //console.log(this.state.message);
        this.props.readMessage(this.state.message);

        this.inputRef.current.value = "";
        this.inputRef.current.focus();
    }

    inputPress(target) {
        if (target.charCode === 13) {
            //this.setState({message: this.inputRef.current.value});
            this.state.message = this.inputRef.current.value;
            //console.log(this.state.message);
            this.props.readMessage(this.state.message);

            this.inputRef.current.value = "";
            this.inputRef.current.focus();
        }
        return false;
    }

    render() {
        return (
            <div className="container-md w-50 fixed-bottom">

                <div className="input-group mb-2 p-3 border border-primary rounded shadow">
                    <input ref={this.inputRef} className="form-control"
                           onKeyPress={(event) => this.inputPress(event)}
                           placeholder="Type a message"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" onClick={(event) => this.btnClick()}>
                            Send..
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}