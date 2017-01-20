import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flex: 1,
        margin: 2
    },
    column: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column'
    },
    cellColumn: {
        flexDirection: 'column',
        margin: 2
    },
    cell: {
        backgroundColor: 'grey',
        padding: 4,
        flex: 1
    }
});
