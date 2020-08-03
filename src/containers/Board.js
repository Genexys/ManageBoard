import React, { Component } from 'react';
import styled from 'styled-components';
import Lane from '../components/Lane/Lane';
import withDataFetching from "../withDataFetching";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5% 1%;
  
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
`;

class Board extends Component {

    constructor() {
        super();

        this.state = {
            tickets: []
        }

        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({ tickets: this.props.data})
        }
    }

    onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id);
        console.log('run')
    }

    onDragOver = e => {
        e.preventDefault()
    }

    onDrop = (e, laneId) => {
        const id = e.dataTransfer.getData('id');

        const tickets = this.state.tickets.filter(ticket => {
            if (ticket.id === parseInt(id)) {
                ticket.lane = laneId
            }

            return ticket;
        });

        this.setState({
            ...this.state,
            tickets
        })
    }

    render() {

        const {lanes = [], loading, error} = this.props;
        const { tickets } = this.state;

        return (
            <BoardWrapper>
                {
                    lanes.map(lane =>
                        <Lane
                            key={lane.id}
                            laneId={lane.id}
                            title={lane.title}
                            loading={loading}
                            error={error}
                            onDragStart={this.onDragStart}
                            onDragOver={this.onDragOver}
                            onDrop={this.onDrop}
                            tickets={tickets.filter(ticket => ticket.lane === lane.id)}
                        />
                    )
                }
            </BoardWrapper>
        )

    }
}

export default withDataFetching(Board);
