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
