import React, {Component} from 'react';
import { FaIndent, FaInbox, FaCarCrash, FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


import PropTypes from 'prop-types';
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
        console.log( i);
        
        
        
    }
    
 
    render() {
        const { activePath } = this.state;
        
        return (
            <div className="sidebar">
               
                <Link to='/'
                          style={ {color: 'green'}}   
                          onClick= {(e) => this.handleItemClick(e,'')}>
                        <ListItemText> <h1> <FaHome/></h1></ListItemText>
                    </Link>
            <List disablePadding dense>
                <ListItem button>
                    <Link to='/inbox'
                          style={ activePath === 'inbox' ? {color: 'blue'} : {color: 'black'} }   
                          onClick= {(e) => this.handleItemClick(e,'inbox')}>
                        <ListItemText>Inbox  <FaInbox/></ListItemText>
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to='/sent' 
                          style={ activePath === 'sent' ? {color: 'blue'} : {color: 'black'} }   
                          onClick= {(e) => this.handleItemClick(e,'sent')}>
                        <ListItemText>Sent <FaIndent/></ListItemText>
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to='/span'
                          style={ activePath === 'span' ? {color: 'blue'} : {color: 'black'} }   
                          onClick= {(e) => this.handleItemClick(e,'span')}>
                        <ListItemText>Span <FaCarCrash/></ListItemText>
                    </Link>
                </ListItem>
            </List>
          </div>
        );
    }
}