import React from "react";


export class ContactTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps, prevState) {

    }


    render() {
        return (

            <div className="col-md-4 d-none d-md-block border-right">
                <div className="settings-tray">
                    <img className="profile-image"
                         src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg" alt="Profile img"/>
                    <span className="settings-tray--right">
                            <i className="material-icons">cached</i>
                            <i className="material-icons">message</i>
                            <i className="material-icons">menu</i>
                            </span>
                </div>
                <div className="search-box">
                    <div className="input-wrapper">
                        <i className="material-icons">search</i>
                        <input placeholder="Search here" type="text"/>
                    </div>
                </div>
                <div className="friend-drawer friend-drawer--onhover">
                    <img className="profile-image"
                         src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt=""/>
                    <div className="text">
                        <h6>Robo Cop</h6>
                        <p className="text-muted">Hey, you're arrested!</p>
                    </div>
                    <span className="time text-muted small">13:21</span>
                </div>

                <div className="friend-drawer friend-drawer--onhover">
                    <img className="profile-image"
                         src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/optimus-prime.jpeg"
                         alt=""/>
                    <div className="text">
                        <h6>Optimus</h6>
                        <p className="text-muted">Wanna grab a beer?</p>
                    </div>
                    <span className="time text-muted small">00:32</span>
                </div>

                <div className="friend-drawer friend-drawer--onhover ">
                    <img className="profile-image"
                         src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/real-terminator.png"
                         alt=""/>
                    <div className="text">
                        <h6>Skynet</h6>
                        <p className="text-muted">Seen that canned piece of s?</p>
                    </div>
                    <span className="time text-muted small">13:21</span>
                </div>

                <div className="friend-drawer friend-drawer--onhover">
                    <img className="profile-image"
                         src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/termy.jpg"
                         alt=""/>
                    <div className="text">
                        <h6>Termy</h6>
                        <p className="text-muted">Im studying spanish...</p>
                    </div>
                    <span className="time text-muted small">13:21</span>
                </div>

                <div className="friend-drawer friend-drawer--onhover">
                    <img className="profile-image"
                         src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rick.jpg"
                         alt=""/>
                    <div className="text">
                        <h6>Richard</h6>
                        <p className="text-muted">I'm not sure...</p>
                    </div>
                    <span className="time text-muted small">13:21</span>
                </div>

                <div className="friend-drawer friend-drawer--onhover">
                    <img className="profile-image"
                         src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rachel.jpeg"
                         alt=""/>
                    <div className="text">
                        <h6>XXXXX</h6>
                        <p className="text-muted">Hi, wanna see something?</p>
                    </div>
                    <span className="time text-muted small">13:21</span>
                </div>
            </div>
        )
    }
}

