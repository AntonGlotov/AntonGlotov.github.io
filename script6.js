function multiply(){
  var num1, num2, result;
  num1=document.getElementById('n1').value;
  num1=parseInt(num1);
  num2=document.getElementById('n2').value;
  num2=parseInt(num2);
  result=num1*num2;
  if (isNaN(result) || num1<0 ||num2<0 || !(Number.isInteger(num2))){
    alert("Ошибка");
  }
  else{alert(result);}
}



var type;
function b1(){
  type = 1;
  c();
  document.getElementById('btn1').value = 'Выбрано';
  document.getElementById('btn2').value = 'Выбрать';
  document.getElementById('btn3').value = 'Выбрать';
}
function b2(){
  type = 2;
  c();
  document.getElementById('btn1').value = 'Выбрать';
  document.getElementById('btn2').value = 'Выбрано';
  document.getElementById('btn3').value = 'Выбрать';
}
function b3(){
  type = 3;
  c();
  document.getElementById('btn1').value = 'Выбрать';
  document.getElementById('btn2').value = 'Выбрать';
  document.getElementById('btn3').value = 'Выбрано';
}
function c(){
  var itog = document.getElementById('itog');
  var c = document.getElementById('c').value;
  c = parseInt(c);
  if(type == 1){
    itog.innerHTML = (c*40000+' рублей');
  }else if(type == 2){
    itog.innerHTML = (c*2000+' рублей');
  }else{
    itog.innerHTML = (c*500+' рублей');
  }
}
document.addEventListener("DOMContentLoaded", ready);
