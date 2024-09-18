
import { ImageBackground, StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    pageContainer: {
        flex: 4, 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    },
    optionsMainContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingBottom: 30,
    },
    optionButtonContainer: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    OptionButtons: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:90,
        height:90,
        backgroundColor:'#86a67c',
        borderRadius:90,
    },

    OptionText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default styles;