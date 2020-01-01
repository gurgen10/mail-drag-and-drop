import React, { Component, useContext } from 'react';
import Context from '../../context';
import MailItem from '../MailItem';
import { Droppable } from "react-beautiful-dnd";


class MySent extends Component {
    render() {
        const  { sent }  = this.props;
        console.log(this.props, 'sent.js');
        const mailList = sent.map((mail, index)=> {
            return (<MailItem key={mail.id} mail={mail} index={index}/>)
        })
        
        return (
            
            <div>
                <h2>Sent</h2>
                <Droppable droppableId={'sent'} isDropDisabled={false}>
                    {provided => (
                        <ul 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}>
                            {sent.length ? mailList : (<h3>Sent list is empty</h3>)}
                        {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </div>
        )
    }
}

function Sent() {
    let { sent } = useContext(Context);
    return <MySent sent={sent}></MySent>
  };

  export default Sent;
