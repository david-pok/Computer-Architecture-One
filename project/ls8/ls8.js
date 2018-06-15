// const RAM = require('./ram');
// const CPU = require('./cpu');

// /**
//  * Load an LS8 program into memory
//  *
//  * TODO: load this from a file on disk instead of having it hardcoded
//  */

const RAM = require('./ram');
const CPU = require('./cpu');

const fs = require('fs');
const argv = process.argv
// console.log(argv);
let program = argv[2];
const fileData = fs.readFileSync(program, "utf8");
// console.log(fileData);
const lines = fileData.trim().split(/[\r\n]+/g);
// console.log(lines);
let p = []
for (let i = 1; i < lines.length; i++) {

   p.push(lines[i].split(" ")[0]);

}
// console.log(p);

function loadMemory() {

    // Hardcoded program to print the number 8 on the console

    // const program = [ // print8.ls8
    //     "10011001", // LDI R0,8  Store 8 into R0
    //     "00000000",
    //     "00001000",
    //     "01000011", // PRN R0    Print the value in R0
    //     "00000000",
    //     "00000001"  // HLT       Halt and quit
    // ];

        // const program = [
        //     // "10011001", 
        //     // "00000000",
        //     // "00001000",
        //     // "10011001", 
        //     // "00000001",
        //     // "00001001",
        //     // "10101010", 
        //     // "00000000",
        //     // "00000001",
        //     // "01000011", 
        //     // "00000000",
        //     // "00000001" 
        // ];

    // Load the program into the CPU's memory a byte at a time
    for (let i = 0; i < p.length; i++) {
        cpu.poke(i, parseInt(p[i], 2));
    }
}

/**
 * Main
 */

let ram = new RAM(256);
let cpu = new CPU(ram);

// TODO: get name of ls8 file to load from command line

loadMemory(cpu);

cpu.startClock();


// const RAM = require('./ram');
// const CPU = require('./cpu');
// const fs = require('fs');

// /**
//  * Load an LS8 program into memory
//  *
//  * TODO: load this from a file on disk instead of having it hardcoded
//  */
// function loadMemory() {
//   // Hardcoded program to print the number 8 on the console

//   const fileName = process.argv[2];

//   var fs = require('fs');
//   var program = fs
//     .readFileSync(fileName)
//     .toString()
//     .split('\n')
//     .reduce((array, line) => {
//       if (line[0] !== '#' && line !== '') {
//         return array.concat(line.slice(0,8));
//       }
//       return array;
//     },[])

//   // Load the program into the CPU's memory a byte at a time
//   for (let i = 0; i < program.length; i++) {
//     cpu.poke(i, parseInt(program[i], 2));
//   }
// }

// /**
//  * Main
//  */

// let ram = new RAM(256);
// let cpu = new CPU(ram);

// // TODO: get name of ls8 file to load from command line

// loadMemory(cpu);

// cpu.startClock();