let valores = [];
let soma = 0;

while (true) {
    let novoValor = prompt("Insira um valor (ou 'sair' para encerrar):");
    if (novoValor.toLowerCase() === 'sair') {
        break;
    }
    valores.push(parseFloat(novoValor));
    
    soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    
    let media = soma / valores.length;
    
    alert(`Soma dos valores: ${soma}\nMédia dos valores: ${media}`);
}