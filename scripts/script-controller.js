let dividas = [];

function saveDivida() {
    let titulo = document.getElementById('titulo-divida').value;
    let valor = parseInt(document.getElementById('divida').value);
    
    if (!isNaN(valor)) {
        let divida = { titulo: titulo, valor: valor };
        dividas.push(divida);
        localStorage.setItem('dividas', JSON.stringify(dividas));
        updateDividasOutput();
        document.getElementById('divida').value = "";
        document.getElementById('titulo-divida').value = "";
    } else {
        alert("Por favor, insira um valor válido para a dívida.");
    }
}

function getDividas() {
    updateDividasOutput();
}

function updateDividasOutput() {
    let output = "";
    if (dividas.length > 0) {
        output = dividas.map(divida => `Título: ${divida.titulo} | Valor: R$ ${divida.valor},00`).join('\n');
    } else {
        output = "Nenhuma dívida cadastrada.";
    }
    document.getElementById('output-divida').innerText = output;
}

let dinheiros = [];

function saveDinheiro() {
    let titulo = document.getElementById('titulo-dinheiro').value;
    let valor = parseInt(document.getElementById('dinheiro').value);
    
    if (!isNaN(valor)) {
        let dinheiro = { titulo: titulo, valor: valor };
        dinheiros.push(dinheiro);
        localStorage.setItem('dinheiros', JSON.stringify(dinheiros));
        updateDinheiroOutput();
        document.getElementById('dinheiro').value = "";
        document.getElementById('titulo-dinheiro').value = "";
    } else {
        alert("Por favor, insira um valor válido para o dinheiro.");
    }
}

function getDinheiro() {
    updateDinheiroOutput();
}

function updateDinheiroOutput() {
    let output = "";
    if (dinheiros.length > 0) {
        output = dinheiros.map(dinheiro => `Título: ${dinheiro.titulo} | Valor: R$ ${dinheiro.valor},00`).join('\n');
    } else {
        output = "Nenhum valor de dinheiro cadastrado.";
    }
    document.getElementById('output-dinheiro').innerText = output;
}

function getRelatorio() {
    let totalDinheiro = dinheiros.reduce((acc, curr) => acc + curr.valor, 0);
    let totalDivida = dividas.reduce((acc, curr) => acc + curr.valor, 0);
    let saldoFinal = totalDinheiro - totalDivida;
    
    let msgDinheiro = "R$" + totalDinheiro + ",00";
    let msgDivida = "R$" + totalDivida + ",00";

    let msgRelatorio = `Você possui a quantia de: ${msgDinheiro}\nPorém possui uma dívida de: ${msgDivida}`;
    let outputRelatorio = document.getElementById('output-relatorio');
    outputRelatorio.innerText = msgRelatorio;

    let saldoFinalElement = document.getElementById('saldo-final');
    let msgSaldoFinal = "R$" + saldoFinal + ",00";
    saldoFinalElement.innerText = msgSaldoFinal;

    if (saldoFinal >= 0) {
        saldoFinalElement.classList.remove('saldo-negativo');
        saldoFinalElement.classList.add('saldo-positivo');
    } else {
        saldoFinalElement.classList.remove('saldo-positivo');
        saldoFinalElement.classList.add('saldo-negativo');
    }
}