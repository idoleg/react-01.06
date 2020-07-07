import {loadingChats,initChats} from './chatActions'


export const fetchChats = () => async dispatch =>{
    dispatch(loadingChats());
    const respone = await fetch('/api/chats.json');
    const result = await respone.json();
    console.log("result", result)
    dispatch(initChats(result))
}