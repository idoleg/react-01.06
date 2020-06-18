import { connect } from "react-redux";
import ChatList from "./ChatList";
import  { addChatActionCreator } from "../../store/chatReducer";



let mapStateToProps = ({chatReducer}) =>{
	return{
		chatArr: chatReducer.chatArr
	}	
	
}
let mapDispatchToProps = (dispatch) =>{
	return {
		addChat: (nameChat) => dispatch(addChatActionCreator(nameChat)),		
		}
}
const AddChatContainer = connect (mapStateToProps, mapDispatchToProps)(ChatList)

export default AddChatContainer;
