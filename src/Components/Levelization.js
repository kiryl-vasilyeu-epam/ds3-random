import React, { Component } from 'react';
import styled from 'styled-components';
import { stats } from '../data';

const Container = styled.div`
  border: 1px solid black;
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
const StatsContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  margin: 0px 10px;
  flex: 1;
`;
const ControlsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StatChangeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid black;
  margin: 5px;
  flex: 1;
`;
const StatName = styled.p`
  flex: 1;
`;
const Button = styled.button`
  margin: 5px;
  font-size: 20px;
`;
const Input = styled.input`
  margin: 5px;
  text-align: center;
  font-size: 25px;
  width: 100px;
`;
const Updated = styled.p`
  flex: 1;
`;

export default class Levelization extends Component {
  state = {
    input: '10',
    lastUpdated: {},
  }

  renderAllStats = () => {
    const { lastUpdated } = this.state;
    const { state, spellSlots } = this.props;
    return (
      <>
        <StatContainer>
          <StatName>Level:</StatName>
          <h4>{state.lvl}</h4>
        </StatContainer>
        <StatContainer>
          <StatName>Spell Slots</StatName>
          <h4>{spellSlots}</h4>
        </StatContainer>
        {stats.map((stat) => (
          <StatChangeContainer key={stat}>
            <Button onClick={this.updateStat(stat, true)}>-</Button>
            <StatContainer>
              <StatName>{`${stat}:`}</StatName>
              {
                lastUpdated[stat] ? (
                  <Updated>{`+${lastUpdated[stat]}`}</Updated>
                ) : null
              }
              <h4>{state[stat]}</h4>
            </StatContainer>
            <Button onClick={this.updateStat(stat)}>+</Button>
          </StatChangeContainer>
        ))}
      </>
    );
  }

  updateStat = (stat, isLower) => () => {
    const { updateStats } = this.props;
    updateStats(stat, isLower);
  }

  handleChange = (event) => {
    const input = event.target.value;
    if (Number.isNaN(input)) return;

    this.setState({
      input,
    });
  }

  updateOneLvl = () => {
    const { updateRandomLevels } = this.props;
    const updated = updateRandomLevels(1);
    this.setState({ lastUpdated: updated });
  }

  updateLevels = () => {
    const { input } = this.state;
    const { updateRandomLevels } = this.props;
    const updated = updateRandomLevels(+input);
    this.setState({ lastUpdated: updated });
  }

  render() {
    const { className } = this.props;
    const { input } = this.state;

    return (
      <Container>
        <InfoContainer>
          <h1>{className}</h1>
          <StatsContainer>
            {this.renderAllStats()}
          </StatsContainer>
        </InfoContainer>
        <ControlsContainer>
          <Button onClick={this.updateOneLvl}>Update 1 lvl</Button>
          <Input value={input} onChange={this.handleChange} />
          <Button onClick={this.updateLevels}>{`Update ${input} lvl's`}</Button>
        </ControlsContainer>
      </Container>
    );
  }
}
