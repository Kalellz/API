function  dobro(n){
    return n * 2;
}
function somar(a, b){
    return a + b;
}
function media(a,b,c){
    return (a + b + c) /3;
}

function temp(t){
    if(t >= 37){
        return true
    }
    else{
        return false
    }
}

function tabuada(n){
    let array = [];

    for(let i = 0; i <= 10; i++){
        array[i] = i * n; 
    }
    return array;
}

// get
function text(t, c){
    let e = 0
    for(let letter of t){

        if(letter == c){
            e++
        }
    }
    return e;
}

function cinema(inteira, meia, dia, nacao){

    let mei = 14.25 * meia
    let int = 28.5 * inteira
    if(nacao == 'brasileira'){
        int = 5 * inteira
        mei = 5 * meia
        return int + mei;
    }
    if(dia == 'quarta'){
        int = 14.25 * inteira
        return int + mei
    }
    return mei + int
}

// get
function corprimaria(cor){
    let respo = false
    if(cor == "amarelo" || cor == "azul" || cor == "vermelho"){
        respo = true;
    }
    return respo
    
}

function maiornumero(array){
    let maior = 0;
    for(let item of array){
        if(item > maior){
            maior = item;
        }
    }
    return maior;
}

export {somar, dobro, media, temp, tabuada, text, cinema, corprimaria, maiornumero}