function forLoop(array) {

   for (var i=0; i<25; i++) {
   if (i < 2) {
     array.push(`I am ${i} strange loop.`)
     }
   else {
   	 array.push(`I am ${i} strange loops.`)
   }
   }
   return array
  }

function whileLoop(n) {

  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(num) {
  do {incrementVariable()}
  while (incrementVariable()>0})


}
