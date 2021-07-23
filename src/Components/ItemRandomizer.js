import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Button = styled.button`
  margin: 10px;
  font-size: 20px;
  width: 150px;
  height: 40px;
`;
const ItemsContainer = styled.div`
  display: flex;
`;
const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid black;
  margin: 10px;
  padding: 5px 25px;
  font-size: 25px;
  flex-direction: column;
  justify-content: center;
`;
const HandContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  margin: 10px;
  justify-content: space-between;
`;

export default class ItemRandomizer extends Component {
  renderItems = () => {
    const { rightHand, leftHand } = this.props;

    return (
      <ItemsContainer>
        <ItemContainer>
          <HandContainer>
            <div>R:</div>
            {rightHand[0]}
          </HandContainer>
        </ItemContainer>
        <ItemContainer>
          <HandContainer>
            <div>L:</div>
            {leftHand[0]}
          </HandContainer>
          {leftHand[1] ? (
            <HandContainer>
              <div>L:</div>
              {leftHand[1]}
            </HandContainer>
          ) : null}
        </ItemContainer>
      </ItemsContainer>
    );
  };

  renderSpells = () => {
    const { spells } = this.props;

    return (
      <ItemsContainer>
        {spells.map((spell) => (
          <ItemContainer key={spell}>
            <HandContainer>
              <div>S:</div>
              {spell}
            </HandContainer>
          </ItemContainer>
        ))}
      </ItemsContainer>
    );
  };

  render() {
    const { getRandomItems, clear } = this.props;

    return (
      <Container>
        {this.renderItems()}
        {this.renderSpells()}
        <Button onClick={getRandomItems}>Randomize</Button>
        <Button onClick={clear}>Clear</Button>
      </Container>
    );
  }
}
