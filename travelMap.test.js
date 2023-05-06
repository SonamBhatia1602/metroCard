const { TravelCharges } = require("./travelMap.js");

describe("Travel Charges", () => {
    test("Adult charges should be 200", () => {
        expect(TravelCharges.get("ADULT")).toBe(200);
    });
    test("Senior Citizen charges should be 100", () => {
        expect(TravelCharges.get("SENIOR_CITIZEN")).toBe(100);
    });
    test("Kid charges should be 50", () => {
        expect(TravelCharges.get("KID")).toBe(50);
    });
    test("Non-existent category should return undefined", () => {
        expect(TravelCharges.get("NON_EXISTENT")).toBeUndefined();
    });
});
