// 5 exercícios do Hacker Rank para a monitoria
// Javascript s2

// 1. Simple Array Sum
function simpleArraySum(ar) {
    let i = 0;
    let result = 0;
    
    while (i < ar.length){
        result += ar[i];
        i++;
    }
    
    return result;
    
}


// 2. Compare Triplets
function compareTriplets(a, b) {
    let aliceAndBob = [0, 0];
    
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]){
            aliceAndBob[0]++; 
        } if (a[i] < b[i]){
            aliceAndBob[1]++;
        } 
    }

    return aliceAndBob;
}


// 3. A Very Big Sum
function aVeryBigSum(ar) {
    let result = 0;
    
    for (let i = 0; i < ar.length; i++){
        result += ar[i];
    }
    
    return result;
    
}


// 4. Plus Minus
function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            positive++;
        } 
        else if (arr[i] < 0) {
            negative++;
        }
        else {
            zero++;
        }
    }
    
    positive /= arr.length;
    negative /= arr.length;
    zero /= arr.length;
    
    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));
    
}


// 5. Staircase
function staircase(n) {
    for (let i = 1; i <= n; i++){
        let staircaseSpaceString = '';
        let staircaseString = '';

        for (let space = 0; space < n-i; space++){
            staircaseSpaceString += ' ';
        }

        for (let hash = 0; hash < i; hash++){
            staircaseString += '#';
        }

        console.log(staircaseSpaceString + staircaseString);

    }
}

// 6. Diagonal Difference

function diagonalDifference(arr) {
    let somaPrimeiraDiagonal = 0;
    let somaSegundaDiagonal = 0;
    let diferenca;
    let c = arr.length - 1;

    for (let i = 0; i < arr.length; i++){
        somaPrimeiraDiagonal += arr[i][i];
    }

    for (let i = 0; i < arr.length; i++){
        somaSegundaDiagonal += arr[i][c];
        c--;
    }
    
    diferenca = somaSegundaDiagonal - somaPrimeiraDiagonal;
    
    if (diferenca < 0){
        diferenca *= -1;
    }
    
    return diferenca;
}


// 7. Birthday Cake Candles
function birthdayCakeCandles(candles) {
    let tallestCandlesQuantity = 0;
    let tallestCandle = candles[0];
    
    for (let i = 0; i < candles.length; i++){
        if (tallestCandle === candles[i]){
            tallestCandlesQuantity++;
        }
        if (candles[i] > tallestCandle){
            tallestCandlesQuantity = 1;
            tallestCandle = candles[i];
        }
    }
    
        return tallestCandlesQuantity;
}

// 8. Mini-Max Sum
function miniMaxSum(arr) {
    let somaArr = []; 
    
    let valorMaior = arr[0] + arr[1] + arr[2] + arr[3]; 
    let valorMenor = arr[0] + arr[1] + arr[2] + arr[3]; 
    
    
    somaArr[0] = arr[0] + arr[1] + arr[2] + arr[4];
    somaArr[1] = arr[0] + arr[1] + arr[3] + arr[4];
    somaArr[2] = arr[0] + arr[2] + arr[3] + arr[4];
    somaArr[3] = arr[1] + arr[2] + arr[3] + arr[4];
    
    for (let i = 0; i < arr.length; i++){
    
        if (somaArr[i] > valorMaior){
            valorMaior = somaArr[i];
        }
        if (somaArr[i] < valorMenor){
            valorMenor = somaArr[i];
        }
    
    }
    
    console.log( valorMenor, valorMaior);
    
}

// 9. Time Conversion
function timeConversion(s) {
    let horarioMilitar;

let partesHora = s.split(':');

let horas = parseInt(partesHora[0]);
let minutos = partesHora[1];
let segundos = partesHora[2].slice(0, 2);

if (s.includes('AM') && horas === 12){
    horarioMilitar = '00:' + minutos + ':' + segundos;
}

if (s.includes('AM') && horas != 12){
    if(horas < 10){
        horarioMilitar = '0' + horas + ':' + minutos + ':' + segundos;
    }
    else {
        horarioMilitar = horas + ':' + minutos + ':' + segundos;
    }
}

if (s.includes('PM')){
    if(horas != 12){
        horas += 12;
        horarioMilitar = horas + ':' + minutos + ':' + segundos;
    }
    else {
        horarioMilitar = horas + ':' + minutos + ':' + segundos;
    }
}

    return horarioMilitar;
} 


// 10. Grading Students
function gradingStudents(grades) {
    
    let arredondamento = [];

    for (let i = 0; i < grades.length; i++){
        let notas = grades[i];
        let diferenca = 0;
        
        if (notas < 38) {
            arredondamento.push(notas);
        }
        else {
            diferenca = Math.ceil(grades[i]/5)*5 - grades[i];
            if (diferenca < 3){
                arredondamento.push(Math.ceil(grades[i]/5)*5);
            }
            else {
                arredondamento.push(notas);
            }
        }
    }
    
    return arredondamento;

}

// 11. Breaking the Records
function breakingRecords(scores) {
    let maxMinMudancas = [0, 0];
    let maxMinValores = [scores[0], scores[0]];

    for (let i = 0; i < scores.length; i++){
        if (scores[i] < maxMinValores[1]){
            maxMinValores[1] = scores[i];
            maxMinMudancas[1] += 1;
        }
        if (scores[i] > maxMinValores[0]){
            maxMinValores[0] = scores[i];
            maxMinMudancas[0] += 1;
        }
    }

    return maxMinMudancas;
}

// 12. Divisible Sum Pairs
function divisibleSumPairs(n, k, ar) {
    let divisiveis = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let somaPares = ar[i] + ar[j];
            if (somaPares % k === 0) {
                divisiveis += 1;
            }
        }
    }

    return divisiveis;
}

// 13. Migratory Birds
function migratoryBirds(arr) {
    let frequencia = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < arr.length; i++) {
        frequencia[arr[i]]++;
    }

    let maisFrequente = 1;
    for (let i = 2; i <= 5; i++) {
        if (frequencia[i] > frequencia[maisFrequente]) {
            maisFrequente = i;
        }
    }

    return maisFrequente;
}

// 14. Between Two Sets
function getTotalX(a, b) {
    let multiplos = [];
    let numerosDivisiveis = 0;

    let maiorA = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > maiorA) {
            maiorA = a[i];
        }
    }

    for (let i = maiorA; i <= b[0]; i++) {
        let valido = true;

        for (let j = 0; j < a.length; j++) {
            if (i % a[j] !== 0) {
                valido = false;
                break;
            }
        }

        
        if (valido === true) {
            for (let j = 0; j < b.length; j++) {
                if (b[j] % i !== 0) {
                    valido = false;
                    break;
                }
            }
        }

        if (valido === true) {
            multiplos.push(i);
        }
    }

    numerosDivisiveis = multiplos.length;

    return numerosDivisiveis;
}

