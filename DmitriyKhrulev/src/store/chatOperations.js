import { loadingChats, failedLoadedChats, initChats } from './chatActions'


export const fetchChat = () => async dispatch => {
   dispatch(loadingChats());

   try {
      const response = await fetch('/api/chats.json');
      if(!response.ok) {
         throw new Error("Status " + response.status);
      }
      const result = await response.json();
      
      dispatch(initChats(result))
   } catch (e) {
      dispatch(failedLoadedChats(e.message));
   }
}