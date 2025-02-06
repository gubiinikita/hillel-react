import React from 'react';
import { useDispatch } from 'react-redux';
import { clearData } from '../store/actions/swapiActions';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer>
      <button onClick={() => dispatch(clearData())}>Clear Data</button>
    </footer>
  );
};

export default Footer;