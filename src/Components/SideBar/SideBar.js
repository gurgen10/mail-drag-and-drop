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
        activePath: '/',
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

        return (
            <div className="sidebar">
                <Link to= '/'
                    style={activePath === '/' ? { color: 'green' } : { color: 'black' }}
                    onClick={(e) => this.handleItemClick(e, '')}>
                    <ListItemText> <h1> <FaHome /></h1></ListItemText>
                </Link>
                <List disablePadding dense>
                <Droppable droppableId={'sidebar-inbox'}>
                    {provided => (
                    <div 
                    ref={provided.innerRef} >
                        <ListItem button>
                            <Link to={{ pathname: '/inbox' }} 
                                style={activePath === 'inbox' ? { color: 'blue' } : { color: 'black' }}
                                onClick={(e) => this.handleItemClick(e, 'inbox')}>
                                <ListItemText>Inbox  <FaInbox /></ListItemText>
                            </Link>
                        </ListItem>                        
                        <div style={{display:'none'}}>{provided.placeholder}</div>
                    </div>
                    )}
                    
                    </Droppable>
                    <Droppable droppableId={'sidebar-sent'} >
                    {provided => (
                    <div 
                    ref={provided.innerRef}>
                        <ListItem button>
                        <Link to={{ pathname: '/sent' }}
                            style={activePath === 'sent' ? { color: 'blue' } : { color: 'black' }}
                            onClick={(e) => this.handleItemClick(e, 'sent')}>
                            <ListItemText>Sent <FaIndent /></ListItemText>
                            </Link>
                        </ListItem>                        
                        <div style={{display:'none'}}>{provided.placeholder}</div>
                    </div>
                    )}
                    </Droppable>
                    <Droppable droppableId={'sidebar-span'} >
                    {provided => (
                    <div 
                    ref={provided.innerRef} >
                        <ListItem button>
                            <Link to={{ pathname: '/span' }}
                                style={activePath === 'span' ? { color: 'blue' } : { color: 'black' }}
                                onClick={(e) => this.handleItemClick(e, 'span')}>
                                <ListItemText>Span <FaCarCrash /></ListItemText>
                            </Link>
                        </ListItem>                        
                        <div style={{display:'none'}}>{provided.placeholder}</div>
                    </div>
                    )}
                    </Droppable>
                </List>
            </div>
        );
    }
}
