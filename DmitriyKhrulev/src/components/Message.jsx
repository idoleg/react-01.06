import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


export default class Message extends React.Component {
   static PropTypes = {
      text: PropTypes.string.isRequired,
   };

   render() {
      return <>
         <div>
            {this.props.text}
         </div>
         
      </>
   }
}