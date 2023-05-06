const { cardDetails } = require("./cardDetails");

describe("cardDetails constructor", () => {
    test("should create a new card object with the correct properties", () => {
        const cardNo = "MC1";
        const balance = 500;
        const travelCount = 2;
        const card = new cardDetails(cardNo, balance, travelCount);
        expect(card.cardNo).toBe(cardNo);
        expect(card.balance).toBe(balance);
        expect(card.travelCount).toBe(travelCount);
    });
    test("should create a new card object with default travelCount value", () => {
        const cardNo = "MC2";
        const balance = 1000;
        const card = new cardDetails(cardNo, balance);
        expect(card.cardNo).toBe(cardNo);
        expect(card.balance).toBe(balance);
        expect(card.travelCount).toBe(0);
    });
});
