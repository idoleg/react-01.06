import React from 'react';

const Message = (props) => {
	return  <div>
				<span> {props.name +": " } </span><span><i> {props.text} </i></span>
			</div>
	}

export default Message;