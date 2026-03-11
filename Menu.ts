import leia from "readline-sync"
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

    //Teste usando Classe da Conta(conta 1):
    const conta: Conta = new Conta(32,2026,1,"Lucas",300);
    conta.visualizar();
    conta.sacar(300);
    console.log("========");
    conta.visualizar();
    conta.depositar(1000);

    //Teste usando Classe da Conta(conta 2)
    const conta2: Conta = new Conta(2,2030,2,"Andre",3000);
    conta2.visualizar();
    conta2.sacar(2000);
    console.log("========");
    conta2.visualizar();
    conta2.depositar(4000);

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