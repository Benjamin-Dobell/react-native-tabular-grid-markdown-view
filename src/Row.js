import React, {Component} from 'react';
import {View} from 'react-native';

export default class Row extends Component {

    static propTypes = {
        children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
        id: React.PropTypes.number.isRequired
    };

    static contextTypes = {
        rntgAddRowToGrid: React.PropTypes.func
    };

    static childContextTypes = {
        rntgrowId: React.PropTypes.number
    };

    getChildContext() {
        return {
            rntgrowId: this.props.id
        };
    }

    componentWillMount() {
        this.context.rntgAddRowToGrid(this);
    }

    render() {
        return <View>{this.props.children}</View>;
    }
}
