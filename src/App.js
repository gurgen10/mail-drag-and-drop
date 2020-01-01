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


//https://react-dnd.github.io/react-dnd/docs/tutorial#setup


function App()  {
  const [inbox, setInbox] = useState(mailList);
  const [sent, setSent] = useState([]);
  const [span, setSpan] = useState([]);

  const onDragStart = start => {

  }

  const onDragEnd = result => {
    console.log(result);
    
    const { destination, source } = result;

    if(!destination) {
      return
    }


    if(destination.droppableId === source.droppableId &&
      destination.index === source.index) {
        return
      }
      if(destination.droppableId === 'inbox') {
        const newInbox = Array.from(inbox);
        const dragableMail = newInbox.splice(source.index, 1);
        
        newInbox.splice(destination.index, 0, ...dragableMail);
        

        setInbox(newInbox)
      } else if (destination.droppableId === 'sidebarSent') {
        const newInbox = Array.from(inbox);
        const dragableMail = newInbox.splice(source.index, 1);
        sent.push(...dragableMail);
        setSent(sent);
        setInbox(newInbox);
        

      }else if (destination.droppableId === 'sidebarSpan') {
        const newInbox = Array.from(inbox);
        const dragableMail = newInbox.splice(source.index, 1);
        span.push(...dragableMail);
        setSpan(span);
        setInbox(newInbox);
      }
      

  }

    
    return (
      <Context.Provider value={{ inbox, sent, span }}>        

        <div className="App">
          <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
          <Router>
            <SideBar  inbox={inbox} sent={sent} span={span} />
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
