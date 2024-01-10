import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Video } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Font from 'expo-font'

const Introduction = ({ navigation }) => {
    useEffect(() => {
        const checkFirstLaunch = async () => {
            const hasLaunched = await AsyncStorage.getItem('hasLaunched')
            if ( hasLaunched ) {
                navigation.replace('Home')
            }
        }

        checkFirstLaunch()
        Font.loadAsync({
            'Inter': require('../assets/fonts/Inter/Inter-Regular.ttf'),
        })
    }, [])

    const handlePressCommencer = async () => {
        await AsyncStorage.setItem('hasLaunched', 'true')
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Video
                source={require('../assets/bg.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.video}
            />
            <Text style={styles.title}>
                Bienvenue sur Buily City
                </Text>
            <Text style={styles.subtitle}>
                L'application des informations en temps réel africain
            </Text>
            <TouchableOpacity onPress={handlePressCommencer} style={styles.button}>
                <Text style={styles.buttonText}>COMMENCER</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    title: {
        fontSize: 22,
        color: '#fff',
        fontFamily: 'Inter',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Inter',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FA1818',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Inter',
    },
})

export default Introduction