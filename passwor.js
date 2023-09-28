let upperSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerSet ="abcdefghijklmnopqrstuvwxyz"
let numSet = "1234567890"
let sumbol = "!@#$%^&*()"


let display= document.getElementById("vava");
let upershow=document.getElementById("upercase");
let lowershow = document.getElementById("lowercase");
let  Numshow= document.getElementById("Numeric");
let sumbshow= document.getElementById("sumbuls");


let generatepass = (datatype) =>{
    return datatype [Math.floor(Math.random() * datatype.length)]
}

let createpass = (number="") =>{

    if(upershow.checked){
        number += generatepass(upperSet)
    }
    if(lowershow.checked){
        number += generatepass(lowerSet)
    }
    if(Numshow.checked){
        number += generatepass(numSet)
    }       
    if(sumbshow.checked){
        number += generatepass(sumbol)
    }
    document.getElementById("input1").value=number;
    
    if(number.length< display.value){
      return  createpass(number);
    }

}

document.getElementById("GO").addEventListener("click",function(){
    createpass();
}
)