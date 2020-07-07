
const initialStore = {
    userData:{
        name: 'User Name'
    },
};

export default function userReducer(store = initialStore, action){
    switch(action.type){
        default: 
            return store;
    }
}