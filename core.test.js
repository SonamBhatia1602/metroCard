const { cardDetails } = require("./cardDetails");
const { stationMap, station } = require("./station");
const util = require("./util");
const core = require("./core");

describe("handleCheckInReq", () => {
    // stationMap empty.
    test("updates metroCard, station and travel amount correctly", () => {
        const inputArr = ["CHECK_IN", "MC1", "ADULT", "CENTRAL"];
        const metroCardMap = { MC1: new cardDetails("MC1", 100) };
        setPassengerCountMock = jest.spyOn(util, "setPassengerCount");
        setTravelAmountMock = jest.spyOn(util, "setTravelAmount");

        expect(stationMap).toEqual({});

        core.handleCheckInReq(inputArr, metroCardMap);

        // a new station should have been created.
        expect(stationMap).toHaveProperty("CENTRAL");

        // card travel count should increment.
        expect(metroCardMap["MC1"].travelCount).toBe(1);

        expect(setPassengerCountMock).toHaveBeenCalled();

        expect(setTravelAmountMock).toHaveBeenCalled();
    });
});

describe("setTravelAmount", () => {
    test("updates travel amount correctly", () => {
        const inputArr = ["CHECK_IN", "MC1", "ADULT", "CENTRAL"];
        const metroCard = new cardDetails("MC1", 100);
        const stationObj = new station("CENTRAL");
        metroCard.setTravelCount();
        util.setTravelAmount(inputArr, metroCard, stationObj);
        expect(metroCard.travelCount).toBe(1);
        expect(stationObj.amount).toBe(202);
    });
});

describe("switchcaseFun", () => {
    afterEach(() => {
        // restore the spy created with spyOn
        jest.restoreAllMocks();
    });

    test("calls addBalanceReq when input is BALANCE", () => {
        const inputArr = ["BALANCE", "MC1", "100"];
        const metroCardMap = { MC1: new cardDetails("MC1", 100) };
        addBalanceReqMock = jest.spyOn(util, "addBalanceReq");
        handleCheckInReqMock = jest.spyOn(core, "handleCheckInReq");
        core.switchcaseFun(inputArr, metroCardMap);
        expect(addBalanceReqMock).toHaveBeenCalled();
        expect(addBalanceReqMock).toHaveBeenCalledWith(metroCardMap, inputArr);
        expect(handleCheckInReqMock).not.toHaveBeenCalled();
    });
});
