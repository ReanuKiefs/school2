const result = document.getElementById('result');
function sum(){
    let answer = 0;
    const array = [1,2,3,4,5];
    for (let i = 0; i < array.length; i++) {   
        answer += array[i];
    }
    result.innerHTML = `de som van de array is: ${answer}`
} 
sum();