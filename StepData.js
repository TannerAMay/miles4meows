import React from 'react';
import { Pedometer } from 'expo-sensors';
import { Text, View } from 'react-native';

export default class StepData extends React.Component {

    state = {
        isPedometerAvailable: 'checking',
        pastStepCount: 0,
        currentStepCount: 0,
    }

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
                currentStepCount: result.steps,
            })
        });

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
                    pastStepCount: 'Could not get stepCount: ' + error,
                });
            }
        );
    }

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subcribtion = null;
    }

    render() {
        return (
            <View>
                <Text>{this.state.pastStepCount}</Text>
            </View >
        )
    }

}