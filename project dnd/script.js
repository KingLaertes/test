
const races = ["Человек", "Эльф", "Гном", "Гоблин", "Табакси", "Тифлинг", "Генази", "Сатир"];
const advAges=[]
for (var i=100; i <=500; i++){
    advAges.push(i);
}
const  simpAges=[]
for (var i =18; i <=100; i++){
    simpAges.push(i);
}
const genders=["Мужской","Женский"]
const klasses=["Воин","Бард", "Чародей", "Монах", "Изобретатель", "Друид", "Паладин","Вошлебник","Колдун","Варвар","Жрец","Плут", "Следопыт"]
function myFunctionsus(){
    const abac = {
        gender: genders[Math.floor(Math.random()*genders.length)],
        race: races[Math.floor(Math.random()*races.length)],
        age: simpAges[Math.floor(Math.random()*simpAges.length)],
        klass: klasses[Math.floor(Math.random()*klasses.length)]
    }
 

    var table = document.getElementById("demoa");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = abac.race;
    cell2.innerHTML = abac.gender;
    cell3.innerHTML = abac.age;
    cell4.innerHTML = abac.klass;
    abac.age=null
}
function udal(){
    var table = document.getElementById("demoa");
        table.innerHTML=""; 
        table.innerHTML = getElementById("first");
        var row = table.insertAdjacentElementRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML="Раса";
        cell2.innerHTML = "Пол";
        cell3.innerHTML = "Возраст";
        cell4.innerHTML = "";

        
}


