const { cardDetails } = require("./cardDetails.js");
const { TravelCharges } = require("./travelMap.js");

function addBalanceReq(metroCardMap, inputArr) {
    if (!metroCardMap.hasOwnProperty([inputArr[1]])) {
        const card = new cardDetails(inputArr[1], inputArr[2]);
        metroCardMap[inputArr[1]] = card;
    }
}

function setPassengerCount(stationObj, inputArr) {
    if (inputArr[2] == "ADULT") {
        stationObj.setAdultCount();
    } else if (inputArr[2] == "KID") {
        stationObj.setKidCount();
    } else {
        stationObj.setSeniorCount();
    }
}

function setTravelAmount(inputArr, metroCard, stationObj) {
    let travelAmount = 0;
    let rechargeAmount = 0;
    const serviceCharge = 0.02;
    const evenNo = 2;
    const disc = 0.5;
    const balance = metroCard.balance;
    if (metroCard.travelCount % evenNo == 0) {
        travelAmount = TravelCharges.get(inputArr[2]) * disc;
        stationObj.setDiscount(travelAmount);
    } else {
        travelAmount = TravelCharges.get(inputArr[2]);
    }
    if (balance >= travelAmount) {
        metroCard.setBalance(travelAmount);
    } else {
        rechargeAmount = travelAmount - balance;
        metroCard.setBalance(balance);
        stationObj.setAmount(rechargeAmount * serviceCharge);
    }
    stationObj.setAmount(travelAmount);
}

module.exports = {
    addBalanceReq,
    setPassengerCount,
    setTravelAmount,
};
