//* Import node modules
const fs = require('node:fs')
//* Read file
const text = fs.readFileSync('./message_02.txt', 'utf-8')
/* 
"#" Increases the numeric value by 1.
"@" Decreases the numeric value by 1.
"*" Multiplies the numeric value by itself.
"&" Prints the current numeric value. 
*/

const compiler = (text) => {
    const array = Array.from(text)
    let val = 0
    
array.reduce((acc, element) => {
    
    if (element === '#') {
        acc++;
    } else if (element === '@') {
        acc--;
    } else if (element === '*') {
        acc = acc * acc; 
    } else if (element === '&') {
        console.log(acc);
        
    }

    return acc; 
}, val);


}
compiler(text)