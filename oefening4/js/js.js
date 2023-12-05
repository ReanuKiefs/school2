const result = document.getElementById('result');
const currentYear = new Date().getFullYear();

function isLeapYear(){
    for (let i = 1950; i < currentYear; i++)
    {
        if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
            result.innerHTML += `${i} is een schrikkeljaar <br>`
        }
    }
}
isLeapYear()