import React, {Component} from 'react';
import {View} from 'react-native';

import style from './style';

export default class Cell extends Component {

    static propTypes = {
        children: React.PropTypes.node,
        rowId: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired
    };

    static contextTypes = {
        rntgMeasureCell: React.PropTypes.func
    };

    updateCell(cell) {
        cell && cell.measure((x, y, w, h) => {
            this.context.rntgMeasureCell(this.props.rowId, this.props.id, x, y, w, h);
        });
    }

    render() {
        return (
            <View style={[style.cell, this.props.style]} ref={this.updateCell.bind(this)}>
                {this.props.children}
            </View>
        );
    }
}
