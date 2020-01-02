import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SideBar from './Components/SideBar';
import './App.css';
import Context from  './context';
import Home from './Components/Home';
import Inbox from './Components/Inbox';
import Span from './Components/Span';
import Sent from './Components/Sent';
import mailList from './Data/mails.json';
import { DragDropContext } from 'react-beautiful-dnd';

// https://react-dnd.github.io/react-dnd/docs/tutorial#setup
// https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd
// https://github.com/atlassian/react-beautiful-dnd/
function App()  {
  const [inbox, setInbox] = useState(mailList);
  const [sent, setSent] = useState([]);
  const [span, setSpan] = useState([]);

  const onDragStart = start => {

  }

  function updateMailState (mail, newInbox) {
    if(inbox.indexOf(mail) > -1) {
      setInbox(newInbox)
    } else if (sent.indexOf(mail) > -1) {
      setSent(newInbox)
    } else if(span.indexOf(mail) > -1) {
      setSpan (newInbox)
    }
  }
  function getTargetMailList(droppableId) {
    let newInbox = [];
    if (droppableId.indexOf('inbox') > -1) {
       newInbox = Array.from(inbox);
    } else if (droppableId.indexOf('sent') > -1) {
      newInbox = Array.from(sent);
    } else if (droppableId.indexOf('span') > -1) {
      newInbox = Array.from(span);
    }
    
    return newInbox;
  }
  
  const onDragEnd = result => {
    const { destination, source } = result;

    if(!destination) {
      return
    }
    const newInbox = getTargetMailList(source.droppableId);

    if(destination.droppableId === source.droppableId && destination.index === source.index) {
        return
      }

    if(destination.droppableId === source.droppableId && destination.index !== source.index) {
      const dragableMail = newInbox.splice(source.index, 1);
      newInbox.splice(destination.index, 0, ...dragableMail);
      
      switch(dragableMail[0].status) {
        case 'inbox': setInbox(newInbox); break;
        case 'sent': setSent(newInbox); break;
        case 'span': setSpan(newInbox); break;
        default:
      }
    } else if (destination.droppableId === 'sidebar-inbox') {
      const dragableMail = newInbox.splice(source.index, 1);
      if(destination.droppableId.indexOf(dragableMail[0].status) > -1 ) {
        return;
      }
      updateMailState(...dragableMail, newInbox)
      
      dragableMail[0].status = 'inbox';
      inbox.push(...dragableMail);
      setInbox(inbox);
    } else if (destination.droppableId === 'sidebar-sent') {
      const dragableMail = newInbox.splice(source.index, 1);
      if(destination.droppableId.indexOf(dragableMail[0].status) > -1 ) {
        return;
      }
      updateMailState(...dragableMail, newInbox)
      
      dragableMail[0].status = 'sent';
      sent.push(...dragableMail);
      setSent(sent);
    } else if (destination.droppableId === 'sidebar-span') {
      const dragableMail = newInbox.splice(source.index, 1);
      
      if(destination.droppableId.indexOf(dragableMail[0].status) > -1 ) {
        return;
      }
      updateMailState(...dragableMail, newInbox)
      
      dragableMail[0].status = 'span';
      span.push(...dragableMail);
      setSpan(span);
    } 
  } 
    return (
      <Context.Provider value={{ inbox, sent, span }}>
        <div className="App">
          <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
          <Router>
            <SideBar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/inbox" component={Inbox}/>
              <Route path="/sent"  component={Sent}/>
              <Route path="/span" component={Span}/>
              <Route path="/*" ><Redirect to="/" /></Route>
            </Switch>
          </Router>
        </DragDropContext>
        </div>
        </Context.Provider>
    );
  
}

export default App;
