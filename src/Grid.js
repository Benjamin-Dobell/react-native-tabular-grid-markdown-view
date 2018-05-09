import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import GridContext from './GridContext';
import style from './style';

export default class GridProvider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  };

  columns = [];
  rowHeights = {};

  state = {
    columns: [],
    rowHeights: {}
  };

  get lastChild() {
    return this.props.children[this.props.children.length - 1];
  }

  addRowToGrid = (rowId, rowChildren) => {
    this.mapRowIntoColumns(rowChildren);
    this.updateIfRowIsLast(rowId);
  };

  measureCell = (rowId, cellId, x, y, w, h) => {
    this.rowHeights[rowId] = Math.max(h, this.rowHeights[rowId] || 0);
    this.updateIfCellIsLast(rowId, cellId);
  };

  mapRowIntoColumns(rowChildren) {
    rowChildren.forEach((cell, index) => {
      if (!this.columns[index]) {
        this.columns[index] = [];
      }
      this.columns[index].push(cell);
    });
  }

  updateIfRowIsLast(rowId) {
    // If we have all rows, save the column structure into 'state' so
    // That we can render it
    if (rowId === this.lastChild.props.id) {
      this.setState({
        columns: this.columns
      });
    }
  }

  updateIfCellIsLast(rowId, cellId) {
    if (rowId === this.lastChild.props.id) {
      const lastCell = this.lastChild.props.children[this.lastChild.props.children.length - 1];
      if (cellId === lastCell.props.id) {
        this.setState({
          rowHeights: { ...this.rowHeights }
        });
      }
    }
  }

  renderContent = () => {
    if (this.columns.length === 0) {
      return <View style={style.grid}>{this.props.children}</View>;
    }
    return (
      <View style={[style.grid, style.gridColumn, this.props.style]}>
        {this.columns.map((col, i) => (
          <View key={i} style={style.column}>
            {col.map((cell, index) => (
              <View key={index} style={[{ minHeight: this.state.rowHeights && this.state.rowHeights[index + 1] }]}>
                {cell}
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

  render() {
    return (
      <GridContext.Provider value={{ addRowToGrid: this.addRowToGrid, measureCell: this.measureCell }}>
        {this.renderContent()}
      </GridContext.Provider>
    );
  }
}
