import React, { Component } from 'react';
import { FaIndent, FaInbox, FaCarCrash, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import { Droppable } from 'react-beautiful-dnd';
import './SideBar.css';


export default class SideBar extends Component {
    state = {
        activePath: 'inbox',
    }
    handleItemClick(e, i) {
        this.setState(state => {
            return {
                activePath: i
            }
        })
    }

    render() {
         const { activePath } = this.state;
         const { inbox, sent, span } = this.props
        

        return (
            <div className="sidebar">
                <Link to= '/'
                    style={{ color: 'green' }}
                    onClick={(e) => this.handleItemClick(e, '')}>
                    <ListItemText> <h1> <FaHome /></h1></ListItemText>
                </Link>
                <List disablePadding dense>
                <Droppable droppableId={'sidebarInbox'}>
                    {provided => (
                        <div 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}>
                    <ListItem button>
                        <Link to={{pathname: '/inbox', state: { inbox }}} 
                            style={activePath === 'inbox' ? { color: 'blue' } : { color: 'black' }}
                            onClick={(e) => this.handleItemClick(e, 'inbox')}>
                            <ListItemText>Inbox  <FaInbox /></ListItemText>
                            {provided.placeholder}
                        </Link>
                    </ListItem>                        
                    
                        </div>
                    )}
                    
                    </Droppable>
                    <Droppable droppableId={'sidebarSent'} >
                    {provided => (
                        <div 
                        ref={provided.innerRef} 
                       type="sidebar">
                    <ListItem button>
                    <Link to={{pathname: '/sent', state: { sent }}}
                            style={activePath === 'sent' ? { color: 'blue' } : { color: 'black' }}
                            onClick={(e) => this.handleItemClick(e, 'sent')}>
                            <ListItemText>Sent <FaIndent /></ListItemText>
                        </Link>
                    </ListItem>                        
                    {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                    <Droppable droppableId={'sidebarSpan'} >
                    {provided => (
                        <div 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}>
                    <ListItem button>
                    <Link to={{pathname: '/span', state: { span }}}
                            style={activePath === 'span' ? { color: 'blue' } : { color: 'black' }}
                            onClick={(e) => this.handleItemClick(e, 'span')}>
                            <ListItemText>Span <FaCarCrash /></ListItemText>
                        </Link>
                    </ListItem>                        
                    {provided.placeholder}
                        </div>
                    )}
                    
                    </Droppable>
                </List>
            </div>
        );
    }
}
