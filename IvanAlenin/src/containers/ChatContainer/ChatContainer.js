// Styles
import './css/styles.css';
// React & plugins
import React, {createElement} from "react";
import Path from "path";
 // UI plugins
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
// Components
import {InputBlock} from "../../components/InputBlock/InputBlock";
import {MessageGroup} from "../../components/MessageGroup/MessageGroup";


/* ------ class ChatContainer ------ */
export class ChatContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userMessage: 'none',
            isNewMessage: 'false'
        };
        this.readMessage = this.readMessage.bind(this);
    }

    // ** public
    readMessage = (message) => {
        this.setState({userMessage: message, isNewMessage: 'true'});
    };


    // ** private
    componentDidUpdate(prevProps, prevState) {
        if (this.state.isNewMessage === 'true') {
            this.setState({isNewMessage: 'false'});
        }
    }

    render() {

        let msg;
        {
            if (this.state.isNewMessage === 'true') {
                msg = <MessageGroup message={this.state.userMessage}/>;
            } else
                msg = <MessageGroup message='false'/>;
        }

        return (
            <div className="ChatContainer container-fluid mx-md-5">
                <div className="row no-gutters overflow-hidden d-flex h-100">
                    {/*ContactTab*/}
                    <div className="ContactTab col-md-4 d-none d-md-flex flex-column">
                        {/*ContactTabHead*/}
                        <div className="ContactTabHead input-group p-1">
                            <input type="text" className="form-control border-0 rounded-0 h-auto"
                                   placeholder="Type chat name.."
                                   aria-label="Contact filter.."
                                   aria-describedby="button-addon4"/>
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-secondary border-0" type="button">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                                <button className="btn btn-outline-secondary border-0 rounded-0" type="button">
                                    <FontAwesomeIcon icon={faBars}/>
                                </button>
                            </div>
                        </div>
                        {/*ContactGroup*/}
                        <div className="ContactGroup list-group rounded-0 p-0">

                            <a href="#" className="list-group-item list-group-item-action p-1">
                                <div className="d-flex w-100 p-1">
                                    <img className="img-circle p-0 mr-2 my-auto"
                                         src="https://picsum.photos/64?random=1"
                                         alt="Douglas Johannasen"/>
                                    <div className="text-truncate mt-1">
                                        <p className="text-truncate mb-0">
                                            Chat name. Chat name.
                                        </p>
                                        <small className="text-truncate">
                                            The last message.The last message.
                                        </small>
                                    </div>
                                    <small className="ml-auto text-right">3 days ago</small>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action p-1">
                                <div className="d-flex w-100 p-1">
                                    <img className="img-circle p-0 mr-2 my-auto"
                                         src="https://picsum.photos/64?random=2"
                                         alt="Douglas Johannasen"/>
                                    <div className="text-truncate mt-1">
                                        <p className="text-truncate mb-0">
                                            Chat name. Chat name.
                                        </p>
                                        <small className="text-truncate">
                                            The last message.The last message.
                                        </small>
                                    </div>
                                    <small className="ml-auto text-right">3 days ago</small>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action active p-1">
                                <div className="d-flex w-100 p-1">
                                    <img className="img-circle p-0 mr-2 my-auto"
                                         src="https://picsum.photos/64?random=3"
                                         alt="Douglas Johannasen"/>
                                    <div className="text-truncate mt-1">
                                        <p className="text-truncate mb-0">
                                            Chat name. Chat name.
                                        </p>
                                        <small className="text-truncate">
                                            The last message.The last message.
                                        </small>
                                    </div>
                                    <small className="ml-auto text-right">3 days ago</small>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action p-1">
                                <div className="d-flex w-100 p-1">
                                    <img className="img-circle p-0 mr-2 my-auto"
                                         src="https://picsum.photos/64?random=4"
                                         alt="Douglas Johannasen"/>
                                    <div className="text-truncate mt-1">
                                        <p className="text-truncate mb-0">
                                            Chat name. Chat name.
                                        </p>
                                        <small className="text-truncate">
                                            The last message.The last message.
                                        </small>
                                    </div>
                                    <small className="ml-auto text-right">3 days ago</small>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action p-1">
                                <div className="d-flex w-100 p-1">
                                    <img className="img-circle p-0 mr-2 my-auto"
                                         src="https://picsum.photos/64?random=5"
                                         alt="Douglas Johannasen"/>
                                    <div className="text-truncate mt-1">
                                        <p className="text-truncate mb-0">
                                            Chat name. Chat name.
                                        </p>
                                        <small className="text-truncate">
                                            The last message.The last message.
                                        </small>
                                    </div>
                                    <small className="ml-auto text-right">3 days ago</small>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/*MessageTab*/}
                    <div className="MessageTab col-md-8 d-flex flex-column">
                        <div className="MessageTabHead input-group p-1">
                            <span className="input-group-text border-0 rounded-0 w-50 bg-transparent">
                                Chat name
                            </span>
                            <input type="text" className="form-control border-0 rounded-0 h-auto"
                                   placeholder="Find message..."
                                   aria-label="Message filter.."
                                   aria-describedby="button-addon4"/>
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-secondary border-0"
                                        type="button">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                                <button className="btn btn-outline-secondary border-0 rounded-0"
                                        type="button">
                                    <FontAwesomeIcon icon={faBars}/>
                                </button>
                            </div>
                        </div>

                        {msg}
                        <InputBlock readMessage={this.readMessage} on/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatContainer;