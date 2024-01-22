let inputbyusers = document.getElementById("input-holder");
let unitconverter = document.getElementById("cfk");
let convertbutton = document.getElementById("convert-holder");
let Reset = document.getElementById('Reset-holder')
let  output = document.getElementById("store-output");

convertbutton.addEventListener("click",()=>{
    const temperature = parseFloat(inputbyusers.value); // take value inside function given by users with help of .value() property.
    const  unit = unitconverter.value;
    let tempconvert;
    let unitconvert ;
    // check unit given by users and also number is valid.
  if(!isNaN(temperature)){  // NaN covert string into number.
    if(unit=="celsius"){
        // if unit is celsius then convert into fahrenheit
        tempconvert = (temperature*9/5)+32;
        unitconvert = "Fahrenheit (F)";
    }
    else if(unit=="fahrenheit"){
        // if unit is fahreheit then convert into celsius
        tempconvert = (temperature-32)*5/9;
        unitconvert = "Celsius (C)";
    }else if(unit=="kelvin"){
        tempconvert = temperature+273.15;
        unitconvert = "Kelvin (K)";
    }
    tempconvert = tempconvert.toFixed(3);
    output.innerText=`Converted Temperature : ${tempconvert} ${unitconvert}`;
  }
  else{
    output.innerText="Please enter a valid Number";
  }
});
Reset.addEventListener("click",()=>{
  inputbyusers.value=" ";
  unitconverter.value=" ";
  output.innerText=" ";
});

