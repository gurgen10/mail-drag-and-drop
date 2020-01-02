import React, { Component } from 'react';
import  './MailItem.css';
import { Draggable } from 'react-beautiful-dnd';


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
        
        const {id, title, desc, date, status } = this.props.mail
        
        return (
            
            <Draggable 
                draggableId={id + " " +  status} 
                index={this.props.index}
                >
                {provided => (
                    <li 
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef} className="mail-item" >
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
                )}
            </Draggable>

        )
    }
                
}
