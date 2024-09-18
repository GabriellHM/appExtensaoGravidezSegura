import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    headerContainer: {
        height: '10%',
        alignItems: 'left', 
        justifyContent: 'center',
    },
    backButton: {
        alignItems: 'center',
        width: 30,
        marginLeft: 15,
        marginTop: 15,
        borderRadius: 20,
    },
    backgroundContainer: {
        flex: 1,
    },
    pageContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    pageTitleContainer: {
        flex: 1,
        width: '80%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    pageTitle: {
        fontSize: 30,
        width: '70%',
        textAlign: 'center',
    },
    linhasDeCuidadoContainer: {
        flex: 3,
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '70%',
    },
    linhasDeCuidadoTouchable: {
        borderWidth: 1,
        borderColor: '#86a67c',
        height: 50,
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#86a67c',
    },
    linhasDeCuidadoTouchableText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000'
    },
    paragrafoScrollView: {
        flex: 6,
        alignItems: 'left',
        justifyContent: 'flex-start',
    },
    paragrafoTexto: {
        fontSize: 18,
        margin: 15,
        textAlign: 'justify',
    }
});

export default styles;