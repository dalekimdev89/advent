const fs = require('fs');

fs.readFile('./puzzleInput.txt', (err, data) => {
    console.time('funchallenge');
    if(err) {
        console.log('error', err);
    }

    let puzzle = data.toString();
    let floor = 0;

    for(let i=0; i<puzzle.length; i++){
        puzzle[i] === '(' ? floor = floor+1 : floor = floor -1;
        floor === -1 ? console.log('answer2', i+1) : ''
    }

    console.log('answer1', floor);
    console.timeEnd('funchallenge');
})

// 