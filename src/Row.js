import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import GridContext from './GridContext';
import style from './style';

const Row = ({ id, children }) => (
  <GridContext.Consumer>
    {({ addRowToGrid }) => {
      addRowToGrid(id, children);
      return <View style={style.row}>{children}</View>;
    }}
  </GridContext.Consumer>
);

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  id: PropTypes.number.isRequired
};

export default Row;
