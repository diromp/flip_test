import React, { PureComponent } from 'react';
import { Wrapper } from './style';
import Search from './Search';
import List from './List';
class ListTransaction extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Search />
        <List />
      </Wrapper>
    );
  }
}

export default ListTransaction;
