import React from 'react';
import styled from 'styled-components';
import Character from './Character';
import Levelization from './Components/Levelization';
import ItemRandomizer from './Components/ItemRandomizer';
import LocationsItems from './Components/LocationsItems';
import SearchItems from './Components/SearchItems';
import { STORAGE_KEY } from './constants';

const { localStorage } = window;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const RowContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    let char;
    const savedChar = localStorage.getItem(STORAGE_KEY);
    if (!savedChar) {
      char = new Character();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(char.getCharToSave()));
    } else {
      char = new Character(JSON.parse(savedChar));
    }

    this.state = {
      char,
    };
  }

  saveCharToStorage = () => localStorage.setItem(
  // eslint-disable-next-line react/destructuring-assignment
    STORAGE_KEY, JSON.stringify(this.state.char.getCharToSave()),
  );

  updateChar = () => {
    this.setState((prevState) => ({ char: prevState.char }));
    this.saveCharToStorage();
  };

  updateStats = (...args) => {
    const { char } = this.state;

    char.updateStats(...args);
    this.updateChar();
  }

  setFounded = (...args) => {
    const { char } = this.state;

    char.setFounded(...args);
    this.updateChar();
  }

  removeFounded = (...args) => {
    const { char } = this.state;

    char.removeFounded(...args);
    this.updateChar();
  }

  updateRandomLvl = () => {
    const { char } = this.state;

    char.updateRandomLvl();
    this.updateChar();
  }

  updateRandomLevels = (...args) => {
    const { char } = this.state;

    const updatedData = char.updateRandomLevels(...args);
    this.updateChar();
    return updatedData;
  }

  getRandomItems = () => {
    const { char } = this.state;

    char.getRandomItems();
    this.updateChar();
  }

  resetCharacter = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload(true);
  }

  render() {
    const { char } = this.state;
    const {
      founded,
      className,
      state,
      spellSlots,
      rightHand,
      leftHand,
      spells,
    } = char;

    return (
      <Container>
        <RowContainer>
          <LocationsItems
            founded={founded}
            setFounded={this.setFounded}
            removeFounded={this.removeFounded}
          />
          <SearchItems
            founded={founded}
            setFounded={this.setFounded}
            removeFounded={this.removeFounded}
          />
        </RowContainer>
        <RowContainer>
          <Levelization
            className={className}
            state={state}
            spellSlots={spellSlots}
            updateStats={this.updateStats}
            updateRandomLvl={this.updateRandomLvl}
            updateRandomLevels={this.updateRandomLevels}
          />
          <ItemRandomizer
            rightHand={rightHand}
            leftHand={leftHand}
            spells={spells}
            getRandomItems={this.getRandomItems}
            clear={this.resetCharacter}
          />
        </RowContainer>
      </Container>
    );
  }
}

export default App;
