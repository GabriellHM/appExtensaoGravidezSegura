
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
    PageTitleContainer: {
        height: '15%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    PageTitleText: {
        fontSize: 30,
    },
    MainContainer: {
        flex: 1, 
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    OptionContainer: {
        height: '75%',
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    OptionButtons: {
        borderWidth: 1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width: '75%',
        height: 60,
        backgroundColor: '#86a67c',
        marginTop: 20,
    },
    OptionText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 3,
    },
    InputContainer: {
        flex: 0.35,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'flex-start',
        width: '75%',
        backgroundColor: '#fff',
    },
    DatePicker: {
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '80%',
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        fontSize: 20,
    },
    InputContainerText: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        fontSize: 20,
    },
    DatePickerText: {
        fontSize: 20,
    },
    EcoIdadeInputContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    EcoIdadePicker: {
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '40%',
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        fontSize: 20,
    },
    EcoInputContainer: {
        flex: 0.45,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'flex-start',
        width: '75%',
        backgroundColor: '#fff',
    },
})

export default styles;