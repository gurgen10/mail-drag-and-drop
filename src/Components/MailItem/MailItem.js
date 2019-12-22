import React, { Component } from 'react';
import  './MailItem.css';

export default class MailItem extends Component {
    state = {
        checked: false
    }
    changeCheckedStatus = () => {
        this.setState((state) => {
            return {
                checked: !this.state.checked
            }
        })

    }
    render() {
        const { title, desc, date } = this.props.mail
        return (
            <li className="mail-item">
                <div>
                    <label className="container">
                        <input type="checkbox" checked={this.state.checked} onChange={this.changeCheckedStatus}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>{title}</div>
                <div>{desc}</div>
                <div>{date}</div>                 
            </li>
        )
    }
}
