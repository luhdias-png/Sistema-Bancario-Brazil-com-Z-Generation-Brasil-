import leia from "readline-sync"
import { colors } from "./src/util/Colors";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposConta = ['Conta Corrente','Conta Poupanca'];

    let contas: ContaController = new ContaController();

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();


    while (true) {

        console.log("******************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("   1 - Criar Conta                          ");
        console.log("   2 - Listar todas as Contas               ");
        console.log("   3 - Buscar Conta por Numero              ");
        console.log("   4 - Atualizar Dados da Conta             ");
        console.log("   5 - Apagar Conta                         ");
        console.log("   6 - Sacar                                ");
        console.log("   7 - Depositar                            ");
        console.log("   8 - Transferir valores entre Contas      ");
        console.log("   9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");
                keyPress();
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");
                keyPress();
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");
                keyPress();
                break;
            case 6:
                console.log("\n\nSaque\n\n");
                keyPress();
                break;
            case 7:
                console.log("\n\nDepósito\n\n");
                keyPress();
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");
                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");
                keyPress();
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

    function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

    function keyPress():void{
        console.log(colors.reset,"");
        console.log("\nPressione ENTER para continuar!");
        leia.prompt();
    }

main();