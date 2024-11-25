import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

export function ModalPassword({ senha, fecharModal, salvarSenha }) {

    function copyToClipboard() {
        Clipboard.setString(senha); // Corrigido para setString ao invés de setStringAsync
        Toast.show({
            type: 'success',
            text1: 'Senha copiada!',
            text2: 'A senha foi copiada para a área de transferência', // Corrigido 'transferência'
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onPress={copyToClipboard}>
                    <Text style={styles.text}>{senha}</Text>
                </Pressable>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn} onPress={fecharModal}>
                        <Text style={styles.btnText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSave} onPress={salvarSenha}>
                        <Text style={styles.btnTextSave}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Toast /> {/* Corrigido: Toast deve ser fora do View */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: '#FFF',
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 18,
    },
    innerPassword: {
        backgroundColor: "#E6E6E6",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    btnArea: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 14,
    },
    btnTextSave: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    btnText: {
        fontWeight: 'bold',
        color: '#000', // Garantido que o texto do botão "Voltar" seja visível
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    btnSave: {
        flex: 1,
        alignItems: 'center',
        padding: 8,
        backgroundColor: "#333",
        borderRadius: 8,
    },
});
