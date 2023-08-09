
document
    .getElementById('registrar-entrada')
    .addEventListener('click', function () {
        window.localStorage.setItem('comecoDeExpediente', Date());
        updateUI();
    });

document
    .getElementById('registrar-comeco-almoco')
    .addEventListener('click', function () {
        window.localStorage.setItem('comecoDeAlmoco', Date());
        updateUI();
    });

document
    .getElementById('registrar-fim-almoco')
    .addEventListener('click', function () {
        window.localStorage.setItem('fimDeAlmoco', Date());
        updateUI();
    });

document
    .getElementById('registrar-saida')
    .addEventListener('click', function () {
        window.localStorage.setItem('fimDeExpediente', Date());
        updateUI();
    });

function updateUI() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    document.getElementById('horas-armazenadas').textContent = values;
}

function calcularHorasTrabalhadas() {
    let comecoDeExpediente = localStorage.getItem('comecoDeExpediente');

    let comecoDeAlmoco = localStorage.getItem('comecoDeAlmoco')

    let fimDeAlmoco = localStorage.getItem('fimDeAlmoco');

    let fimDeExpediente = localStorage.getItem('fimDeExpediente');

    let diferenca2 = new Date(comecoDeAlmoco - comecoDeExpediente + fimDeExpediente - fimDeAlmoco);

  
    console.log(comecoDeExpediente);
    console.log(`Hoje você trabalhou ${diferenca2}`);
}
