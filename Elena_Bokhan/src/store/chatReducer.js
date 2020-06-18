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
				chatArr: ["Mask", "Durov", "Gates"],
				currentChat: null,	
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
return {
	...state,				
	chats:{...state.chats,
		[state.chatArr.length+1]:{author:action.name, msgArr:[]}
	},
	chatArr:[...state.chatArr,action.name],
}
default:
return state;
}
}

export default chatReducer;

export const sendMessageActionCreator = (message,chatId) => ({type: "SEND-MSG", message,chatId});
export const addChatActionCreator = (nameChat) => ({type: "ADD-CHAT", name: nameChat});