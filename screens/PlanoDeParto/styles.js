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
    pageContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    backgroundContainer: {
        flex: 1,
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

    pageSubTitleContainer: {
        flex: 0.7,
        width: '80%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    pageDescContainer: {
        width: '90%',
        alignItems: 'left', 
        justifyContent: 'flex-start',
    },
    pageDesc: {
        fontSize: 18,
        textAlign: 'justify',
    },
    scrollViewPlanosDeParto: {
        flex: 3,
        width: '85%',
        justifyContent: 'flex-start',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    planoItemContainer: {
        flex: 1,
        width: '95%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 5,
    },
    planoItem: {
        width: '90%',
        backgroundColor: '#86a67c',
        borderRadius: 5,
        borderWidth: 1,
        padding: 5,
        marginRight: 4,
    },
    planoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    deletePlanoItemButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
    },
    addButtonContainer: {
        width: '80%',
        marginBottom: 5,
    },
    addButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6ba15a",
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 10,
        borderWidth: 1,
    },
    addButtonText: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
    },
    contentInput: {
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'left',
        padding: 5,
        marginTop: 5,
    },
    scrollViewContainer: {
        flex: 1,
        marginTop: 15,
        alignItems: "left",
        justifyContent: "flex-start",
        marginLeft: '5%',
        marginRight: '5%',
    },
    modalContainer: {
        flex: 1,
    },
    modalInputContainer: {
        flex: 1,
    },
    textoDaPergunta: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
    },
    dropdownStyle: {
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderRadius: 10,
        padding: 5,
    },
    dropdownPlaceHolderStyle :{

    },
    dropdownSelectedTextStyle: {

    },
    formButtonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    saveButtonStyle: {
        
    },
    cancelButtonStyle: {
        
    },
    buttonContainerStyle: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
});

export default styles;