import { sendMessageActionCreator, newMsgEffectActionCreator } from "./chatReducer";
let timeout = null;

const botAnswer = store => next => action => {

	next(action);
	const chats = Object.entries(store.getState().chatReducer.chats).map(([id,{author}])=>({id,author}));	
	debugger
	if (action.type == "SEND-MSG" && action.message.name != "Bot") {		
		clearTimeout(timeout);
		timeout = setTimeout(botAnswerFunc,2000, action.chatId)}		
	else if (action.type == "ADD-CHAT") {
		chats.map(item => {
			if(item.author == action.name){
				setTimeout(firstMessageFunc, 5000, Number(item.id))
				setTimeout(signalMessageFunc, 5100, Number(item.id))
			}
		})
	}	

function botAnswerFunc(id){
		store.dispatch(sendMessageActionCreator({name: "Bot", text: "I'm writing u again =)"}, id))
		}
function firstMessageFunc(id){
		store.dispatch(sendMessageActionCreator({name: "Bot", text: "It's first message in this chat"}, id))
		store.dispatch(newMsgEffectActionCreator(id))		
		}
function signalMessageFunc(){		
		store.dispatch(newMsgEffectActionCreator())		
		}
}

export default botAnswer;

