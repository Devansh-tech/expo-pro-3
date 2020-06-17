import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
    async playSound(url) {
        try {
            await Audio.setIsEnabledAsync(true);
            var playbackObject = await Audio.Sound.createAsync({ uri: url }, { shouldPlay: true });
            // Your sound is playing!
        } catch (error) {
            console.log();
        }
    }

    render() {
        return ( <
            View >
            <
            View style = {
                { width: 200, height: 100, marginTop: 80 } } >
            <
            Button title = "sound1"
            color = "red"
            onPress = {
                () => {
                    var url = 'https://freesound.org/s/501719/';
                    this.playSound(url);
                }
            }
            /> <
            /View> <
            View style = {
                { width: 200, height: 100, marginTop: 20, marginLeft: 150 } } >
            <
            Button title = "sound2"
            color = "blue"
            onPress = {
                () => {
                    var url = 'https://freesound.org/s/408930/';
                    this.playSound(url);
                }
            }
            /> <
            /View> <
            View style = {
                { width: 180, height: 100, marginTop: 20 } } >
            <
            Button title = "sound3"
            color = "purple"
            onPress = {
                () => {
                    var url = 'https://freesound.org/s/507119/';
                    this.playSound(url);
                }
            }
            /> <
            /View> <
            View style = {
                {
                    width: 180,
                    height: 100,
                    marginTop: 20,
                    marginLeft: 80,
                    marginRight: 80,
                }
            } >
            <
            Button title = "sound4"
            color = "green"
            onPress = {
                () => {
                    var url = 'https://freesound.org/s/507119/';
                    this.playSound(url);
                }
            }
            />

            <
            /View> <
            Button title = "Stop Sound"
            color = "red"
            style = {
                {
                    width: 180,
                    height: 100,
                    marginTop: 50,

                }
            }
            onPress = {
                () => {
                    Audio.setIsEnabledAsync(false);
                }
            }
            /> <
            /View>

        );
    }
}