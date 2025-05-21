
var BTN = document.getElementById("myButton")

var doSomething = function(event){
    alert("prasie me");
    console.log(event)
}

for(var i = 0; i < 3; i++){
    var newBTN = BTN.cloneNode(true)
    document.body.append(newBTN);

}

alert("PLEASE LET IT WORK!!!!")
                                        