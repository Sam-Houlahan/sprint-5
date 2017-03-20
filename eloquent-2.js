//  Looping a Triangle


var result ='#';

while (result.length < 7) {
result+='#';
console.log(result);
}



 // FizzBuzz
for(i=1; i<100; i++){
  if (i%3 === 0 && i%5 ===0){
    console.log("FizzBuzz");
  }
  else if( i%3 === 0){
   console.log("Fizz")
  } else if(i%5 ===0){
    console.log("Buzz");
  }

  }



//Chessboard

var grid = 7;

for(i=0; i <= grid; i++){
 for ( x =0; x <= grid; x++){
  if((i + x) % 2 === 0){

    string += " ";

 } else {

  string += '#';

 }
}
  string += "\n";
}

console.log(string);


//All excercise's done with the help of the hints
