function forLoop(array){
  for (let i = 0; i < 25; i++) 
  if (i == 1){
    var additional = "I am 1 strange loop.";
    array.push(additional);
  } else{
    var second_addition = 'I am ${i} strange loops'
    array.push(second_addition);
    }
  return array;
  
}

