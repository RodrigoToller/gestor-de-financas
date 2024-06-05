
let dividas = [];

function saveDivida() {
    let divida = parseInt(document.getElementById('divida').value);
    
    if (!isNaN(divida)) {
        dividas.push(divida);
        localStorage.setItem('dividas', JSON.stringify(dividas));
        updateDividasOutput();
        document.getElementById('divida').value = "";
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
        output = dividas.map(divida => `R$ ${divida},00`).join('\n');
    } else {
        output = "Nenhuma dívida cadastrada.";
    }
    document.getElementById('output-divida').innerText = output;
}

let dinheiros = [];

function saveDinheiro() {
    let dinheiro = parseInt(document.getElementById('dinheiro').value);
    
    if (!isNaN(dinheiro)) {
        dinheiros.push(dinheiro);
        localStorage.setItem('dinheiros', JSON.stringify(dinheiros));
        updateDinheiroOutput();
        document.getElementById('dinheiro').value = "";
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
        output = dinheiros.map(dinheiro => `R$ ${dinheiro},00`).join('\n');
    } else {
        output = "Nenhum valor de dinheiro cadastrado.";
    }
    document.getElementById('output-dinheiro').innerText = output;
}

function getRelatorio() {
    let totalDinheiro = dinheiros.reduce((acc, curr) => acc + curr, 0);
    let totalDivida = dividas.reduce((acc, curr) => acc + curr, 0);
    let saldoFinal = totalDinheiro - totalDivida;
    
    let msgDinheiro = "R$" + totalDinheiro + ",00";
    let msgDivida = "R$" + totalDivida + ",00";
    let msgSaldoFinal = "R$" + saldoFinal + ",00";

    let msgRelatorio = `Você possui a quantia de: ${msgDinheiro}\nPorém possui uma dívida de: ${msgDivida}\nSeu saldo final é de: ${msgSaldoFinal}`;

    document.getElementById('output-relatorio').innerText = msgRelatorio;
}

