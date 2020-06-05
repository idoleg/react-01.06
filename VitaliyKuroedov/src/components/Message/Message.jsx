import React from 'react'
import PropTypes from 'prop-types'

export default class Message extends React.Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }

    render(){
        return(
            <div className="list__item message"
                style={ { alignSelf: this.props.name === 'bot' ? 
                        'flex-end' : 'flex-start'}}
                >
                <div>
                    <span className="list__item-text">{this.props.name} : </span>
                    <span className="list__item-text">{this.props.content}</span>

                </div>
            </div>
        )
    }
}