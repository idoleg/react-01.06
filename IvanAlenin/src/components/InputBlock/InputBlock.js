import React from "react";
import {faBars, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './css/styles.css';

export class InputBlock extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();

        this.state = {
            message: ""
        };
    }

    btnClick(e) {
        this.sendMessage();}

    inputPress(event) {
        // shiftKey+enterKey let us to use line brake
        // charCode = 13 - Enter key
        if (event.charCode === 13 && !event.shiftKey) {
            event.preventDefault();

            this.sendMessage();
        }
    }

    sendMessage(){
        this.state.message = this.inputRef.current.value;

        // Шаблон для регулярного выражения
        // const st = new RegExp('^(?![×÷])[0-9A-Za-zÀ-ÿ][а-яА-ЯёЁ] +');
        // if (!st.test(this.state.message)){
        //     this.props.readMessage(this.state.message);}

        // Test for empty string or string with spaces
        if (this.state.message.trim() !== ""){
            this.props.readMessage(this.state.message);}

        this.inputRef.current.value = "";
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div className="InputBlock">
                {/*input-group-sm*/}
                <div className="input-group bg-white p-1">
                    <textarea ref={this.inputRef}
                              className="form-control border-0 rounded-0"
                              onKeyPress={(e) => this.inputPress(e)}
                              placeholder="Type a message"/>
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-primary border-0 rounded-0"
                            onClick={(e) => this.btnClick(e)}>
                                <FontAwesomeIcon icon={faPaperPlane}/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}