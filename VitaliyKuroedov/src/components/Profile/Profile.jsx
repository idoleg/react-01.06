import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardContent   } from '@material-ui/core'
export default class Profile extends Component {
    state = {
        username: 'Я'
    }

    render(){
        return(
            <Card raised={true}>
                <CardHeader title={`Имя пользователя: ${this.state.username}`}/>
                <CardMedia 
                    className="avatar"
                    image="https://randomuser.me/api/portraits/med/men/57.jpg"
                    src='https://randomuser.me/api/portraits/med/men/57.jpg'/>
                <CardContent>
                    тут еще что нибуль
                </CardContent>
            </Card>
        )
    }
}