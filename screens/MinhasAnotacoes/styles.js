import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
    },
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
    container: {
        flex: 1,
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    noteList: {
        flex: 1,
    },

    noteItemContainer: {
        flex: 1,
        width: '95%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 5,
    },

    noteItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#86a67c',
        borderRadius: 5,
        padding: 5,
        marginRight: 4,
        borderWidth: 1,
    },

    deleteItemButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
    },

    noteTitle: {
        fontSize: 18,
        padding: 3,
        fontWeight: "bold",
        color: "black",
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
    modalContainer: {
        flex: 1,
        padding: 50,
        backgroundColor: "white",
    },
    input: {
        borderWidth: 1,
        borderColor: "#E0E0E0",
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    contentInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        height: 150,
        verticalAlign : 'top',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default styles;