import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
//import InputLabel from '@material-ui/core/InputLabel';
//import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';

import {Link} from 'react-router-dom';
import './ChatList.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export  function ChatList(){//({chats}) {
  //const classes = useStyles();
  let chats=  [
    {name: 'Lorem'},
    {name:'Ipsum'},
    {name: 'Dolor'},
    {name:'Sit'},
    {name:'Amet'},    
]

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
return <ul className="chats">
  {chats.map((item,index) =>{
    let chatLink="/chats/"+(index+1)
    //if (this.props.match.params.id == (index+1)&&className){let classActive="active"}
  return <li key={index}> <Link to={chatLink}>{item.name}</Link>  </li>
  })
}  
 
</ul>
}


ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape(Object)),//.isRequired,
}
