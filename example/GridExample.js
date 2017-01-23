import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Grid, Row, Cell} from 'react-native-tabular-grid';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    }
});

export default class Example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Grid>
                    <Row id={1}>
                        <Cell rowId={1} id={1}><Text>One</Text></Cell>
                        <Cell rowId={1} id={2}><Text>Two</Text></Cell>
                        <Cell rowId={1} id={3}><Text>Three</Text></Cell>
                    </Row>
                    <Row id={2}>
                        <Cell rowId={2} id={1}><Text>Some text</Text></Cell>
                        <Cell rowId={2} id={2}><Text>Some longer text</Text></Cell>
                        <Cell rowId={2} id={3}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text></Cell>
                    </Row>
                    <Row id={3}>
                        <Cell rowId={3} id={1}><Text>Four</Text></Cell>
                        <Cell rowId={3} id={2}><Text>Five</Text></Cell>
                        <Cell rowId={3} id={3}><Text>Six</Text></Cell>
                    </Row>
                </Grid>
            </View>
        );
    }
}
