import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';

import GridContext from './GridContext';
import style from './style';

const Cell = props => (
  <GridContext.Consumer>
    {({ measureCell }) => {
      return (
        <View
          style={[style.cell, props.style]}
          onLayout={({ nativeEvent }) => {
            const { x, y, width, height } = nativeEvent.layout;
            measureCell(props.rowId, props.id, x, y, width, height);
          }}
        >
          {props.children}
        </View>
      );
    }}
  </GridContext.Consumer>
);

Cell.propTypes = {
  children: PropTypes.node,
  rowId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default Cell;
