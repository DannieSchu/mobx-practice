import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../../store/StoreProvider';

const Header = () => {
  const store = useContext(StoreContext);
  
  return useObserver(() => (
    <h3>Number of Books: {store.booksCount}</h3>
  ))
}

export default Header;
