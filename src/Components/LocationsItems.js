import React, { Component } from 'react';
import styled from 'styled-components';
import { locations } from '../data';
import { isItemInList, findInAllItems } from '../helpers';

const Container = styled.div`
  border: 1px solid black;
  padding: 20px 140px;
  height: 50%;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
const Location = styled.div`
  border: 1px solid black;
  padding: 20px;
`;
const LocationHeader = styled.h2`
  flex: 1;
`;
const LocationItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${(props) => (props.active ? "blue" : "black")};
  justify-content: center;
  align-items: center;
`;
const LocationItem = styled.p`
  margin: 10px;
  margin-left: 20px;
  flex: 1;
`;

export default class LocationsItems extends Component {
    renderLocationsData = () => {
      const { founded } = this.props;
      const locationsList = Object.keys(locations);

      return locationsList.map((locationName) => (
        <Location key={locationName}>
          <LocationHeader>{locationName}</LocationHeader>
          {locations[locationName].map((item) => {
            const checked = isItemInList(founded, item);

            return (
              <LocationItemContainer active={checked} key={item}>
                <input
                  type="checkbox"
                  defaultChecked={checked}
                  onClick={
                  checked ? this.removeFounded(item) : this.setFounded(item)
                  }
                />
                <LocationItem>{item}</LocationItem>
              </LocationItemContainer>
            );
          })}
        </Location>
      ));
    }

    setFounded = (name) => () => {
      const { setFounded } = this.props;
      const { itemType } = findInAllItems(name);

      setFounded(itemType, name);
    }

    removeFounded = (name) => () => {
      const { removeFounded } = this.props;
      const { itemType } = findInAllItems(name);

      removeFounded(itemType, name);
    }

    render() {
      return (
        <Container>
          {this.renderLocationsData()}
        </Container>
      );
    }
}
