let scores = [];
scores[0] =  9;
scores[4] =  10;
scores[9] =  5;
scores[7] =  6;
scores[1] =  10;
scores[2] =  5;
scores[3] =  6;
// scores[5] =  10;
scores[6] =  5;
scores[8] =  6;

console.log(scores);
console.log(scores[5]);

let total = 0, allResponses = false;

compute_total:if(scores.length > 0){
    for(let i = 0; i < scores.length; i++){
        if(isNaN(scores[i])){
            break compute_total;
        }else{
            total += scores[i];
        }
    }
    allResponses = true;
}

if(allResponses){
    console.log('Your combined total is: ' + total);
}else{
    console.log('You still need to finich some items.');
}