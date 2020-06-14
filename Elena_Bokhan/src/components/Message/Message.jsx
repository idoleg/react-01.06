import React from 'react';

const Message = (props) => {
	
	return  <div className = { props.name == "Bot"? "wrp-item-bot" : "wrp-item"  }>
				<div className ={ props.name == "Bot"? "item bot" : "item" }>
					<div className = "avatar"></div>
					<span> <div><strong>{props.name} </strong></div> <i> {props.text} </i></span>
				</div>
			</div>	
	}

export default Message;