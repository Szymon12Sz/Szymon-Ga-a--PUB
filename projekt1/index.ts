const express = require('express')  
const app = express() 
app.get('/', function (req, res) {  
  res.send('Hello World')  
})   
app.listen(4000) 
app.get('/:operation/:num1/:num2', function (req, res) 
{  
  let operation = (req.params.operation);
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);

  if (operation == 'dodaj')
  {
    res.send((num1+num2).toString());
  }
  else if(operation == 'odejmij')
  {
    res.send((num1-num2).toString());
  }
  else if(operation == 'pomnoz')
  {
    res.send((num1*num2).toString());
  }
  else if(operation == 'podziel')
  {
    res.send((num1/num2).toString());
  }
  else
  {
    res.send('Podaj prawidlowa czynnosc')
  }
})  
 