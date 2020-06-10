import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from "material-ui";

export default class Message extends React.Component {
     render() {
         let className = this.props.author === 'bot' ? 'botMessage' : 'userMessage';

        return (
            <div className="messageContainer">
                <div className={className}>
                    <Card>
                        <CardHeader
                            title={this.props.author}
                            className="author"
                            subtitle="subtitle"

                        />
                        <CardText>
                            <span className="messageText">{this.props.text}</span>
                        </CardText>
                    </Card>
                </div>
            </div>
            )
     }
}