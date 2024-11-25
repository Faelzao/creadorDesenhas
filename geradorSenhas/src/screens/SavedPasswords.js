import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function SavedPasswords({ route }) {
    const { savedPasswords } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Senhas Salvas</Text>
            <FlatList
                data={savedPasswords}
                keyExtractor={(item, index) => index.toString()} // Melhor usar um identificador único se disponível
                renderItem={({ item }) => (
                    <View style={styles.passwordContainer}>
                        <Text style={styles.passwordText}>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  // Garantir que ocupe toda a altura da tela
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center', // Alinhar o título ao centro
        color: '#ffff',
    },
    passwordContainer: {
        backgroundColor: "#ffff",
        padding: 15,
        marginVertical: 8, // Aumentei o espaçamento entre os itens
        borderRadius: 8,
        width: '100%', // Garantir que ocupe toda a largura disponível
        alignItems: 'center', // Centralizar o texto dentro do contêiner
    },
    passwordText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center', // Alinhar o texto ao centro
    },
});
