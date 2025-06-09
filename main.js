const form=document.getElementById('formulario');
const campoA=document.getElementById('campoA');
const campoB=document.getElementById('campoB');
const mensagem=document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA=Number(campoA.value);
    const valorB=Number(campoB.value);

    if (valorB>valorA) {
        mensagem.textContent='Formulário válido: B é maior do que A!';
        mensagem.style.color='green'
    } else {
        mensagem.textContent='Formulário inválido: B precisa ser maior do que A!';
        mensagem.style.color='red'
    }
});