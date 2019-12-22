import React, { Component } from 'react';
import MailItem from '../MailItem';

export default class Sent extends Component {
    render() {
        const { sent } = this.props.location.state;
        console.log(this.props);
        const mailList = sent.map(mail=> {
            return (<MailItem key={mail.id} mail={mail}/>)
        })
        
        return (
            <div>
                <h2>Inbox</h2>
                <ul>
                    {sent.length ? mailList : (<h3>Sent list is empty</h3>)}

                </ul>
            </div>
        )
    }
}
