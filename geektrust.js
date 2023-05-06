const fs = require("fs");

const filename = process.argv[2];
// const filename = "/Users/sonam/Coding/Sonam/Geektrust/MetroCard-nodejs-npm-starter-kit/sample_input/input1.txt";
const print = require("./print.js");
const util = require("./util.js");
const core = require("./core.js");
// const {addBalanceReq,setPassengerCount} = require("./util.js");

function main() {
    fs.readFile(filename, "utf8", (err, data) => {
        if (err) throw err;
        var inputLines = data.toString().split("\n");
        const metroCardMap = {};
        for (let i = 0; i < inputLines.length; i++) {
            inputLines[i] = inputLines[i].replace("\r", "");
            const inputArr = inputLines[i].split(" ");
            core.switchcaseFun(inputArr, metroCardMap);
        }
    });
}

module.exports = {
    main,
};
main();
