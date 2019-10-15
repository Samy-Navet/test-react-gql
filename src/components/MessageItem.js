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
                        <path d="M23.454 23.242H15.68L13.86 28H11.676L18.358 10.84H20.828L27.484 28H25.274L23.454 23.242ZM22.7 21.292L20.386 15.208L19.58 12.816H19.528L18.774 15.13L16.434 21.292H22.7Z" fill="white"/>
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