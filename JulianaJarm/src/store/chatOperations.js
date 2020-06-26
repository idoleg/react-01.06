//async actions
import { loadingChats, failedLoadedChats, initChats } from "./chatActions";

export const fetchChats = () => async dispatch => {
    dispatch(loadingChats());

    try {
        const response = await fetch("api/chats.json");
        const result = await response.json();

        dispatch(initChats(result));
    } catch(e) {
        dispatch(failedLoadedChats(e.message));
    }
}