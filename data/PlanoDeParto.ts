export class PlanoDeParto{
    codigo: number;
    nomeDoBebe: string;
    nomeDaGestante: string;
    tipoDeParto: string;
    acompanhante: string;
    acompanhanteOutro: string;
    alimentacao: string;
    localDoParto: string[];
    alivioDor: string[];
    alivioDorOutro: string;
    aceitaMedDor: string;
    metodosInducaoParto: string[];
    posicaoParto: string;
    outroPosicaoParto: string;
    contracoes: string;
    contatoBebe: string;
    cordaoUmbilical: string;
    processosPosNascimento: string;
    estimularAmamentar: string;
    acompanhantePosParto: string;


    constructor(
                codigo: number, 
                nomeDoBebe: string,
                nomeDaGestante: string,
                tipoDeParto: string,
                acompanhante: string,
                acompanhanteOutro: string,
                alimentacao: string,
                localDoParto: string[],
                alivioDor: string[],
                alivioDorOutro: string,
                aceitaMedDor: string,
                metodosInducaoParto: string[],
                posicaoParto: string,
                outroPosicaoParto: string,
                contracoes: string,
                contatoBebe: string,
                cordaoUmbilical: string,
                processosPosNascimento: string,
                estimularAmamentar: string,
                acompanhantePosParto: string
            ) {
        this.codigo = codigo;
        this.nomeDoBebe = nomeDoBebe;
        this.nomeDaGestante = nomeDaGestante;
        this.tipoDeParto = tipoDeParto;
        this.acompanhante = acompanhante;
        this.acompanhanteOutro = acompanhanteOutro;
        this.alimentacao = alimentacao;
        this.localDoParto = localDoParto;
        this.alivioDor = alivioDor;
        this.alivioDorOutro = alivioDorOutro;
        this.aceitaMedDor = aceitaMedDor;
        this.metodosInducaoParto = metodosInducaoParto;
        this.posicaoParto = posicaoParto;
        this.outroPosicaoParto = outroPosicaoParto;
        this.contracoes = contracoes;
        this.contatoBebe = contatoBebe;
        this.cordaoUmbilical = cordaoUmbilical;
        this.processosPosNascimento = processosPosNascimento;
        this.estimularAmamentar = estimularAmamentar;
        this.acompanhantePosParto = acompanhantePosParto;
    }
}