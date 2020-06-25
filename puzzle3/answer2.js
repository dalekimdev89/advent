const fs = require('fs');

function question2() {
   fs.readFile('./puzzle.txt', (err, data) => {
      if (err) {
         console.log(err);
      }

      let puzzleArray = data.toString().split("")
      // console.log(puzzleArray); 

      const santa = puzzleArray.reduce((acc, num, i) => {
         if (i % 2 !== 0) {
            acc.push(num);
         }
         return acc;
      }, []);
      // console.log(santa);

      let x=0 , y=0;
      const santaCoordinates = santa.reduce((acc, num) => {
         if (num === '>') x++;
         if (num === '<') x--;
         if (num === '^') y++;
         if (num === 'v') y--;

         acc[[x,y]] = true;
         return acc;
      }, {});

      console.log('santaCoordinates', Object.keys(santaCoordinates).length);

      const robot = puzzleArray.reduce((acc, num, i) => {
         if (i % 2 === 0) {
            acc.push(num);
         }
         return acc;
      }, []);

      let x1=0, y1=0;
      const robotCoordinates = robot.reduce((acc, num) => {
         if (num === '>') x1++;
         if (num === '<') x1--;
         if (num === '^') y1++;
         if (num === 'v') y1--;

         acc[[x1,y1]] = true;
         return acc;
      }, {});

      console.log('robotCoordinates', Object.keys(robotCoordinates).length)

      const mergedCoordinates = {
         ...santaCoordinates,
         ...robotCoordinates
      }

      console.log(Object.keys(mergedCoordinates).length)
   });  
}

question2();