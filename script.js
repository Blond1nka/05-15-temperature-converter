let day;
switch (0) {
    case 0:
        day = "Sunday";        
        break;
    case 1:
        day = "Monday";
        break;
    default:
        day = "Eightday"
        break;
} 


function calculus(xAxis, yAxis){
    let table = '<table>';
    for (let y = 1; y <= yAxis; y++) {
        table += row(xAxis,y);    
    }
    table += '</table>'
    return table;
}

function row(xAxis,y){
    let row = '<tr>'; 
    for (let x = 1; x <= xAxis; x++) {
        row += cell( multiplication( x, y ) );
    }
    row += '</tr>'
    return row;
}


function multiplication(x,y){
    return x*y;
}

function cell(num){
    return '<td>'+num+'</td>'
}

document.getElementById('container').innerHTML = calculus(10,10)


let btn = document.getElementById('btn');

btn.addEventListener('click',paspaudei);

function paspaudei() {
    console.log("paspausk mane dar karteli.. =)");
}

