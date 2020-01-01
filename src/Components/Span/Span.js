import React, { Component, useContext } from 'react'
import MailItem from '../MailItem';
import { Droppable } from 'react-beautiful-dnd';
import Context  from "../../context";

class MySpan extends Component {
    render() {
        const { span } = this.props;
        console.log(this.props);
        const mailList = span.map((mail, index)=> {
            return (<MailItem key={mail.id} mail={mail} index={index}/>)
        })
        
        return (
            <div>
                <h2>Span</h2>
                <Droppable droppableId={'span'} isDropDisabled={false}>
                    {provided => (
                        <ul 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}>
                        {span.length ? mailList : (<h3>Span list is empty</h3>)}
                        {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </div>
        )
    }
}

function Sent() {
    let { span } = useContext(Context);
    return <MySpan span={span}></MySpan>
  };

  export default Sent;
