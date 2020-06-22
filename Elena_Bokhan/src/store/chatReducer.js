const initialState = {	 		
				chats:{
						1:{
						author: "Mask",
						msgArr: [{name: "Mask", text: "Hello"},
								{name: "Bot", text: "Hi"},
								{name: "Mask", text: "How are U?"},
								{name: "Bot", text: "Fine, thanks"},
								],
						},
						2:{
							author: "Durov",
							msgArr: [{name: "Durov", text: "Hello, i had created VK"},
									{name: "Bot", text: "It's awesome"},
									{name: "Durov", text: "Yeaa"},					
									],
						},
						3:{
							author: "Gates",
							msgArr: [{name: "Gates", text: "I'm smartest man in the world"},
									{name: "Bot", text: "Everybody know it"},
									],
						},		
				},
				changeMsg:{
					text: "",
					indexMsg: null
				},
				newMsgEffect: null,
			}

const chatReducer = (state = initialState, action) =>{
switch (action.type){
	case "SEND-MSG":
	return {...state,
		chats:{...state.chats,
		[action.chatId]:{
			...state.chats[action.chatId],
			msgArr:[...state.chats[action.chatId].msgArr,action.message]
		}
	}
	}
	case "ADD-CHAT":
	debugger
	return  {
		...state,				
		chats:{...state.chats,
			[action.id]:{author:action.name, msgArr:[]}	
		},	
	}
	case "REMOVE-MSG":		
			return {
				...state,				
				chats:{...state.chats,
					[action.idChat]:{...state.chats[action.idChat],
						msgArr: state.chats[action.idChat].msgArr.filter((item, index) => index != action.indexMsg)}	
				},	
			}
	case "CHANGE-CLICK":	
		return {
			...state,
			changeMsg:{ ...state.changeMsg,
				text: state.chats[action.idChat].msgArr[action.indexMsg].text,
				indexMsg: action.indexMsg
			}
		}
	case "EDIT-MSG":	
		return {
			...state,
			chats:{...state.chats,
			[action.idChat]:{
				...state.chats[action.idChat],			
				msgArr:state.chats[action.idChat].msgArr.map((item, index) => index==state.changeMsg.indexMsg ? {name:action.message.name,text: action.message.text}:item)
				}
			},
			changeMsg:{
				text: "",
				indexMsg: null
			}	
		}
	case "NEW-MSG":	
		return {
			...state,
			newMsgEffect: action.id	
		}
	default:
	return state;
}
}

export default chatReducer;

export const sendMessageActionCreator = (message,chatId) => ({type: "SEND-MSG", message,chatId});
export const addChatActionCreator = (nameChat, id) => ({type: "ADD-CHAT", name: nameChat, id:id});
export const removeMessageActionCreator = (idChat,indexMsg) => ({type: "REMOVE-MSG", idChat,indexMsg});
export const changeClickActionCreator = (idChat,indexMsg) => ({type: "CHANGE-CLICK", idChat, indexMsg});
export const editMessageActionCreator = (message,idChat) => ({type: "EDIT-MSG", message,idChat});
export const newMsgEffectActionCreator = (id) => ({type: "NEW-MSG",id});
