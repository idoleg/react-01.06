import React, {Component} from 'react'
import ChatContainer from '../container/ChatContainer'
import ChatList from '../container/ChatList/ChatList'
// import Chat from '../components/Chat/Chat'

import './Layout.css'

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                    <ChatList/>
                    <ChatContainer/>
            </div>
        )
    }
}
export default Layout