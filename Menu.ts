import leia from "readline-sync"
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

//função principal
export function main() {

    //variaveis e constantes
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    //Instancia da Coasse ContasController
    let contas: ContaController = new ContaController();

    //Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.blue, 
                    "\n*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                //teste
                console.log("\nCriar Contas\n");

                let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
                contas.cadastrar(cc1);

                let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
                contas.cadastrar(cc2);

                let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
                contas.cadastrar(cp1);

                let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
                contas.cadastrar(cp2);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                console.log("Digite o numero da Conta: ");
                numero = leia.questionInt("");
                contas.procurandoNumero(numero);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
                
                console.log("Digite o numero da conta: ")
                numero = leia.questionInt("")

                let conta = contas.buscarNoArray(numero);

                if (conta != null){
                    
                    console.log("Digite o numero da agencia: ");
                    agencia = leia.questionInt("");

                    console.log("Digite o nome do titular da conta: ");
                    titular = leia.question("");

                    tipo = conta.tipo;

                    console.log("Digite o saldo da conta (R$): ");
                    saldo = leia.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da conta (R$): ");
                            limite = leia.questionFloat("");
                            contas.atualizar( new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o dia do aniversatio da conta poupança: : ");
                            aniversario = leia.questionInt("");
                            contas.atualizar( new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                        }
                } else {
                    console.log(colors.fg.red, "\nA conta numero" + numero + "nao foi encontrada!", colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);
                console.log("Digite o numero da conta: ");
                numero = leia.questionInt("");
                contas.deletar(numero);
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
                console.log("Digite o número da Conta: ");
                numero = leia.questionInt("");
                console.log("\nDigite o valor do Saque (R$): ");
                valor = leia.questionFloat("");
                contas.sacar(numero, valor);
                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
                console.log("Digite o número da Conta: ");
                numero = leia.questionInt("");
                console.log("\nDigite o valor do Depósito (R$): ");
                valor = leia.questionFloat("");
                contas.depositar(numero, valor);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);
                console.log("Digite o número da Conta de Origem: ");
                numero = leia.questionInt("");
                console.log("Digite o número da Conta de Destino: ");
                numeroDestino = leia.questionInt("");
                console.log("\nDigite o valor do Depósito (R$): ");
                valor = leia.questionFloat("");
                contas.transferir(numero, numeroDestino, valor);
                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: André Lucas Dias Lima");
    console.log("Generation Brasil - andre_lucas.94@hotmail.com");
    console.log("https://github.com/luhdias-png");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}

main();