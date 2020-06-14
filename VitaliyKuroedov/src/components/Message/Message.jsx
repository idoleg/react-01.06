import React from 'react'
import PropTypes from 'prop-types'

export default class Message extends React.Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.bool.isRequired
    }

    render(){
        return(
            <div className="list__item message"
                style={ { alignSelf: this.props.author === true ? 
                        'flex-start' : 'flex-end'}}
                >
                <div>
                    <span className="list__item-text">{this.props.name} : </span>
                    <span className="list__item-text">{this.props.content}</span>

                </div>
            </div>
        )
    }
}