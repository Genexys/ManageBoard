import React from 'react';
import styled from 'styled-components';
import Ticket from "../Ticket/Ticket";

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: lightGray;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;
  
  @media (max-width: 1200px) {
    max-width: 270px;
    width: 100%;
    margin: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid darkGray;
  text-align: center;
  color: #222222
`;

const TicketsWrapper = styled.div`
  padding: 5%;
`;

const Alert = styled.div`
  padding: 5%;
  text-align: center;
`;

const Lane = ({laneId, tickets, loading, error, title, onDragStart, onDragOver, onDrop}) => (
  <LaneWrapper onDragOver={onDragOver}
               onDrop={e => onDrop(e, laneId)}>
    <Title>{title}</Title>
      {(loading || error) && <Alert>{loading ? 'Loading...' : error}</Alert>}

      <TicketsWrapper>
          {tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} onDragStart={onDragStart} />)}
      </TicketsWrapper>
  </LaneWrapper>
);

export default Lane;
