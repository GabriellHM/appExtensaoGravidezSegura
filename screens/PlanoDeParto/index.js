import { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import styles from './styles';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import GestorDados from '../../data/GestorDados';
import { useIsFocused } from '@react-navigation/native';
import { PlanoDeParto } from '../../data/PlanoDeParto';
import Icon from 'react-native-vector-icons/FontAwesome';

function PlanoDePartoScreen({navigation}) {

    const gestor = new GestorDados();
    const isFocused = useIsFocused();

    const [planosDeParto, setPlanosDeParto] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [nomeGestante, setNomeGestante] = useState('');
    const [nomeBebe, setNomeBebe] = useState('');
    const [selectedPlano, setSelectedPlano] = useState(null)
    const [selectedOpcoesTipoParto, setSelectedOpcoesTipoParto] = useState('');
    const [selectedOpcoesAcompanhante, setSelectedOpcoesAcompanhante] = useState('');
    const [selectedOutroAcompanhante, setSelectedOutroAcompanhante] = useState('');
    const [selectedOpcoesAlimentacao, setSelectedOpcoesAlimentacao] = useState('');
    const [selectedOpcoesLocaldoParto, setSelectedOpcoesLocaldoParto] = useState('');
    const [selectedOpcoesMetodosAlivioDor, setSelectedOpcoesMetodosAlivioDor] = useState('');
    const [outrosMetodosAlivioDor, setOutrosMetodosAlivioDor] = useState('');
    const [selectedDesejaMedicamentos, setSelectedDesejaMedicamentos] = useState('');
    const [selectedOpcoesMedInducaoParto, setSelectedOpcoesMedInducaoParto] = useState('');
    const [selectedOpcaoPosicaoParto, setSelectedOpcaoPosicaoParto] = useState('');
    const [outroPosicaoParto, setOutroPosicaoParto] = useState('');
    const [selectedOpcaoContracao, setSelectedOpcaoContracao] = useState('');
    const [selectedOpcoesQuandoBebeNascer, setSelectedOpcoesQuandoBebeNascer] = useState('');
    const [selectedOpcoesCordaoUmbilical, setSelectedOpcoesCordaoUmbilical] = useState('');
    const [selectedOpcoesProcedimentosBebe, setSelectedOpcoesProcedimentosBebe] = useState('');
    const [selectedOpcoesEstimuloAmamentacao, setSelectedOpcoesEstimuloAmamentacao] = useState('');
    const [selectedOpcoesAcompanhanteAposParto, setSelectedOpcoesAcompanhanteAposParto] = useState('');

    const [inputOutroAcompVisible, setInputOutroAcompVisible] = useState(false);
    const [inputOutroMetodosAlivioDorVisible, setInputOutroMetodosAlivioDorVisible] = useState(false);
    const [inputOutroPosicaoDePartoVisible, setInputPosicaoDePartoVisible] = useState(false);

    useEffect(() => {
        gestor.obterTodos('planodeparto').then(objs => setPlanosDeParto(objs));
    }, [isFocused]);

    const opcoesTipoParto = [
        {key:'1', value:'Parto vaginal (normal)'},
        {key:'2', value:'Parto abdominal (cesárea)'},
        {key:'3', value:'Por indicação médica do que for melhor para meu bebê e para mim'},
        {key:'4', value:'Nunca pensei sobre o assunto'},
    ];

    const opcoesAcompanhante = [
        {key: '1', value: 'Companheiro(a)'},
        {key: '2', value: 'Familiar'},
        {key: '3', value: 'Amigo(a)'},
        {key: '4', value: 'Sozinha'},
        {key: '5', value: 'Equipe de Saúde'},
        {key: '6', value: 'Doula'},
        {key: '7', value: 'Outro'},
    ];

    const opcoesLocaldoParto = [
        {key: '1', value: 'Luz acesa'},
        {key: '2', value: 'Meia luz'},
        {key: '3', value: 'Com músicas de minha escolha'},
        {key: '4', value: 'Silêncio'},
        {key: '5', value: 'Quarto climatizado'},
        {key: '6', value: 'Quarto com ventilação ambiente'},
    ];

    const opcoesMetodosAlivioDor = [
        {key: '1', value: 'Massagem lombar'},
        {key: '2', value: 'Chuveiro'},
        {key: '3', value: 'Respiração consciente'},
        {key: '4', value: 'Aromaterapia'},
        {key: '5', value: 'Pontos de pressão'},
        {key: '6', value: 'Mudanças de posições'},
        {key: '7', value: 'Cavalinho'},
        {key: '8', value: 'Escada de ling'},
        {key: '9', value: 'Bola'},
        {key: '10', value: 'Deambulação'},
        {key: '11', value: 'Agachamento'},
        {key: '12', value: 'Dança'},
        {key: '13', value: 'Posição de quatro apoio'},
        {key: '14', value: 'Alongamento'},
        {key: '15', value: 'Nenhum'},
        {key: '16', value: 'Outro'},
    ];

    const opcoesAlimentacao = [
        {key:'1', value:'Líquida oferecida pela instituição'},
        {key:'2', value:'De acordo com a prescrição médica'},
        {key:'3', value:'Prefiro não me alimentar'},
    ];

    const opcoesMedInducaoParto = [
        {key: '1', value: 'Misoprostol'},
        {key: '2', value: 'Ocitocina'},
        {key: '3', value: 'Não Aceito'},
    ];

    const posicoesDeParto = [
        {key: '1', value: 'Deitada'},
        {key: '2', value: 'Semi-deitada'},
        {key: '3', value: 'Cócoras'},
        {key: '4', value: 'Sentada na banqueta'},
        {key: '5', value: 'Lateralizada'},
        {key: '6', value: 'De quarto apoio'},
        {key: '7', value: 'Joelho'},
        {key: '8', value: 'Em pé'},
        {key: '9', value: 'Outro'},
    ];

    const opcoesContracoes = [
        {key: '1', value: 'Quero fazer força sozinha'},
        {key: '2', value: 'Prefiro ser orientada por um profissional de saúde'},
    ];

    const opcoesQuandoBebeNascer = [
        {key: '1', value: 'Logo após o nascimento'},
        {key: '2', value: 'Conversar comigo antes de colocar o bebê em cima de mim'},
        {key: '3', value: 'Não desejo que ele(a) seja colocado(a) em cima de mim'},
    ];

    const opcoesCordaoUmbilical = [
        {key: '1', value: 'Por mim'},
        {key: '2', value: 'Por meu acompanhante'},
        {key: '3', value: 'Pelo profissional de saúde'},
    ];

    const opcoesProcedimentosBebe = [
        {key: '1', value: 'Fosse realizado na minha presença'},
        {key: '2', value: 'Fosse realizado na presença de meu Acompanhante'}
    ];

    const opcoesEstimuloAmamentacao = [
        {key: '1', value: 'Sim'},
        {key: '2', value: 'Não'}
    ];

    const opcoesAcompanhanteAposParto = [
        {key: '1', value: 'Sim'},
        {key: '2', value: 'Não'}
    ];

    const opcoesDesejaMedicamentos = [
        {key:'1', value:'Sim'}, 
        {key:'2', value:'Não'}
    ];

    const handleOutrosAcompanhante = () => {
        if (selectedOpcoesAcompanhante.value === 'Outro') 
            return selectedOutroAcompanhante
        if (selectedOpcoesAcompanhante.value === 'Sozinha')
            return 'Ninguém'
        return selectedOpcoesAcompanhante.value
    };

    const handlePosicaoParto = () => {
        if (selectedOpcaoPosicaoParto.value === 'Outro') 
            return outroPosicaoParto
        return selectedOpcaoPosicaoParto.value
    };

    const handleOrderedList = (arrayObj, optionsArray, outrosObj) => {
        resultArr = [];

        if (arrayObj === '')
            return;

        arrayObj.map((item) =>{
            optionsArray.map((optionItem) =>{
                optionItem.key === item ? resultArr = [...resultArr, optionItem.value] : null
            })
        })
        
        stringResultArr = [];
        isOutro = false;

        resultArr.map((option) => {
            if (option === 'Outro'){
                isOutro = true;
                stringResultArr = [...stringResultArr, `<li style="text-align:justify;">Outro: ${outrosObj}.</li>`];
            }
            else
                stringResultArr = [...stringResultArr, `<li style="text-align:justify;">${option};</li>`];
        })

        return stringResultArr.join('');
    };

    const html =  `
    <html>    
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body>
            <h1>Plano de Parto</h1>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Eu, ${nomeGestante}, gostaria de listar algumas das minhas
                preferências em relação ao parto e nascimento do(a) bebe. Sei que o parto pode acabar sendo
                diferente do que foi planejado por mim, então gostaria de ser comunicada e consultada quando isto
                acontecer.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria que meu companhante fosse: ${handleOutrosAcompanhante()}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria que meu parto fosse: ${selectedOpcoesTipoParto.value}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria que minha alimentação fosse: ${selectedOpcoesAlimentacao.value}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria que meu local de parto estivesse:</h2>
                <ul>
                    ${handleOrderedList(selectedOpcoesLocaldoParto, opcoesLocaldoParto, '')}
                </ul>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria de ter os seguintes métodos não farmacológicos de alívio da dor e que ajudam no trabalho de parto oferecidos:</h2>
                <ul>
                    ${handleOrderedList(selectedOpcoesMetodosAlivioDor, opcoesMetodosAlivioDor, outrosMetodosAlivioDor)}
                </ul>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria que fossem oferecidos métodos farmacológicos de alívio de dor: ${selectedDesejaMedicamentos.value}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Aceito a utilização dos seguintes métodos farmacológicos de indução do trabalho de parto:</h2>
                <ul>
                    ${handleOrderedList(selectedOpcoesMedInducaoParto, opcoesMedInducaoParto, '')}
                </ul>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria de realizar o parto na seguinte posição: ${handlePosicaoParto()}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Durante as contrações, gostaria de: ${selectedOpcaoContracao.value}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Quando meu bebê nascer, gostaria que o contato pele à pele fosse: ${selectedOpcoesQuandoBebeNascer.value}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria que o corte do cordão umbilical fosse realizado: ${selectedOpcoesCordaoUmbilical.value}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria que, se o bebê estiver em bom estado geral, a avaliação do recém-nascido, a administração do nitrato de prata a 1% e a injeção de vitamina K na pernina: ${selectedOpcoesProcedimentosBebe.value}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Desejo ser estimulada a amamentar na primeira hora de vida do bebê? ${selectedOpcoesEstimuloAmamentacao.value}.</h2>
            </div>
            <div class="confirmationBox_content">
                <h2 style="text-align:justify;">Gostaria de ter um acompanhante após o trabalho de parto até receber a alta hospitalar? ${selectedOpcoesAcompanhanteAposParto.value}.</h2>
            </div>
            <div class="confirmationBox_content">
                <p style="margin-top: 150; text-align:justify;">_________________________________</>
                <p style="text-align:justify;">Assinatura</>
                <p style="text-align:justify;">Data: ___/___/_______</>
            </div>
        </body>
    </html>
    `;

    
    const alertNomeObrigatorio = () =>
        Alert.alert(
            'Preencha o nome do(a) bebê!',
            'É necessário preencher o nome do(a) bebê para salvar. Essa informação pode ser alterada depois!',
            [
                {
                text: 'Ok!',
                style: 'cancel',
                },
            ],

        );

    const printToFile = async () => {
        if (checkTodosCamposPreenchidos()) {
                const { uri } = await Print.printToFileAsync({ html });
                await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
            }
        else {
            Alert.alert(
                'Há campos não preenchidos',
                'Por favor, preencha todos os campos para poder imprimir o plano!',
                [
                    {
                    text: 'Ok!',
                    style: 'cancel',
                    },
                ],
            )
        }
    };

    const handleOutrosAlivioDor = (item) => {
        item.includes('16') 
            ? setInputOutroMetodosAlivioDorVisible(true) 
            : setInputOutroMetodosAlivioDorVisible(false)
    };

    const handleMedInducaoParto = (item) => {
        item.includes('3')
            ? setSelectedOpcoesMedInducaoParto(['3'])
            : setSelectedOpcoesMedInducaoParto(item)
    };

    const clearForm = () => {
        setNomeGestante('');
        setNomeBebe('');
        setSelectedOpcoesTipoParto('');
        setSelectedOpcoesAcompanhante('');
        setSelectedOpcoesAlimentacao('');
        setSelectedOpcoesLocaldoParto('');
        setSelectedOpcoesMetodosAlivioDor('');
        setSelectedDesejaMedicamentos('');
        setSelectedOpcoesMedInducaoParto('');
        setSelectedOpcaoPosicaoParto('');
        setOutroPosicaoParto('');
        setSelectedOpcaoContracao('');
        setSelectedOpcoesQuandoBebeNascer('');
        setSelectedOpcoesCordaoUmbilical('');
        setSelectedOpcoesProcedimentosBebe('');
        setSelectedOpcoesEstimuloAmamentacao('');
        setSelectedOpcoesAcompanhanteAposParto('');
        setInputOutroMetodosAlivioDorVisible(false);
        setInputPosicaoDePartoVisible(false);
        setInputOutroAcompVisible(false);
    }

    const handleCancel = () => {
        setSelectedPlano(null);
        clearForm();
        setModalVisible(false);
    };

    const getMaiorCodigo = planosDeParto.reduce((maior, planosDeParto) => {
        return planosDeParto.codigo > maior ? planosDeParto.codigo : maior;
    }, -Infinity);

    const getProxCodigo = () => {
        return planosDeParto.length === 0 ? 1 : getMaiorCodigo + 1
    };

    const handleEditar = (selectedPlano) => {
        setSelectedPlano(selectedPlano);
        setNomeBebe(selectedPlano.nomeDoBebe);
        setNomeGestante(selectedPlano.nomeDaGestante);

        opcoesTipoParto.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.tipoDeParto ? setSelectedOpcoesTipoParto({_index: index, key: item.key, value: item.value}) : null
        });
        
        opcoesAcompanhante.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.acompanhante ? setSelectedOpcoesAcompanhante({_index: index, key: item.key, value: item.value}) : null
        });

        setSelectedOutroAcompanhante(selectedPlano.acompanhanteOutro);
        selectedPlano.acompanhanteOutro !== '' ? setInputOutroAcompVisible(true) : setInputOutroAcompVisible(false);

        opcoesAlimentacao.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.alimentacao ? setSelectedOpcoesAlimentacao({_index: index, key: item.key, value: item.value}) : null
        });

        setSelectedOpcoesLocaldoParto(selectedPlano.localDoParto);
        setSelectedOpcoesMetodosAlivioDor(selectedPlano.alivioDor);

        setOutrosMetodosAlivioDor(selectedPlano.alivioDorOutro);
        selectedPlano.alivioDorOutro !== '' ? setInputOutroMetodosAlivioDorVisible(true) : setInputOutroMetodosAlivioDorVisible(false);

        opcoesDesejaMedicamentos.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.aceitaMedDor ? setSelectedDesejaMedicamentos({_index: index, key: item.key, value: item.value}) : null
        });

        setSelectedOpcoesMedInducaoParto(selectedPlano.metodosInducaoParto);

        posicoesDeParto.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.posicaoParto ? setSelectedOpcaoPosicaoParto({_index: index, key: item.key, value: item.value}) : null
        });

        setOutroPosicaoParto(selectedPlano.alivioDorOutro);
        selectedPlano.outroPosicaoParto !== '' ? setInputPosicaoDePartoVisible(true) : setInputPosicaoDePartoVisible(false);

        opcoesContracoes.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.contracoes ? setSelectedOpcaoContracao({_index: index, key: item.key, value: item.value}) : null
        });

        opcoesQuandoBebeNascer.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.contatoBebe ? setSelectedOpcoesQuandoBebeNascer({_index: index, key: item.key, value: item.value}) : null
        });

        opcoesCordaoUmbilical.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.cordaoUmbilical ? setSelectedOpcoesCordaoUmbilical({_index: index, key: item.key, value: item.value}) : null
        });

        opcoesProcedimentosBebe.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.processosPosNascimento ? setSelectedOpcoesProcedimentosBebe({_index: index, key: item.key, value: item.value}) : null
        });

        opcoesEstimuloAmamentacao.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.estimularAmamentar ? setSelectedOpcoesEstimuloAmamentacao({_index: index, key: item.key, value: item.value}) : null
        });

        opcoesAcompanhanteAposParto.map( (item) => {
            var index = parseInt(item.key, 10) - 1;
            item.key === selectedPlano.acompanhantePosParto ? setSelectedOpcoesAcompanhanteAposParto({_index: index, key: item.key, value: item.value}) : null
        });

        setModalVisible(true);
    };

    const handleSalvar = () => {
        //Checar se tem um título do plano
        if (nomeBebe === '') {
            alertNomeObrigatorio();
            return
        }
        //Definir o código
        var cod = 0
        selectedPlano ? cod = selectedPlano.codigo : cod = getProxCodigo();

        //Criar a variavel com a classe PlanoDeParto
        updatedPlano = new PlanoDeParto(
            cod, 
            nomeBebe,
            nomeGestante,
            selectedOpcoesTipoParto.key,
            selectedOpcoesAcompanhante.key,
            selectedOutroAcompanhante,
            selectedOpcoesAlimentacao.key,
            selectedOpcoesLocaldoParto,
            selectedOpcoesMetodosAlivioDor,
            outrosMetodosAlivioDor,
            selectedDesejaMedicamentos.key,
            selectedOpcoesMedInducaoParto,
            selectedOpcaoPosicaoParto.key,
            outroPosicaoParto,
            selectedOpcaoContracao.key,
            selectedOpcoesQuandoBebeNascer.key,
            selectedOpcoesCordaoUmbilical.key,
            selectedOpcoesProcedimentosBebe.key,
            selectedOpcoesEstimuloAmamentacao.key,
            selectedOpcoesAcompanhanteAposParto.key
        )

        if (selectedPlano) {
            // Se um plano foi selecionado, alterar ele (removendo e adicionando novamente)
            gestor.remover(cod, 'planodeparto');
            gestor.adicionar(updatedPlano, 'planodeparto');
            gestor.obterTodos('planodeparto').then(objs => setPlanosDeParto(objs));
            setSelectedPlano(null);
        } else {
            // Se nenhum plano foi selecionado, criar um novo
            setPlanosDeParto([...planosDeParto, updatedPlano]);
            gestor.adicionar(updatedPlano, 'planodeparto');
        }

        clearForm();
        setSelectedPlano(null);
        setModalVisible(false);
    };

    const checkTodosCamposPreenchidos = () => {
        if (nomeGestante === '' ||
            selectedPlano === '' ||
            selectedOpcoesTipoParto === '' ||
            selectedOpcoesAcompanhante === '' ||
            selectedOpcoesAlimentacao === '' ||
            selectedOpcoesLocaldoParto === '' ||
            selectedOpcoesMetodosAlivioDor === '' ||
            selectedDesejaMedicamentos === '' ||
            selectedOpcoesMedInducaoParto === '' ||
            selectedOpcaoPosicaoParto === '' ||
            selectedOpcaoContracao === '' ||
            selectedOpcoesQuandoBebeNascer === '' ||
            selectedOpcoesCordaoUmbilical === '' ||
            selectedOpcoesProcedimentosBebe === '' ||
            selectedOpcoesEstimuloAmamentacao === '' ||
            selectedOpcoesAcompanhanteAposParto === '')
            return false;
        
        return true;
    };

    const handleDelete = (item) => {
        Alert.alert(
            'Confirmação',
            `Deseja realmente excluir o plano de parto de ${item.nomeDoBebe}? Essa ação é irreversível!`,
            [
                {
                text: 'Sim!',
                onPress: () => {
                    gestor.remover(item.codigo, 'planodeparto');
                    gestor.obterTodos('planodeparto').then(objs => setPlanosDeParto(objs));
                    },
                },
                {
                text: 'Não!',
                style: 'cancel',
                },
            ],
        );
    };

    return (
        <ImageBackground source={require('../../assets/background_image.png')} style={ styles.backgroundContainer }>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Icon name="chevron-left" size={30} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={styles.pageContainer}>
                <View style={styles.pageTitleContainer}>
                    <Text style={styles.pageTitle}>Plano de Parto</Text>
                </View>

                <View style={styles.pageDescContainer}>
                    <Text style={styles.pageDesc}>{'\t\t\t'}Um plano de parto é um documento em que você descreve suas preferências e expectativas para o momento do parto. Ele pode incluir detalhes sobre suas escolhas para o ambiente de parto, o suporte emocional e físico que você deseja, e as intervenções médicas que você prefere ou deseja evitar.
                    </Text>
                </View>

                <View style={styles.pageSubTitleContainer}>
                    <Text style={styles.pageTitle}>Meus Planos</Text>
                </View>
                <View style={styles.scrollViewPlanosDeParto}>
                    <ScrollView>
                        {planosDeParto.map((plano) => (
                            <View style={styles.planoItemContainer}
                                key={plano.codigo}>
                                <TouchableOpacity
                                    style={styles.planoItem}
                                    onPress={() => handleEditar(plano)}
                                >
                                    <Text style={styles.planoTitle}>
                                        Plano de Parto de {plano.nomeDoBebe}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deletePlanoItemButton} onPress={() => handleDelete(plano)}>
                                        <Icon name="trash" size={20} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                    {/* Botão de criar nova anotação */}
                </View>
                <View style={styles.addButtonContainer}>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <Text style={styles.addButtonText}>
                        Criar Novo Plano
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                visible={modalVisible}
                animationType='slide'
                style={styles.modalContainer}
                transparent={false}>
                <ImageBackground source={require('../../assets/background_image.png')} style={ styles.modalInputContainer }>
                    <View style={styles.scrollViewContainer}>
                        <ScrollView>
                        <Text 
                            style={styles.textoDaPergunta}>
                            Qual é o nome do(a) Bebê?
                        </Text>
                        <TextInput
                            style={styles.contentInput}
                            multiline
                            placeholder="Nome do(a) Bebê..."
                            value={nomeBebe}
                            onChangeText={setNomeBebe}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Como gostaria de ser chamada?
                        </Text>
                        <TextInput
                            style={styles.contentInput}
                            multiline
                            placeholder="Gostaria de ser chamada de..."
                            value={nomeGestante}
                            onChangeText={setNomeGestante}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Como gostaria que fosse o seu parto?
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesTipoParto}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesTipoParto}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesTipoParto(item);
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Quem gostaria que fosse seu ou sua acompanhante?
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesAcompanhante}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesAcompanhante}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesAcompanhante(item);
                                if (item.value === 'Outro') 
                                    setInputOutroAcompVisible(true)
                                else { 
                                    setInputOutroAcompVisible(false);
                                }
                              }}
                        />
                        {inputOutroAcompVisible ? (
                        <TextInput
                            style={styles.contentInput}
                            multiline
                            placeholder="Qual?"
                            value={selectedOutroAcompanhante}
                            onChangeText={setSelectedOutroAcompanhante}
                        />
                        ): null}
                        <Text
                            style={styles.textoDaPergunta}>
                            Como gostaria que fosse sua alimentação?
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesAlimentacao}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesAlimentacao}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesAlimentacao(item);
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Como gostaria que estivesse o seu local de parto?
                        </Text>
                        <MultiSelect
                            style={styles.dropdownStyle}
                            selectedStyle={styles.dropdownStyle}
                            data={opcoesLocaldoParto}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesLocaldoParto}
                            placeholder='Selecione um ou mais...'
                            searchPlaceholder='Selecione um ou mais...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesLocaldoParto(item)
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Quais métodos não farmacológicos de alívio da dor e que ajudam no trabalho de parto gostaria que fossem oferecidos?
                        </Text>
                        <MultiSelect
                            style={styles.dropdownStyle}
                            selectedStyle={styles.dropdownStyle}
                            data={opcoesMetodosAlivioDor}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesMetodosAlivioDor}
                            placeholder='Selecione um ou mais...'
                            searchPlaceholder='Selecione um ou mais...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesMetodosAlivioDor(item);
                                handleOutrosAlivioDor(item);
                              }}
                        />
                        {inputOutroMetodosAlivioDorVisible ? (
                            <TextInput
                                style={styles.contentInput}
                                multiline
                                placeholder="Quais?"
                                value={outrosMetodosAlivioDor}
                                onChangeText={setOutrosMetodosAlivioDor}
                            />
                        ): null}
                        <Text
                            style={styles.textoDaPergunta}>
                            Gostaria que fossem oferecidos métodos farmacológicos (medicamentos) de alívio da dor?
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesDesejaMedicamentos}
                            labelField="value"
                            valueField="key"
                            value={selectedDesejaMedicamentos}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedDesejaMedicamentos(item);
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Aceita utilização de quais dos seguintes métodos farmacológicos (medicamentos) de indução do trabalho
                            de parto?
                        </Text>
                        <MultiSelect
                            style={styles.dropdownStyle}
                            selectedStyle={styles.dropdownStyle}
                            data={opcoesMedInducaoParto}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesMedInducaoParto}
                            placeholder='Selecione um ou mais...'
                            searchPlaceholder='Selecione um ou mais...'
                            search={false}
                            onChange={item => {
                                handleMedInducaoParto(item);
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Gostaria de realizar o parto em qual posição?
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={posicoesDeParto}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcaoPosicaoParto}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcaoPosicaoParto(item);
                                if (item.value === 'Outro') 
                                    setInputPosicaoDePartoVisible(true)
                                else { 
                                    setInputPosicaoDePartoVisible(false);
                                }
                              }}
                        />
                        {inputOutroPosicaoDePartoVisible ? (
                            <TextInput
                                style={styles.contentInput}
                                multiline
                                placeholder="Qual?"
                                value={outroPosicaoParto}
                                onChangeText={setOutroPosicaoParto}
                            />
                        ): null}
                        <Text
                            style={styles.textoDaPergunta}>
                            Durante as contrações gostaria de...
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesContracoes}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcaoContracao}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcaoContracao(item);
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Quando o meu bebê nascer quero realizar contato pele a pele:
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesQuandoBebeNascer}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesQuandoBebeNascer}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesQuandoBebeNascer(item);
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Gostaria que o corte do cordão umbilical fosse realizado:
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesCordaoUmbilical}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesCordaoUmbilical}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesCordaoUmbilical(item);
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Gostaria que, se o bebê estiver em bom estado geral, a avaliação do recém-nascido,
                            a administração do nitrato de prata a 1%  (que é colocado no olhinho) e a injeção de vitamina K na perninha:
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesProcedimentosBebe}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesProcedimentosBebe}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesProcedimentosBebe(item);
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Gostaria de ser estimulada a amamentar na primeira hora de vida do bebê?
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesEstimuloAmamentacao}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesEstimuloAmamentacao}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesEstimuloAmamentacao(item);
                              }}
                        />
                        <Text
                            style={styles.textoDaPergunta}>
                            Gostaria de ter um acompanhante após o trabalho de parto até receber a alta hospitalar?
                        </Text>
                        <Dropdown
                            style={styles.dropdownStyle}
                            data={opcoesAcompanhanteAposParto}
                            labelField="value"
                            valueField="key"
                            value={selectedOpcoesAcompanhanteAposParto}
                            placeholder='Selecione um...'
                            searchPlaceholder='Selecione um...'
                            search={false}
                            onChange={item => {
                                setSelectedOpcoesAcompanhanteAposParto(item);
                              }}
                        />
                        </ScrollView>
                    </View>
                    <View style={styles.formButtonContainer}>
                        <View style={styles.buttonContainerStyle}>
                            <Button 
                                style={styles.saveButtonStyle}
                                color="#86a67c"
                                title='Salvar' onPress={() => {handleSalvar()}}
                            />
                        </View>
                        <View style={styles.buttonContainerStyle}>
                            <Button 
                                style={styles.cancelButtonStyle}
                                title='Imprimir' onPress={() => {printToFile()}}
                            />
                        </View>
                        <View style={styles.buttonContainerStyle}>
                            <Button 
                                style={styles.cancelButtonStyle}
                                color="#FF3B30"
                                title='Cancelar' onPress={() => {handleCancel()}}
                            />
                        </View>
                    </View>
                </ImageBackground>
                
            </Modal>

        </ImageBackground>
    );
}

export default PlanoDePartoScreen;