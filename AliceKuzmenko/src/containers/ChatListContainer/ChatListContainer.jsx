import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ChatList } from '../../components/ChatList/ChatList'
import { addChat } from '../../store/chatActions';

const mapStateToProps = (state) => {
    const chats = Object.entries(state.chats).map(([id, { name }]) => ({ id, name }));
    console.log (chats)
    return {
        chats
    }
}

//const mapDispatchToProps = (dispatch) => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps)(ChatList)
//, mapDispatchToProps