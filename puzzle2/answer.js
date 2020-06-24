const fs = require('fs');

function question1() {
   fs.readFile('./puzzle2.txt', (err, data) => {
      if (err) {
         console.log(err)
      }

      const puzzleArray = data.toString().split("\n");

      let totalArea = 0;

      // console.log(puzzleArray.length)

      for (let i = 0; i < puzzleArray.length; i++) {
         let dimensionArray = puzzleArray[i].split('x');

         let l = dimensionArray[0];
         let w = dimensionArray[1];
         let h = dimensionArray[2];

         // console.log('lwh', l, w, h);

         let min = Math.min(l * w, w * h, h * l);
         // console.log('min', min);

         totalArea += 2 * l * w + 2 * w * h + 2 * h * l + min;
         console.log('totalArea', totalArea)
         // console.log(totalMin)
      }

      console.log(totalArea);
   })
}

// question1();

function question2() {
   fs.readFile('./puzzle2.txt', (err, data) => {
      if (err) {
         console.log(err)
      }

      const puzzleArray = data.toString().split('\n');
      let totalRibbonLength = 0;
      let ribbonLength = 0;
      let bowLength = 0;

      for (let i = 0; i < puzzleArray.length; i++) {
         let dimensionArray = puzzleArray[i].split('x');

         let l = parseInt(dimensionArray[0]);
         let w = parseInt(dimensionArray[1]);
         let h = parseInt(dimensionArray[2]);

         let bow = l * w * h;
         bowLength += bow;
         
         const sidesArray = dimensionArray.sort((a,b)=>a-b);
         let sidesArray1 = parseInt(sidesArray[0]);
         let sidesArray2 = parseInt(sidesArray[1]);
         
         let ribbon = 2*sidesArray1 + 2*sidesArray2;
         ribbonLength += ribbon;
      }

      totalRibbonLength = bowLength + ribbonLength;
      
      console.log(bowLength, ribbonLength, totalRibbonLength);
   })
}

question2()