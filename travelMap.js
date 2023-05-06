const adultCharges = 200;
const senCitizenCharges = 100;
const kidCharges = 50;

const TravelCharges = new Map();
TravelCharges.set("ADULT", adultCharges);
TravelCharges.set("SENIOR_CITIZEN", senCitizenCharges);
TravelCharges.set("KID", kidCharges);

module.exports = {
    TravelCharges,
};
