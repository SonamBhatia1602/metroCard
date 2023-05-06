const stationMap = {};
class station {
    constructor(
        name,
        adult = 0,
        senior = 0,
        kid = 0,
        amount = 0,
        discount = 0
    ) {
        this.name = name;
        // this.type=type;
        this.adult = adult;
        this.senior = senior;
        this.kid = kid;
        this.amount = amount;
        this.discount = discount;
    }
    setAdultCount() {
        this.adult += 1;
    }
    setKidCount() {
        this.kid += 1;
    }
    setSeniorCount() {
        this.senior += 1;
    }
    setAmount(travelAmt) {
        this.amount += travelAmt;
    }
    setDiscount(dis) {
        this.discount += dis;
    }
}

module.exports = {
    station,
    stationMap,
};
