import React, { Component } from 'react'
import MailItem from '../MailItem';

export default class Span extends Component {
    render() {
        const { span } = this.props.location.state;
        console.log(this.props);
        const mailList = span.map(mail=> {
            return (<MailItem key={mail.id} mail={mail}/>)
        })
        
        return (
            <div>
                <h2>Inbox</h2>
                <ul>
                    {span.length ? mailList : (<h3>Span list is empty</h3>)}

                </ul>
            </div>
        )
    }
}
