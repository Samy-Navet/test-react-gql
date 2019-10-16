import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const MessageItem = ({id, username, objet, content, Lu, setLu }) =>{
    const StyledLink = styled(Link)`
            text-decoration: none;
            color: black

            &:focus, &:hover, &:visited, &:link, &:active {
                text-decoration: none;
                color: black
            }
        `;
    const updateLu = (key)=>{
        const newState = [...Lu];
        if(newState.indexOf(key) === -1){
            newState.push(key)
            setLu(newState);
        }
    }
    
    return(
        <div className="msg-item">
            <StyledLink to={"/message/"+id} onClick={() => updateLu(id)}>
            <div className="msg-item_wrapper">
                <div className="msg-item-svg_wrapper">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#049FAF"/>
                        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="white"> {username.charAt(0)} </text>
                    </svg>
                </div>
                <div className="msg-item_content">
                    <div style={{fontWeight: Lu.indexOf(id) !== -1 ? 'normal' : 'bold'}}>{username}</div>
                    <div style={{fontWeight: Lu.indexOf(id) !== -1 ? 'normal' : 'bold'}}>{objet}</div>
                    <div>{content}</div>
                </div>
            </div>
            </StyledLink>
        </div>
    )
}

export default MessageItem