const fs = require('fs');

function question1() {
   fs.readFile('./puzzle1.txt', (err, data) => {
      let puzzleArray = data.toString().split('\r');

      let badCount = 0;
      // check ab cd pq xy
      const arr1 = puzzleArray.filter(num => {
         for(var j=0; j < num.length-1; j++) {
            let str = num[j] + num[j+1];
            if(str === 'ab' || str === 'cd' || str === 'pq' || str === 'xy') {
               return num;
            }
         }
      })

      badCount += arr1.length;
      console.log(puzzleArray.length - badCount);

   })
}

question1();

//1 - check 3 vowels (aeiou)
//2 - 1 letter that appears twice in a row
//3 - ab cd pq xy
