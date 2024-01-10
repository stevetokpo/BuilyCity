import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Accueil</Text>
                <Text style={styles.paragraph}>
                    Bienvenue sur l'écran d'accueil de l'application. Ici, vous pouvez commencer à naviguer dans les différentes fonctionnalités de l'application.
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
    },
})

export default Home