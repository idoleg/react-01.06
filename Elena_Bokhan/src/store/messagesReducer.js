const initialState = { 
	 		state:{
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
				currentChat: null,	
	}
}

const messagesReducer = (state = initialState, action) =>{
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
			default:
				return state;
	}
	}
	


export default messagesReducer;

export const sendMessageActionCreator = (message,chatId) => ({type: "SEND-MSG", message,chatId})