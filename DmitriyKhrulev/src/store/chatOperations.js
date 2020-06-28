import { loadingChats, failedLoadedChats, initChats, sendMessage } from './chatActions'


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

export const sendMessageToBot = (botName, id, content) => async dispatch => {
   console.log('dgfd', botName, id, content );
   
   const formData = new FormData;
   formData.append('query', JSON.stringify({
      ask: content,
      userid: id,
   }));
   const response = await fetch('/bot/', { method: 'post', body: formData})
   const {aiml, emotion} = await response.json();
   let emo = '';
   if (emotion === 'smile') {
     emo = ':)'
   }
   console.log({emotion});
   
   dispatch(sendMessage(id, botName, aiml + emo))
}