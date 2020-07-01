import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatList } from '../components/ChatList/ChatList';
import {createChat} from '../store/chatAction';


const mapStateToProps = (state) => {
    const chats = Object.entries(state.chats.items).map(([id, {name}]) => ({id, name}));
    return { 
        loadingChats: state.chats.loadingChats,
        chats
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({createChat}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)