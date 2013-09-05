// JavaScript Document

function add() {
    var obj = {};
    var i = 0;
    var foodName = [];
    var count = [];
    for(;;) {     
        var name = prompt('Введите название продукта, для завершения ввода нажмите отмену'); 
        if(!name || name === undefined) break;
        var sale = parseFloat(prompt('Введите стоимость'));  
        var howMany = parseFloat(prompt('количество товара'));
        if(!sale || !howMany || sale === undefined || howMany === undefined) break;
        cost = howMany * sale;
        foodName[i] =  name;
        count[i] = cost;
        if(confirm('следущий')){
        i++;
        } else { 
            break;
        }
    }
    for(var j = 0; j < foodName.length; j++) { 
        obj[foodName[j]] = count[j];
    }
    return obj;
}
var food = {};
for(var o in food){
    document.writeln(o + ': ' +  food[o]);
}


function sum(obj) {
    var sum = 0;
    for(var prop in obj){
        sum += parseFloat(obj[prop]);
    }
    return sum.toFixed(2);
}
function nameProp(obj) {
    var arr = [];
    var i = 0;
    for(var prop in obj) {
        arr[i] = prop;
        i++;
    } 
    return arr;
}
var d = add();
var str = nameProp(d).join('+');
alert( 'Сумма: ' +  str + '\n' + sum(d));
