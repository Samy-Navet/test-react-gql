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
                            <circle cx="20" cy="20" r="20" fill="#049FAF" />
                                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"  fill="white"> {data.message.username.charAt(0)} </text>
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