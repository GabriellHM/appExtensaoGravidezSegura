import AsyncStorage
    from '@react-native-async-storage/async-storage';
import { Anotacao } from './Anotacao';
import { PlanoDeParto } from './PlanoDeParto';

const salvarAnotacao = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {}
}

const removerAnotacao = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch(e) {}
}

const obterAnotacoesJSON = async () => {
    try {
        let keys: string[] = [];
        const allKeys = await AsyncStorage.getAllKeys();
        allKeys.map( (item) => {
            item.includes('anotacao') ? keys = [...keys, item] : null
        })
        return await AsyncStorage.multiGet(keys);
    } catch(e) { return []; }
}

const obterAnotacoes = async () => {
    try {
        let objetos = [];
        let objJSON = await obterAnotacoesJSON();
        if(objJSON!=null && objJSON.length>0)
        objJSON.forEach(element => {
            let produto: Anotacao = JSON.parse(element[1]);
            objetos.push(produto);
        });
        return objetos;
    } catch(e) { return []; }
}

const obterPlanosDePartoJSON = async () => {
    try {
        let keys: string[] = [];
        const allKeys = await AsyncStorage.getAllKeys();
        allKeys.map( (item) => {
            item.includes('planodeparto') ? keys = [...keys, item] : null
        })
        return await AsyncStorage.multiGet(keys);
    } catch(e) { return []; }
}

const obterPlanosDeParto = async () => {
    try {
        let objetos = [];
        let objJSON = await obterPlanosDePartoJSON();
        if(objJSON!=null && objJSON.length>0)
        objJSON.forEach(element => {
            let plano: PlanoDeParto = JSON.parse(element[1]);
            objetos.push(plano);
        });
        return objetos;
    } catch(e) { return []; }
}

class GestorDados{
    public async remover(chave: number, tipoObj: string){
        removerAnotacao(tipoObj.concat('_', chave.toString()));
    }
    public async adicionar(obj: any, tipoObj: string){
        salvarAnotacao(tipoObj.concat('_', obj.codigo.toString()), obj);
    }
    public async obterTodos(tipoObj: string): Promise<Array<any>>{
        switch(tipoObj){
            case 'anotacao':
                let lista: Array<Anotacao> = await obterAnotacoes();
                return lista;
            case 'planodeparto':
                let listaP: Array<PlanoDeParto> = await obterPlanosDeParto();
                return listaP;
        } 
    }
}
    
export default GestorDados;