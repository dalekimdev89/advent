const fs = require('fs');

fs.readFile('./puzzleInput.txt', (err, data) => {
    console.time('funchallenge');
    if(err) {
        console.log('error', err);
    }
    
    let puzzle = data.toString();
    let floor = 0;

    for(let i=0; i<puzzle.length; i++){
        puzzle[i] === '(' ? floor = floor+1 : floor = floor -1
    };
    console.log('answer1-for', floor);

    const puzzleArray = puzzle.split('');
    const answer = puzzleArray.reduce((acc, currentValue) => {
        if(currentValue === '(') {
            return acc += 1;
        } else if(currentValue === ')') {
            return acc -= 1;
        }
    }, 0);

    console.log('answer1-reduce:', answer);
    console.timeEnd('funchallenge');
})

// const file = fs.readFileSync('./hello.txt');
// console.log('Sync', file.toString());

function question2() {
    fs.readFile('./puzzleInput.txt', (err, data) => {
        const puzzle = data.toString();
        const puzzleArray = puzzle.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = puzzleArray.some((currentItem) => {
            if(currentItem === '(') {
                accumulator += 1;
            } else if(currentItem === ')') {
                accumulator -= 1;
            }
            counter ++;
            return accumulator < 0;
        })
        console.log('basement entered at: ', counter);
    })
}

question2()