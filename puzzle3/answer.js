const fs = require('fs');

fs.readFile('./puzzle.txt', (err, data) => {
   if (err) {
      console.log(err);
   }

   const puzzle = data.toString().split("");

   let x = 0;
   let y = 0;

   const coordinates = puzzle.reduce((acc, num) => {
      if (num === '>') x++;
      if (num === '<') x--;
      if (num === '^') y++;
      if (num === 'v') y--;

      acc.push([x, y]);
      return acc;
   }, [[0, 0]]);

   // console.log('coordinates', coordinates);

   const dupes = coordinates.reduce((acc, num, i) => {
      if (i+1 !== coordinates.length) {
         for (var j=i+1; j<coordinates.length; j++) {
            if (num.toString() === coordinates[j].toString()) {
               acc.push(num);
            }
         }
      }
      return acc;
   }, [])

   console.log(coordinates.length, dupes.length, coordinates.length-dupes.length)

   // console.log(coordinates)

   // let arr = [];

   // for(var i=0; i<coordinates.length; i++){
   //     for(var j=i+1; j<coordinates.length; j++) {
   //         // console.log(i, coordinates[i].toString(), coordinates[j].toString())

   //         if(coordinates[i].toString() === coordinates[j].toString()) {
   //             arr.push(coordinates[i]);
   //         }
   //     }
   // }

   // console.log(coordinates.length, arr.length, coordinates.length - arr.length );

})