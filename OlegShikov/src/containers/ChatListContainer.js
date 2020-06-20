import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList'
import { bindActionCreators } from 'redux';
import { createChat } from '../store/chatActions';

const mapStateToProps = (state) => {
    const chats = Object.entries(state.chats).map(([id, { name }]) => ({ id, name }));
    return {
        chats
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ createChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)