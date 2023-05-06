const {station,stationMap}= require("./station.js");
const util = require("./util.js");
const print = require("./print.js");


function handleCheckInReq(inputArr,metroCardMap) {
    if(!stationMap.hasOwnProperty([inputArr[3]])){
        const stat=new station(inputArr[3]);
        stationMap[inputArr[3]]=stat;
    }
    const stationObj = stationMap[inputArr[3]];
    const metroCard = metroCardMap[inputArr[1]];
    metroCard.setTravelCount();
    util.setPassengerCount(stationObj,inputArr);
    util.setTravelAmount(inputArr,metroCard,stationObj);
}

function switchcaseFun(inputArr,metroCardMap) {
    switch (inputArr[0]){
        case "BALANCE":
            util.addBalanceReq(metroCardMap,inputArr);
            break;
        case "CHECK_IN":
            handleCheckInReq(inputArr,metroCardMap);
            break;
        case "PRINT_SUMMARY":
            print.print();
            break;
        default:
            console.log("Invalid input");
    }
}
module.exports={
    handleCheckInReq,
    switchcaseFun,
}
