// const {readFileSync, writeFileSync, read} = require('fs');
// console.log('start');
// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

// writeFileSync (
//     './content/result-syncBuiltinESMExports.txt',
//     `here is the result ${first}, ${second}`,
//     { flag: 'a'}
// )

// console.log('done with the task');

const { log } = require('console');
const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `here is the result ${first}, ${second} thankyou`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log("file has been written successfully");
            }
        )
    })
})
console.log('starting new task')