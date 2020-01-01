import React, { Component, useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import MailItem from '../MailItem';
import Context from '../../context';

class MyInbox extends Component {
    render() {
        const { inbox } = this.props;
        const mailList = inbox.map( (mail, index)=> {
            return (<MailItem key={mail.id} mail={mail} index={index}/>)
        })
        
        return ( 
            <>
                <h2>Inbox</h2>
                <Droppable droppableId={'inbox'} isDropDisabled={false}>
                    {provided => (
                        <ul 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}>
                            {inbox.length ? mailList : (<h3>inbox is empty</h3>)}
                        {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </>
        )
    }
}

 function Inbox() {
    let { inbox } = useContext(Context);
    return <MyInbox inbox={inbox}></MyInbox>
  };

  export default Inbox;
