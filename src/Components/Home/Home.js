import React, { Component } from 'react';
import styled from 'styled-components';

const Pre = styled.p`
font-size: 30px;
color: green;
width: 50%;
margin: 0 auto;
`;


export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Pre>
                    Hi dear user.
                    You can reorder your mail list just dragging and dropping them and 
                    you can move mail items into another mail boxes by draging and dropping mail items on specific box.
                </Pre>
            </div>
        )
    }
}
