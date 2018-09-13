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

  measured = false;

  state = {
      columns: [],
      rowHeights: {},
      redraw: false,
      didRedraw: false
  };

  get lastRow() {
      return this.props.children[this.props.children.length - 1];
  }

  componentDidUpdate() {
      // Force redraw to update column measurements
      if (this.state.redraw) {
          setTimeout(() => {
              this.setState({
                  redraw: false,
                  didRedraw: true
              });
          }, 100);
      }
  }

  addRowToGrid = (rowId, rowChildren) => {
      this.mapRowIntoColumns(rowChildren);
      if (rowId === this.lastRow.props.id) {
          this.setState({
              columns: this.columns
          });
      }
  };

  measureCell = (rowId, cellId, height) => {
      this.rowHeights[rowId] = Math.max(height, this.rowHeights[rowId] || 0);
      // Update if this is the last cell
      if (rowId === this.lastRow.props.id) {
          this.updateRowHeights(rowId, cellId);
      }
  };

  mapRowIntoColumns(rowChildren) {
      rowChildren.forEach((cell, index) => {
          if (!this.columns[index]) {
              this.columns[index] = [];
          }
          this.columns[index].push(cell);
      });
  }

  updateRowHeights(rowId, cellId) {
      this.measured = true;
      const lastCell = this.lastRow.props.children[this.lastRow.props.children.length - 1];
      if (cellId === lastCell.props.id) {
          this.setState(state => ({
              rowHeights: this.rowHeights,
              redraw: !state.didRedraw
          }));
      }
  }

  renderContent = () => {
      const { rowHeights, columns } = this.state;

      if (columns.length === 0) {
          return <View style={style.grid}>{this.props.children}</View>;
      }

      return (
          <View style={[style.grid, style.gridColumn, this.props.style]}>
              {columns.map((col, colIndex) => (
                  <View key={`col.${colIndex}`} style={style.column}>
                      {col.map((cell, rowIndex) => (
                          <View
                              key={`row.${rowIndex}`}
                              style={{
                                  minHeight: rowHeights[rowIndex + 1] || 0
                              }}
                          >
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
