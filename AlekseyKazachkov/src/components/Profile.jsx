import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

export default class Profile extends React.Component {
    state = {
        data: {},
    }

    componentDidMount() {
        fetch('/api/header.json')
            .then(body => body.json())
            .then(data => {
                this.setState({
                    data: data[0],
                });
            });
    }

   render() { 

    let {data} = this.state;

       return (
           <div className="container">
               <div>
                   {Object.keys(data).map((elem) => {
                        return <div key={data[elem]}>{ elem } - { data[elem] }</div>
                   })}
               </div>
               <Link to='/'> ← Назад</Link>
           </div>
       )
   }
}