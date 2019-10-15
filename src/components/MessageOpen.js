import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';


const StyledLink = styled(Link)`
            text-decoration: none;
            color: black

            &:focus, &:hover, &:visited, &:link, &:active {
                text-decoration: none;
                color: black
            }
        `;


const MessageOpen = (props) => {
    const GET_MESSAGE = gql`
        query{
            message(where: {id: "${props.match.params.id}"} ){
                id, 
                username,
                slug,
                objet,
                content
            }
        }
    `

    const { loading, error, data } = useQuery(GET_MESSAGE);
    if (loading) return <div className="msg-status">Loading...</div>;
    if (error || !data.message) return <div className="msg-status">Error :(</div>;
    
    return(    
        <div className="msg-open_wrapper">
            <StyledLink to="/">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.41 32.5901L22.25 23.4101L31.41 14.2301L28.59 11.4101L16.59 23.4101L28.59 35.4101L31.41 32.5901Z" fill="white"/>
            </svg>
            </StyledLink>
            <div className="msg-open">
                <div className="msg-header">
                    <div className="msg-open-svg_wrapper">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#049FAF"/>
                            <path d="M23.454 23.242H15.68L13.86 28H11.676L18.358 10.84H20.828L27.484 28H25.274L23.454 23.242ZM22.7 21.292L20.386 15.208L19.58 12.816H19.528L18.774 15.13L16.434 21.292H22.7Z" fill="white"/>
                        </svg>
                    </div>
                    <div>{data.message.username}</div>
                </div>
                <p>{data.message.objet}</p>
                <p>{data.message.content}</p>
            </div>
        </div>
    )
}

export default MessageOpen