
document
    .getElementById('registrar-entrada')
    .addEventListener('click', function () {
        window.localStorage.setItem('comecoDeExpediente',new Date());
        updateUI();
    });

document
    .getElementById('registrar-comeco-almoco')
    .addEventListener('click', function () {
        window.localStorage.setItem('comecoDeAlmoco',new Date());
        updateUI();
    });

document
    .getElementById('registrar-fim-almoco')
    .addEventListener('click', function () {
        window.localStorage.setItem('fimDeAlmoco',new Date());
        updateUI();
    });

document
    .getElementById('registrar-saida')
    .addEventListener('click', function () {
        window.localStorage.setItem('fimDeExpediente',new Date());
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
    comecoDeExpediente = new Date(comecoDeExpediente);
     
    
    let comecoDeAlmoco = localStorage.getItem('comecoDeAlmoco')
    comecoDeAlmoco = new Date(comecoDeAlmoco);

    let fimDeAlmoco = localStorage.getItem('fimDeAlmoco');
    fimDeAlmoco = new Date(fimDeAlmoco);

    let fimDeExpediente = localStorage.getItem('fimDeExpediente');
    fimDeExpediente = new Date(fimDeExpediente);
    
    let primeiroHorario = new Date(comecoDeAlmoco - comecoDeExpediente);
    let segundoHorario = new Date(fimDeExpediente - fimDeAlmoco);
    
    let parse = primeiroHorario.getUTCHours() + segundoHorario.getUTCHours() + "H";
        parse += primeiroHorario.getUTCMinutes() + segundoHorario.getUTCMinutes() + "M";
        parse += primeiroHorario.getUTCSeconds() + segundoHorario.getUTCSeconds() + "S";
    
    console.log(`Hoje você trabalhou ${parse}`);
}
