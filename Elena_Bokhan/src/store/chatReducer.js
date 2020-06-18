const initialState = { 
	chatArr: ["Mask", "Durov", "Gates"]
}

const chatReducer = (state = initialState, action) =>{
	switch (action.type){
		case "ADD-CHAT":
			return {
				...state,
				chatArr:[...state.chatArr,action.name
				]
			}
			default:
				return state;
	}
	
}

export default chatReducer;

export const addChatActionCreator = (nameChat) => ({type: "ADD-CHAT", name: nameChat})