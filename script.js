function multiplyBy()
{
        x = document.getElementById("num1").value;
        y = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = x * y;
}



function add()
{
        
        x = document.getElementById("num1").value;
        y = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = Number(x) + Number(y)
        
        
}



function subtract()
{
        x = document.getElementById("num1").value;
        y = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = x - y;
}



function divide()
{
        x = document.getElementById("num1").value;
        y = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = x / y;
}


function percentage() {
        x = document.getElementById("num1").value;
        document.getElementById("result").innerHTML = x / 100;

}

function currentTime(){
        document.getElementById('test').innerHTML=Date()
}











