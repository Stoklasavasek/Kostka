var hody = [];

document.getElementById('game').addEventListener('click', function(){
    var diceCount = document.getElementById('diceCount').value;
    hody = [];
    var resultElement = document.getElementById('result');
    var tableBody = document.getElementById('tableBody');
    resultElement.innerHTML = ''; 
    for (var i = 0; i < diceCount; i++) {
        hod(resultElement, tableBody);
    }
    console.log(hody);
});

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod(resultElement, tableBody) {
    var h = Math.ceil(Math.random() * 6);
    hody.push(h);
    
    var img = document.createElement('img');
    img.src = 'img/kostka' + h + '.png';
    img.alt = 'Kostka ' + h;
    resultElement.appendChild(img);
    
    resultElement.innerHTML += '<p>Hod: ' + h + '</p>';
    resultElement.innerHTML += '<p>Počet hodů: ' + hody.length + '</p>';
    resultElement.innerHTML += '<p>Součet hodů: ' + suma(hody) + '</p>';
    resultElement.innerHTML += '<p>Průměr hodů: ' + average(suma(hody), hody.length) + '</p>';
    resultElement.innerHTML += '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    resultElement.innerHTML += '<p>Nejnižší hod: ' + minimum(hody) + '</p>';

   
    var newRow = tableBody.insertRow();
    newRow.insertCell(0).innerHTML = hody.length;
    newRow.insertCell(1).innerHTML = hody.length;
    newRow.insertCell(2).innerHTML = maximum(hody);
    newRow.insertCell(3).innerHTML = average(suma(hody), hody.length);
    newRow.insertCell(4).innerHTML = maximum(hody); 
}
