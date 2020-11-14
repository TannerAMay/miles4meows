import React from 'react';
import { Pedometer } from 'expo-sensors';
import * as Battery from 'expo-battery';
import { Text, TouchableHighlightBase, View } from 'react-native';
import CatImage from './CatImage';

export default class StepData extends React.Component {

    state = {
        isPedometerAvailable: 'checking',
        pastStepCount: 6000,  // default for dev
        currentStepCount: 0,
        batteryLevel: 0,
    }

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
        // Getting battery info
        const batteryLevel = Battery.getBatteryLevelAsync();
        this.setState({ batteryLevel });

        // Dont think we need this
        // this._subscription = Pedometer.watchStepCount(result => {
        //     this.setState({
        //         currentStepCount: result.steps,
        //     })
        // });

        // If available, we can do things
        Pedometer.isAvailableAsync().then(
            result => {
                this.setState({
                    isPedometerAvailable: String(result),
                });
            },
            error => {
                this.setState({
                    isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
                });
            }
        );

        // Get pedometer from midnight to now
        const start = new Date();
        const end = new Date();
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        Pedometer.getStepCountAsync(start, end).then(
            result => {
                this.setState({ pastStepCount: result.steps });
            },
            error => {
                this.setState({
                    // pastStepCount: 'Could not get stepCount: ' + error,
                    pastStepCount: 6000,  // for testing on Android during dev
                });
            }
        );
    }

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subcribtion = null;
    }
    //<CatImage steps={this.state.pastStepCount} />
    render() {
        return (
            <View>
                <Text>{this.state.pastStepCount.toString()}</Text>
                <Text>{this.state.batteryLevel["_W"]}</Text>
            </View >
        )
    }

}