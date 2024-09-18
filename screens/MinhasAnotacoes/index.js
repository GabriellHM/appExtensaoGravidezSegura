import { View, Text, TouchableOpacity, Modal, TextInput, Alert, ScrollView, Button, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react';
import GestorDados from '../../data/GestorDados';
import { Anotacao } from '../../data/Anotacao';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function MinhasAnotacoesScreen({navigation}) {
    const gestor = new GestorDados();

    const [notes, setNotes] = useState([]);
    const isFocused = useIsFocused();

    const [selectedNote, setSelectedNote] = useState(null);

    const [title, setTitle] = useState(""); 

    const [content, setContent] = useState(""); 

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        gestor.obterTodos('anotacao').then(objs => setNotes(objs));
    }, [isFocused]);

    const getMaiorCodigo = notes.reduce((maior, notes) => {
        return notes.codigo > maior ? notes.codigo : maior;
    }, -Infinity);

    const getProxCodigo = () => {
        return notes.length === 0 ? 1 : getMaiorCodigo + 1
    }

    // Função para lidar com o salvamento
    const handleSaveNote = () => {
        if (selectedNote) {
            // Se uma anotação foi selecionada, alterar ela (removendo e adicionando novamente)
            updatedNote = new Anotacao(selectedNote.codigo, title, content)
            gestor.remover(selectedNote.codigo, 'anotacao');
            gestor.adicionar(updatedNote, 'anotacao');
            gestor.obterTodos('anotacao').then(objs => setNotes(objs));
            setSelectedNote(null);
        } else {
            // Se nenhuma anotação foi selecionada, criar uma nova
            var newNote = new Anotacao(getProxCodigo(), title, content);
            setNotes([...notes, newNote]);
            gestor.adicionar(newNote, 'anotacao');
        }
        setTitle("");
        setContent("");
        setModalVisible(false);
    };

    // Função para lidar com editar uma anotação
    const handleEditNote = (note) => {
        setSelectedNote(note);
        setTitle(note.titulo);
        setContent(note.conteudo);
        setModalVisible(true);
    };

    // Função para lidar com deletando uma anotação
    const handleDeleteNote = (note) => {
        Alert.alert(
            'Confirmação',
            `Deseja realmente excluir a anotação ${note.titulo}? Essa ação é irreversível!`,
            [
                {
                text: 'Sim!',
                onPress: () => {
                    gestor.remover(note.codigo, 'anotacao');
                    gestor.obterTodos('anotacao').then(objs => setNotes(objs));
                    setSelectedNote(null);
                    setModalVisible(false);
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
        <ImageBackground source={require('../../assets/background_image.png')} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Icon name="chevron-left" size={30} color="#000000" />
                </TouchableOpacity>
            </View>
            {/* Título */}
            <View style={styles.container}>
            <Text style={styles.title}>Minhas Anotações</Text>

            {/* Lista de Anotações */}
            <ScrollView style={styles.noteList}>
                {notes.map((note) => (
                    <View
                        key={note.codigo}
                        style={styles.noteItemContainer}>
                        <TouchableOpacity
                            onPress={() => handleEditNote(note)}
                            style={styles.noteItem}
                        >
                            <Text style={styles.noteTitle}>
                                {note.titulo}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteItemButton} onPress={() => handleDeleteNote(note)}>
                                    <Icon name="trash" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Botão de criar nova anotação */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                    setTitle("");
                    setContent("");
                    setModalVisible(true);
                }}
            >
                <Text style={styles.addButtonText}>
                   Criar Anotação
                </Text>
            </TouchableOpacity>
            
            {/* Modal para criação/Edição de anotações */}
            <Modal
                visible={modalVisible}
                animationType='none'
                transparent={false}
            >
                <ImageBackground source={require('../../assets/background_image.png')} style={styles.modalContainer}>
                    {/* Input do título da anotação */}
                    <TextInput
                        style={styles.input}
                        placeholder="Escreva aqui o título da anotação..."
                        value={title}
                        onChangeText={setTitle}
                    />

                    {/* Input do conteúdo da anotação */}
                    <TextInput
                        style={styles.contentInput}
                        multiline
                        placeholder="Escreva aqui sua anotação..."
                        value={content}
                        onChangeText={setContent}
                    />

                    {/* Botões para salvar, cancelar e deletar */}
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Salvar"
                            onPress={handleSaveNote}
                            color="#007BFF"
                        />
                        <Button
                            title="Cancelar"
                            onPress={() =>
                                {setSelectedNote(null); setModalVisible(false)}
                            }
                            color="#FF3B30"
                        />
                        {selectedNote && (
                            <Button
                                title="Deletar"
                                onPress={() =>
                                    handleDeleteNote(
                                        selectedNote
                                    )
                                }
                                color="#FF9500"
                            />
                        )}
                    </View>
                </ImageBackground>
            </Modal>
            </View>
        </ImageBackground>
    );
};

export default MinhasAnotacoesScreen;