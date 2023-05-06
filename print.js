const { stationMap } = require("./station.js");

function print() {
    let stationObj = stationMap.CENTRAL;
    let i = 2;
    while (i > 0) {
        let str1 = "";
        str1 +=
            "TOTAL_COLLECTION " +
            stationObj.name +
            " " +
            stationObj.amount +
            " " +
            stationObj.discount;
        console.log(str1);
        str1 = "";
        console.log("PASSENGER_TYPE_SUMMARY");
        if (stationObj.adult > 0) console.log("ADULT " + stationObj.adult);
        if (stationObj.kid > 0) console.log("KID " + stationObj.kid);
        if (stationObj.senior > 0)
            console.log("SENIOR_CITIZEN " + stationObj.senior);
        stationObj = stationMap.AIRPORT;
        i--;
    }
}

module.exports = {
    print,
};
