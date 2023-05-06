class cardDetails{
    constructor(cardNo,balance,travelCount=0){
        this.cardNo=cardNo;
        this.balance=balance;
        this.travelCount=travelCount;
    }
    setBalance(travelAmount){
        this.balance=this.balance-travelAmount;
    }
    setTravelCount(){
        this.travelCount+=1;
    }
}
module.exports={
    cardDetails
}