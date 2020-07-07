// export default (state ={countedNumber :0},action) => {
//     if (action.type=='COUNT'){
//         console.log (action.payload.number, state.countedNumber);
//         let newNumber=state.countedNumber +action.payload.number;
//         return {countedNumber:newNumber}      
//     }
//     console.log(state)
//     return state;
// }

import {handleActions} from "redux-actions"
import {loadingChats, initChats, sendMessage, addChat} from './chatActions'


const initialState={};
export default handleActions({
    [loadingChats]:(state,action)=>{
        
        return {isLoading : true}
    },
    [initChats]:(state,action)=>{
        //console.log("initChats",state,action)
        return {...action.payload.data, isLoading:false} //{
        //     1: {
        //         name: 'Lorem',
        //         messages: [
        //             { name: 'Me', content: 'Hello!', id: 1 },
        //             { name: 'Lorem', content: 'Hi!', id: 2 },
        //             { name: 'Me', content: 'How are you?', id: 3 },
        //             { name: 'Lorem', content: 'Fine', id: 4 },
        //         ]
        //     },
        //     2: {
        //         name: 'Ipsum',
        //         messages: [
        //             { name: 'Me', content: 'Hello!', id: 1 },
        //             { name: 'Ipsum', content: 'Hi!', id: 2 },
        //         ]
        //     },
        //     3: {
        //         name: 'Dolor-Vasya',
        //         messages: []
        //     },
        //     //4:{name:'Sit'},
        //     //5:{name:'Amet'},    
        // };
    },
    [sendMessage]:(state,action)=>{
        //console.log(state,action)
        const { id, name, content } = action.payload;
        let message={name:name, content:content, id:(state[id].messages.length+1)}
        return {
            ...state,
            [id]: {
                ...state[id],
                messages: [
                    ...state[id].messages,message
                ]
            }
        };
    },
     [addChat]:(state,action)=>{
        //console.log(state,action)
        const { id, name } = action.payload;
        //let chat={name:name, id:(state[id].messages.length+1)}
        return {
            ...state, [id]:{name, messages:[]}
            
        };
    }

},initialState)