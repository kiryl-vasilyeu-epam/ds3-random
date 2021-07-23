import React, { Component } from 'react';
import styled from 'styled-components';
import { allItems } from '../data';
import { isItemInList, filterAllItems } from '../helpers';

const Container = styled.div`
  border: 1px solid black;
  padding: 20px 140px;
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  border: 1px solid black;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const SearchContainer = styled.div`
  height: 20%;
`;
const Item = styled.div`
  flex: 1;
  padding: 5px 20px;
`;
const ItemHeader = styled.h2`
  text-transform: capitalize;
`;
const ItemItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${(props) => (props.checked ? "blue" : "black")};
  justify-content: center;
  align-items: center;
`;
const ItemItem = styled.p`
  margin: 10px;
  margin-left: 20px;
  flex: 1;
`;
const Search = styled.input`
  width: 100%;
  height: 40px;
  font-size: 30px;
  padding: 0px 20px;
  flex: 1;
`;

export default class SearchItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      itemsToRender: allItems,
    };
  }

    renderItemsData = () => {
      const { itemsToRender } = this.state;

      const { founded } = this.props;
      const itemsList = Object.keys(itemsToRender);

      return itemsList.map((itemType) => (
        <Item key={itemType}>
          <ItemHeader>{itemType}</ItemHeader>
          {itemsToRender[itemType].map((item) => {
            const checked = isItemInList(founded, item.name);

            return (
              <ItemItemContainer checked={checked} key={item.name}>
                <input
                  type="checkbox"
                  defaultChecked={checked}
                  onClick={
                  checked ? this.removeFounded(item, itemType) : this.setFounded(item, itemType)
                  }
                />
                <ItemItem>{item.name}</ItemItem>
              </ItemItemContainer>
            );
          })}
        </Item>
      ));
    }

    setFounded = (item, type) => () => {
      const { name } = item;
      const { setFounded } = this.props;

      setFounded(type, name);
    }

    removeFounded = (item, type) => () => {
      const { name } = item;
      const { removeFounded } = this.props;

      removeFounded(type, name);
    }

    handleChange = (event) => {
      const input = event.target.value;

      this.setState({
        input,
        itemsToRender: filterAllItems(input),
      });
    }

    render() {
      const { input } = this.state;

      return (
        <Container>
          <SearchContainer>
            <h1>Search</h1>
            <Search type="search" value={input} onChange={this.handleChange} />
          </SearchContainer>
          <ContentContainer>
            {this.renderItemsData()}
          </ContentContainer>
        </Container>
      );
    }
}
