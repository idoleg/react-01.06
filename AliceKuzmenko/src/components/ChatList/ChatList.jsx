import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
//import InputLabel from '@material-ui/core/InputLabel';
//import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';

import {Link} from 'react-router-dom';
import './ChatList.css'

import { Provider } from 'react-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {initChats, sendMessage} from '../../store/chatActions'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

 function ChatList(props){//({chats}) {
  //const classes = useStyles();
//  let chats=  [
//    {name: 'Lorem'},
//     {name:'Ipsum'},
//     {name: 'Dolor'},
//     {name:'Sit'},
//     {name:'Amet'},    
// ]
//for (let id in props.chats){console.log(props.chats[id])}
//console.log("PROPS + ",props.chats.forEach(item  =>{console.log("props!",item)}))
//   return <FormControl className={classes.formControl}>
//     <InputLabel htmlFor="name-native-simple">Chats</InputLabel>
  
//     <Select
//     native
    
//     inputProps={{
//       name: 'name',
//       id: 'name-native-simple',
//     }}
//   >
      
//     {chats.map((item,index) => <option value={index} key={index}>{item.name}</option>  )}
    
//   </Select>
// </FormControl>

  let result=""
  for(let id in props.chats){
  let chatLink="/chats/"+(id)
  console.log (props.chats[id].name)
  //if (this.props.match.params.id == (index+1)&&className){let classActive="active"}
result = result+ `<li key=${id}> <Link to=${chatLink}>${props.chats[id].name}</Link>  </li>`
}
console.log(result)

return <ul className="chats">
 
  {result}  
 
</ul>
}


ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape(Object)),//.isRequired,
}
const mapStateToProps = (store, props)=>{
  const chats = store.chats;
  //console.log(chats);
  return { chats:  chats}
}
export default connect(mapStateToProps)(ChatList)