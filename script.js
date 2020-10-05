


const minimum = function (a,b){
  if (a>b){
    return b;
  }
  else if (b>a){
    return a;
  }
else return a;
}

const maximum = function (a,b){
  if(a<b){
    return b;
  }
  else if (a>b){
    return a;
  }
  else if (a = b){
    return a;
  }
}


function reduce(numbers,fn){
  var resultatFinal = -1;
  for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  var resultat;
    if (numbers.length <2){
      return null;
    }
    else if (numbers.length == 2){
      resultat = fn(element,numbers[index+1]);
      return resultat;
    }
    else if (numbers.length ==  3 ){
      resultat = fn(fn(element,numbers[index+1]),numbers[index+2])
      return resultat;
    }
    else {
      resultatFinal = fn(resultat,resultatFinal);
      resultat = fn(fn(fn(element,numbers[1]),numbers[2]),numbers[3]);


    }

  }console.log(resultatFinal);

}


bool = (nbre1)=> {
if (nbre1>30){
  console.log(nbre1);
  return true;
}
else return;
}
function filter(numbers,fn){
  const result = [];

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    fn(element);
  }
}


const myTestNumbers = [5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377];

