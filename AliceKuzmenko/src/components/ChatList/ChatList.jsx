import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import './ChatList.css'




export function ChatList(){
  let chats=  [
    {name: 'Lorem'},
    {name:'Ipsum'},
    {name: 'Dolor'},
    {name:'Sit'},
    {name:'Amet'},    
]

 

  
return <ul className="chats">
  {chats.map((item,index) =>{
    let chatLink="/chats/"+(index+1)
  return <li key={index}> <Link to={chatLink}>{item.name}</Link>  </li>
  })
}  

</ul>
}


ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape(Object)).isRequired,
    chats: PropTypes.arrayOf(PropTypes.shape(Object)),//.isRequired,
}