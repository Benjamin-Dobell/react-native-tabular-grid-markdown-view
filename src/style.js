import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        borderColor: 'lightgrey',
        borderLeftWidth: 1,
        borderBottomWidth: 1
    },
    gridColumn: {
        flexDirection: 'row'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    column: {
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 1,
        borderColor: 'lightgrey',
        borderRightWidth: 1
    },
    cell: {
        padding: 4,
        borderColor: 'lightgrey',
        borderTopWidth: 1
    }
});
