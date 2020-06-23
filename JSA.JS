function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './JSAssign.json', true);
    // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == 200) {
            // Required use of an anonymous callback 
            // as .open() will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.response);
        }
    };
    xobj.send(null);
}

function assign1 (){
    loadJSON(function(response){
        var m1 = JSON.parse(response);
        var m2 = [];
        m1.forEach(element => {
            m2.push(element.first_name + ' '+ element.last_name)    
        });
        console.log(m2);
    })
}
function assign2 (){
    loadJSON(function(response){
        var m1 = JSON.parse(response);
        var m2=[];
        m2 = m1.filter(m1 => m1.gender=="Male"&& m1.age <40);
        console.log(m2)
    })
        
}
function assign3 (){
    loadJSON(function(response){
        var m1 = JSON.parse(response);
        var m2 = [];
        m2 = m1.map(x => m1 );
        console.log(m2)
    })}
function assign4 (){
    loadJSON(function(response){
        var m1 = JSON.parse(response);
        var m2 = [];
        m1.forEach(m1 => {
            m2.push({id: m1.id,
                     firstName: m1.first_name,
                     lastName: m1.last_name,
                     email: m1.email,
                     gender: m1.gender,
                     age: m1.age,
                     salary: m1.salary   
        })});
            console.log(m2);
          
    })
}
function assign5 (){
    loadJSON(function(response){
        var m1 = JSON.parse(response);
        const m = m1.age
        average = m.reduce(function (sum, age) {
        return sum + value;
    }, 0) / m.length;

console.log(average);
    })
}
