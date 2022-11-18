//1
function Sum_Of_Two() {
  let element1 = document.getElementById('var1').value;
  let element2 = document.getElementById('var2').value;
  if (parseInt(element1) > parseInt(element2)) {
    let sum = parseInt(element1) + parseInt(element2);

    let dif = parseInt(element1) - parseInt(element2);
    let product = parseInt(element1) * parseInt(element2);
    let quotient = parseInt(element1) / parseInt(element2);
    let remainder = parseInt(element1) % parseInt(element2);
    document.getElementById("main1").innerHTML = 'Sum = ' + sum + ', Difference = ' + dif + ', Product = ' + product + ', Quotient = ' + quotient + ', Remainder = ' + remainder;
  }
  else {
    document.getElementById("main1").innerHTML = 'element2 is greater than element1';
  }
}


//2
function Sentence() {
  let element3 = document.getElementById('var3').value;
  let element4 = document.getElementById('var4').value;
  document.getElementById("main2").innerHTML = 'My name is ' + element3 + ', I am ' + element4 + '.';
}

//3
function Negative_Or_Not(){
  let element5 = document.getElementById('var5').value;
  if(element5 < 0){
    result = 'yes';
  }
  else{
    result = 'no';
  }
  document.getElementById('main3').innerHTML = result;
}

//4
function Odd_Or_Even(){
  let element6 = document.getElementById('var6').value;
  if(element6 % 2 == 0){
    result = 'even';
  }
  else{
    result = 'odd';
  }
  document.getElementById('main4').innerHTML = result;
}

//5
function Divisible_Or_Not(){
  let element7 = document.getElementById('var7').value;
  let element8 = document.getElementById('var8').value;
  if(element7 % element8 == 0 || element8 % element7 == 0){
    result = 1;
  }
  else{
    result = 0;
  }
  document.getElementById('main5').innerHTML = result;
}