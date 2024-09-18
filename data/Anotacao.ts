export class Anotacao{
    codigo: number;
    titulo: string;
    conteudo: string;
    constructor(codigo: number, titulo: string, conteudo: string) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
}