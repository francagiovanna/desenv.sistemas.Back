// Criar uma função que recebe um número aletório, gerem o número aleatório quando chamar a função (usem metodo js)
//se o número for maior que 5, retorna resolve, se não retorna reject, usar finally livremente.

function esperarTempo(tempo) { 
    return new Promise(
        (resolve, reject) => { 
            setTimeout(() => {
                if (tempo >= 50 && tempo < 60){
                     resolve(`Esperando ${tempo}, minutos o bolo está pronto `);
                }
                else if (tempo < 40) {
                    reject(new Error('O bolo ainda não está pronto'));
                }
                else {
                    reject(new Error('O bolo queimou'));
                }
         }, 
            tempo); 
        });
}
esperarTempo(70)
    .then((resultado) => console.log(resultado)).catch((erro) => console.error(erro)).finally(() => console.log('Finalizado'));


// Criar uma função que recebe um número aleatório, gerem o numero aleatorio
// quando chamar a funcao(usem metodos js)
// se o numero for maior que 5, retorna resolve, se não retorna reject
// usem o finally livremente.

function esperarTempo(num) { 
    return new Promise(
        (resolve, reject) => { 
           // Gerar número aleatório entre 0 e 10
        const num = Math.floor(Math.random() * 11);
        console.log(`Número gerado: ${num}`)

        if (num > 5) {
            resolve(`Sucesso! O número ${num} é maior que 5.`);
        } else {
            reject(`Erro! O número ${num} é menor ou igual a 5.`);
        }
    });
}

esperarTempo(0)
    .then((resultado) => console.log(resultado)).catch((erro) => console.error(erro)).finally(() => console.log('Finalizado'));
