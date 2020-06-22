import './Profile.css';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
//import {reanameProfile} from '../../store/actions/profileActions';

class Profile extends Component{
    static propTypes ={
        userData: PropTypes.object.isRequired

    };

    render(){
        const {userData} = this.props;
        return <div className="profile-wrap">
            <Avatar variant="square">
                N
            </Avatar>
            <p>{userData.name}</p>
        </div>
    }
}

const mapStateToProps = ({userReducer})=>({
    userData: userReducer.userData
});

export default connect(mapStateToProps)(Profile);