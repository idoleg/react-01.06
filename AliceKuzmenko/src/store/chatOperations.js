import {loadingChats,initChats, failedLoadedChats, sendMessage} from './chatActions'


export const fetchChats = () => async dispatch =>{
    dispatch(loadingChats());
    try{
        const respone = await fetch('/api/chats.json');
        if (!respone.ok){
            throw new Error('It is not for you! (error: '+respone.status+')')
        }
        const result = await respone.json();
        console.log("result", result)
        
        dispatch(initChats(result))
    } catch (e){
        dispatch(failedLoadedChats(e.message))
    }
    
}
export const sendMessageToBotAPI = (botName, id, content) => async dispatch =>{
    console.log("BOT API"+botName+id+content);
    const userid="000"+id.toString() ;
    const formData= new FormData;
    formData.append('query', JSON.stringify({"ask":content,"userid":"1234","key":""}))
    const respone = await fetch('/botAPI/',{method:'post', body:formData})
    const {aiml} = await respone.json();
    dispatch(sendMessage(id, botName, aiml))
}