import React from "react";


export class MessageTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps, prevState) {

    }




    render() {
        return (

            <div className="col-md-8">
                <div className="settings-tray">
                    <div className="friend-drawer no-gutters friend-drawer--grey">
                        <img className="profile-image"
                             src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt=""/>
                        <div className="text">
                            <h6>Robo Cop</h6>
                            <p className="text-muted">Layin' down the law since like before Christ...</p>
                        </div>
                        <span className="settings-tray--right">
                            <i className="material-icons">cached</i>
                            <i className="material-icons">message</i>
                            <i className="material-icons">menu</i>
                        </span>
                    </div>
                </div>
                <div className="chat-panel">
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="chat-bubble chat-bubble--left" style="">
                                Hello dude!
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3 offset-md-9">
                            <div className="chat-bubble chat-bubble--right" style="">
                                Hello dude!
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3 offset-md-9">
                            <div className="chat-bubble chat-bubble--right" style="">
                                Hello dude!
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="chat-bubble chat-bubble--left" style="">
                                Hello dude!
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="chat-bubble chat-bubble--left" style="">
                                Hello dude!
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="chat-bubble chat-bubble--left" style="">
                                Hello dude!
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3 offset-md-9">
                            <div className="chat-bubble chat-bubble--right" style="">
                                Hello dude!
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="chat-box-tray">
                                <i className="material-icons">sentiment_very_satisfied</i>
                                <input type="text" placeholder="Type your message here..."/>
                                <i className="material-icons">mic</i>
                                <i className="material-icons">send</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}


