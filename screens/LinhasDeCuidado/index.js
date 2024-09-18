import { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function LinhasDeCuidadoScreen({navigation}) {
    const [modalSubOptionVisible, setModalSubOptionVisible] = useState(false);
    const [modalContentVisible, setModalContentVisible] = useState(false);   
    const [selectedOption, setSelectedOption] = useState([]);
    const [selectedOptionTitle, setSelectedOptionTitle] = useState('');
    const [selectedSubOption, setSelectedSubOption] = useState([]);
    const dadosCuidados = require('../../data/linhasDeCuidado.json');
    
    const handleSelectOption = (selOption) => {
        setSelectedOption(selOption.subtemas);
        setSelectedOptionTitle(selOption.tema);
        setModalSubOptionVisible(true);
    }

    const handleSelectedSubOption = (subOption) => {
        setSelectedSubOption(subOption.conteudo);
        setModalContentVisible(true);
    }


    return (
        /* Container principal da página */
        <ImageBackground source={require('../../assets/background_image.png')} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Icon name="chevron-left" size={30} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={styles.pageContainer}>
                <View style={styles.pageTitleContainer}>
                    <Text style={styles.pageTitle}>Linhas de Cuidado</Text>
                </View>

                {/* Container dos botões das linhas de cuidado */}
                <View style={styles.linhasDeCuidadoContainer}>
                    {dadosCuidados.map((dadosCuidados) => (
                        <TouchableOpacity 
                            key={dadosCuidados.id}
                            onPress={() => handleSelectOption(dadosCuidados)}
                            style={styles.linhasDeCuidadoTouchable}>
                            <Text style={styles.linhasDeCuidadoTouchableText}>{dadosCuidados.tema}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Modal das opções secundárias */}
                <Modal
                    visible={modalSubOptionVisible}
                    animationType='slide'
                    transparent={false}
                >
                    <ImageBackground source={require('../../assets/background_image.png')} style={styles.backgroundContainer}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity style={styles.backButton} onPress={() => setModalSubOptionVisible(false)}>
                                <Icon name="chevron-left" size={30} color="#000000" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pageContainer}>
                            <View style={styles.pageTitleContainer}>
                                <Text style={styles.pageTitle}>{selectedOptionTitle}</Text>
                            </View>
                            <View style={styles.linhasDeCuidadoContainer}>
                            {selectedOption.map((selectedOption) => (
                                <TouchableOpacity 
                                    key={selectedOption.id}
                                    onPress={() => handleSelectedSubOption(selectedOption)}
                                    style={styles.linhasDeCuidadoTouchable}>
                                    <Text style={styles.linhasDeCuidadoTouchableText}>{selectedOption.titulo}</Text>
                                </TouchableOpacity>
                            ))}
                            </View>
                        </View>
                    </ImageBackground>
                </Modal>

                {/* Modal do conteúdo */}
                <Modal
                    visible={modalContentVisible}
                    animationType='slide'
                    transparent={false}
                >
                    <ImageBackground source={require('../../assets/background_image.png')} style={styles.backgroundContainer}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity style={styles.backButton} onPress={() => setModalContentVisible(false)}>
                                <Icon name="chevron-left" size={30} color="#000000" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pageContainer}>
                            <View style={styles.pageTitleContainer}>
                                <Text style={styles.pageTitle}>{selectedSubOption.titulo}</Text>
                            </View>
                            <View style={styles.paragrafoScrollView}>
                            <ScrollView>
                                <View>
                                    <Text style={styles.paragrafoTexto}>{selectedSubOption.paragrafo1}</Text>
                                </View>
                                <View>
                                    <Text style={styles.paragrafoTexto}>{selectedSubOption.paragrafo2}</Text>
                                </View>
                            </ScrollView>
                            </View>
                        </View>
                    </ImageBackground>
                </Modal>
                </View>
        </ImageBackground>
    );
}

export default LinhasDeCuidadoScreen;