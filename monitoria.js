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



