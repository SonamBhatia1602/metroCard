const { addBalanceReq, setPassengerCount } = require("./util.js");
const { station } = require("./station");

describe("addBalanceReq function", () => {
    test("should add a new card to the metroCardMap if it does not exist", () => {
        const metroCardMap = {};
        const inputArr = ["BALANCE", "MC1", 600];
        addBalanceReq(metroCardMap, inputArr);
        expect(metroCardMap).toHaveProperty("MC1");
        expect(metroCardMap["MC1"]).toMatchObject({
            cardNo: "MC1",
            balance: 600,
            travelCount: 0,
        });
    });
});

describe("setPassengerCount function", () => {
    const stationObj = new station("AIRPORT");
    test("should increase the adult passenger count by 1", () => {
        const inputArr = ["CHECK_IN", "MC1", "ADULT", "CENTRAL"];
        setPassengerCount(stationObj, inputArr);
        expect(stationObj.adult).toBe(1);
        expect(stationObj.kid).toBe(0);
        expect(stationObj.senior).toBe(0);
    });
    test("should increase the kid and adult passenger count by 1", () => {
        const inputArr = ["CHECK_IN", "MC1", "KID", "CENTRAL"];
        setPassengerCount(stationObj, inputArr);
        expect(stationObj.adult).toBe(1);
        expect(stationObj.kid).toBe(1);
        expect(stationObj.senior).toBe(0);
    });
});
