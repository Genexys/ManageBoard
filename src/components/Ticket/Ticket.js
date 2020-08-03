import React from 'react';
import styled from "styled-components";

const TicketWrapper = styled.div`
    background: darkGray;
    padding: 20px;
    border-radius: 20px;
    
    &:not(:last-child) {
        margin-bottom: 5%;
        margin-right: ${props => !!props.marginRight ? '1%' : '0'}
    }
`;

const TicketTitle = styled.h3`
    width: 100%;
    margin: 0px;
`;

const TicketContent = styled.p`
    width: 100%;
`;

const Ticket = ({ticket, marginRight, onDragStart}) => {
    return (
        <TicketWrapper draggable onDragStart={e => onDragStart(e, ticket.id)} marginRight={marginRight}>
            <TicketTitle>{ticket.title}</TicketTitle>
            <TicketContent>{ticket.body}</TicketContent>
        </TicketWrapper>
    );
};

export default Ticket;
