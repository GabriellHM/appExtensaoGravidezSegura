import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen({navigation}) {

    return (
        <ImageBackground source={require('../../assets/background_image.png')} resizeMode='cover' style={ styles.MainContainer }>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Gravidez Segura</Text>
                </View>
                <View style={styles.pageContainer}>
                    <View style={styles.optionsMainContainer}>
                        <View style={styles.optionButtonContainer}>
                            <TouchableOpacity
                                style={styles.OptionButtons}
                                onPress={() => navigation.navigate('IdadeGestacionalScreen')}
                            >
                                <Icon name="calculator" size={50} color="#FFFFFF" />
                            </TouchableOpacity>
                            <Text style={styles.OptionText}>Idade Gestacional</Text>
                        </View>

                        <View style={styles.optionButtonContainer}>
                            <TouchableOpacity
                                style={styles.OptionButtons}
                                onPress={() => navigation.navigate('LinhasDeCuidadoScreen')}
                            >
                                <Icon name="book" size={50} color="#FFFFFF" />
                            </TouchableOpacity>
                            <Text style={styles.OptionText}>Linhas de Cuidado</Text>
                        </View>
                    </View>

                    <View style={styles.optionsMainContainer}>
                        <View style={styles.optionButtonContainer}>
                            <TouchableOpacity
                                style={styles.OptionButtons}
                                onPress={() => navigation.navigate('PlanoDePartoScreen')}
                            >
                                <Icon name="clipboard" size={50} color="#FFFFFF" />
                            </TouchableOpacity>
                            <Text style={styles.OptionText}>Plano de Parto</Text>
                        </View>
                        <View style={styles.optionButtonContainer}>
                            <TouchableOpacity
                                style={styles.OptionButtons}
                                onPress={() => navigation.navigate('MinhasAnotacoesScreen')}
                            >
                            <Icon name="pencil" size={50} color="#FFFFFF" />
                            </TouchableOpacity>
                            <Text style={styles.OptionText}>Minhas Anotações</Text>
                        </View>
                    </View>
                </View>
        </ImageBackground>
    );
}

export default HomeScreen;