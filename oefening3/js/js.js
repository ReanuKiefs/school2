const result = document.getElementById('result');

function printMaaltafel (number, iteration,){
    let table = "";
    for (let i = 1; i <= iteration; i++) 
    {
        table += `${number * i}, `;
    }
    table = table.substring(0, table.length -2)
    result.innerHTML+=`${table} <br>`
}
printMaaltafel(1,10);
printMaaltafel(2,10);
printMaaltafel(3,10);
printMaaltafel(4,10);
printMaaltafel(5,10);
printMaaltafel(6,10);
printMaaltafel(7,10);
printMaaltafel(8,10);
printMaaltafel(9,10);
printMaaltafel(10,10);