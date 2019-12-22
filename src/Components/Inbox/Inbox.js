import React, { Component } from 'react';
import MailItem from '../MailItem';

export default class Inbox extends Component {
    render() {
        const { inbox } = this.props.location.state;
        console.log(this.props);
        const mailList = inbox.map(mail=> {
            return (<MailItem key={mail.id} mail={mail}/>)
        })
        
        return (
            <div>
                <h2>Inbox</h2>
                <ul>
                    {inbox.length ? mailList : (<h3>inbox is empty</h3>)}

                </ul>
            </div>
        )
    }
}
