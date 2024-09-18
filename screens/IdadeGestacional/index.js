import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import { DatePicker, Picker } from 'react-native-woodpicker';
import Icon from 'react-native-vector-icons/FontAwesome';

function IdadeGestacionalScreen({navigation}) {
    const [DUMElementVisible, setDUMElementVisible] = useState(false);
    const [EcoElementVisible, setEcoElementVisible] = useState(false);
    const [DUMCalcElementVisible, setDUMCalcElementVisible] = useState(false);
    const [EcoCalcElementVisible, setEcoCalcElementVisible] = useState(false);
    
    const [DUMDate, setDUMDate] = useState();
    const [SemIdadeGestDUM, setSemIdadeGestDUM] = useState();
    const [DiaIdadeGestDUM, setDiaIdadeGestDUM] = useState();
    const [DataPartoDUM, setDataPartoDUM] = useState('');

    const [EcoDate, setEcoDate] = useState();
    const [SemIdadeGestEco, setSemIdadeGestEco] = useState();
    const [DiaIdadeGestEco, setDiaIdadeGestEco] = useState();
    const [DataPartoEco, setDataPartoEco] = useState('');
    const [EcoSemIdadeInputText, setEcoSemIdadeInputText] = useState(-1);
    const [EcoDiaIdadeInputText, setEcoDiaIdadeInputText] = useState(-1);

    const pickerSemArray = [
        { label: "1 semana", value: 1 },
        { label: "2 semanas", value: 2 },
        { label: "3 semanas", value: 3 },
        { label: "4 semanas", value: 4 },
        { label: "5 semanas", value: 5 },
        { label: "6 semanas", value: 6 },
        { label: "7 semanas", value: 7 },
        { label: "8 semanas", value: 8 },
        { label: "9 semanas", value: 9 },
        { label: "10 semanas", value: 10 },
        { label: "11 semanas", value: 11 },
        { label: "12 semanas", value: 12 },
        { label: "13 semanas", value: 13 },
        { label: "14 semanas", value: 14 },
        { label: "15 semanas", value: 15 },
        { label: "16 semanas", value: 16 },
        { label: "17 semanas", value: 17 },
        { label: "18 semanas", value: 18 },
        { label: "19 semanas", value: 19 },
        { label: "20 semanas", value: 20 },
        { label: "21 semanas", value: 21 },
        { label: "22 semanas", value: 22 },
        { label: "23 semanas", value: 23 },
        { label: "24 semanas", value: 24 },
        { label: "25 semanas", value: 25 },
        { label: "26 semanas", value: 26 },
        { label: "27 semanas", value: 27 },
        { label: "28 semanas", value: 28 },
        { label: "29 semanas", value: 29 },
        { label: "30 semanas", value: 30 },
        { label: "31 semanas", value: 31 },
        { label: "32 semanas", value: 32 },
        { label: "33 semanas", value: 33 },
        { label: "34 semanas", value: 34 },
        { label: "35 semanas", value: 35 },
        { label: "36 semanas", value: 36 },
        { label: "37 semanas", value: 37 },
        { label: "38 semanas", value: 38 },
        { label: "39 semanas", value: 39 },
    ];

    const pickerDiaArray = [
        { label: "0 dias", value: 0 },
        { label: "1 dia", value: 1 },
        { label: "2 dias", value: 2 },
        { label: "3 dias", value: 3 },
        { label: "4 dias", value: 4 },
        { label: "5 dias", value: 5 },
        { label: "6 dias", value: 6 },
    ];

    const handleTextDatePickerDUM = () => DUMDate
    ? DUMDate.toLocaleDateString()
    : "DUM (dd/mm/aaaa)";

    const handleTextDatePickerEco = () => EcoDate
    ? EcoDate.toLocaleDateString()
    : "Ecografia (dd/mm/aaaa)";


    const calculosDUM = (date) => {
        //setar a variavel DUMDate
        setDUMDate(date);
        //numero de millisegundos em um dia
        const millisecondsInADay = 24 * 60 * 60 * 1000;
        //variavel do dia de hoje
        var currentTime = new Date();
        //diferença entre hoje e DUMdate em dias
        var days =  Math.floor((currentTime - date) / millisecondsInADay);

        //impedir que a idade gestacional seja negativa.
        if (days >= 0) {
            setSemIdadeGestDUM(Math.floor(days/7));
            setDiaIdadeGestDUM(days % 7);
        }
        else {
            setSemIdadeGestDUM(0);
            setDiaIdadeGestDUM(0);
        }

        // dias para somar para o calculo de data de parto
        daysToAdd = (7 * 40) + 1;

        var newDate = new Date(date)
        newDate.setDate(newDate.getDate() + daysToAdd)
        var DatadoParto = new Date(newDate);

        //setar a variavel DataPartoDUM
        setDataPartoDUM(DatadoParto.toLocaleDateString());
        setDUMCalcElementVisible(true);
    }

    const calculosEco = (value, tipo) => {
        switch (tipo) {
            case 'data':
                setEcoDate(value);
                var dataEcografia = new Date(value.value);
                var IdadeEcografiaSemana = EcoSemIdadeInputText;
                var IdadeEcografiaDia = EcoDiaIdadeInputText;
                break;
            case 'sem':
                setEcoSemIdadeInputText(value.value);
                var dataEcografia = new Date(EcoDate);
                var IdadeEcografiaSemana = value.value;
                var IdadeEcografiaDia = EcoDiaIdadeInputText;
                break;
            case 'dia':
                setEcoDiaIdadeInputText(value.value);
                var dataEcografia = new Date(EcoDate);
                var IdadeEcografiaSemana = EcoSemIdadeInputText;
                var IdadeEcografiaDia = value.value;
                break;
        }

        if (
                   (EcoSemIdadeInputText === -1 && IdadeEcografiaSemana === -1) 
                || (EcoDiaIdadeInputText === -1 && IdadeEcografiaDia === -1) 
                || (EcoDate === undefined && dataEcografia === undefined)
        )
            return;
        
        //data atual
        var today = new Date();
        //numero de millisegundos em um dia
        const millisecondsInADay = 24 * 60 * 60 * 1000;
        const millisecondsInAWeek = 7 * 24 * 60 * 60 * 1000;

        //calculando diferença entre as data em dias e semanas
        var difSem = Math.floor((today - dataEcografia) / millisecondsInAWeek);
        var difDias = Math.floor((today - dataEcografia) / millisecondsInADay) - (difSem * 7);

        if ((difDias + IdadeEcografiaDia) > 6){
            setSemIdadeGestEco(difSem + IdadeEcografiaSemana + 1);
            setDiaIdadeGestEco(difDias + IdadeEcografiaDia - 7);
        }
        else {
            setSemIdadeGestEco(difSem + IdadeEcografiaSemana);
            setDiaIdadeGestEco(difDias + IdadeEcografiaDia);
        }
        

        // dias para somar para o calculo de data de parto
        idadeGestDoParto = (7 * 40) + 1;
        idadeGestEmDias = ((IdadeEcografiaSemana + difSem) * 7) + difDias + IdadeEcografiaDia

        var newDate = new Date()
        newDate.setDate(newDate.getDate() + (idadeGestDoParto - idadeGestEmDias))
        var DatadoParto = new Date(newDate);

        //setar a variavel DataPartoDUM
        setDataPartoEco(DatadoParto.toLocaleDateString());

        setEcoCalcElementVisible(true);
    }

    return (
        <ImageBackground source={require('../../assets/background_image.png')} resizeMode='cover' style={ styles.MainContainer }>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Icon name="chevron-left" size={30} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={styles.PageTitleContainer}>
                <Text style={styles.PageTitleText}>Idade Gestacional</Text>
            </View>
            <Text style={{paddingLeft: '12.5%', fontSize: 20,}}>Via de Cálculo:</Text>
            <View style={styles.OptionContainer}>
                <TouchableOpacity
                                    style={styles.OptionButtons}
                                    onPress={() => setDUMElementVisible(!DUMElementVisible)}
                                >
                    <Text style={styles.OptionText}>Data da última menstruação (DUM)</Text>
                </TouchableOpacity>

                {DUMElementVisible ? (
                    <View style={styles.InputContainer}>
                        <View style={styles.DatePicker}>
                        <DatePicker
                            value={DUMDate}
                            onDateChange={calculosDUM}
                            title=""
                            text={handleTextDatePickerDUM()}
                            isNullable={false}
                            iosDisplay="inline"
                            textInputStyle={styles.DatePickerText}
                        />
                        </View>
                        {DUMCalcElementVisible ?(
                        <View>
                            <Text style={styles.InputContainerText}>Idade gestacional: {SemIdadeGestDUM} semanas e {DiaIdadeGestDUM} dias.</Text>
                            <Text style={styles.InputContainerText}>Data prevista para o parto: {DataPartoDUM}.</Text>
                        </View>
                        ) : null}
                    </View>
                ) : null}

                <TouchableOpacity
                                    style={styles.OptionButtons}
                                    onPress={() => setEcoElementVisible(!EcoElementVisible)}
                                >
                    <Text style={styles.OptionText}>Ecografia</Text>
                </TouchableOpacity>
                {EcoElementVisible ? (
                    <View style={styles.EcoInputContainer}>
                        <View style={styles.DatePicker}>
                        <DatePicker
                            value={EcoDate}
                            onDateChange={(value) => {calculosEco(value,'data')}}
                            title="Selecione a data da ecografia."
                            text={handleTextDatePickerEco()}
                            isNullable={false}
                            iosDisplay="inline"
                            textInputStyle={styles.DatePickerText}
                        />
                        </View>
                        <View style={styles.EcoIdadeInputContainer}>
                            <View style={styles.EcoIdadePicker}>
                                <Picker 
                                    items={pickerSemArray} 
                                    item={EcoSemIdadeInputText}
                                    onItemChange={(index) => {calculosEco(index, 'sem')}}
                                    title="Selecione o número de semanas"
                                    placeholder="Semanas"
                                    isNullable={false}
                                    style={styles.DatePickerText} 
                                    />
                            </View>
                            <View style={styles.EcoIdadePicker}>
                                <Picker 
                                    items={pickerDiaArray} 
                                    item={EcoDiaIdadeInputText}
                                    onItemChange={(index) => {calculosEco(index, 'dia')}}
                                    title="Selecione o número de dias adicionais"
                                    placeholder="Dias"
                                    isNullable={false}
                                    style={styles.DatePickerText} 
                                    />
                            </View>
                        </View>
                        {EcoCalcElementVisible ?(
                        <View>
                            <Text style={styles.InputContainerText}>Idade gestacional: {SemIdadeGestEco} semanas e {DiaIdadeGestEco} dias.</Text>
                            <Text style={styles.InputContainerText}>Data prevista para o parto: {DataPartoEco}.</Text>
                        </View>
                        ) : null}
                    </View>
                ) : null}
        </View>
        </ImageBackground>
    );
}

export default IdadeGestacionalScreen;