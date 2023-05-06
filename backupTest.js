
test('calls addBalanceReq when input is BALANCE', () => {
    const inputArr = ["BALANCE","MC1","100"];
    const metroCardMap = {MC1: new cardDetails("MC1", 100)};
    addBalanceReqMock = jest.spyOn(util, 'addBalanceReq');
    handleCheckInReqMock = jest.spyOn(core, 'handleCheckInReq');
    // printMock = jest.spyOn(print, 'print');
    core.switchcaseFun(inputArr, metroCardMap);
        // util.addBalanceReq(metroCardMap, inputArr);
        // expect(printMock).not.toHaveBeenCalled();

    expect(addBalanceReqMock).toHaveBeenCalled();
    expect(addBalanceReqMock).toHaveBeenCalledWith(metroCardMap, inputArr);
    expect(handleCheckInReqMock).not.toHaveBeenCalled();
});
        

    // test('calls print when input is PRINT_SUMMARY', () => {
    //     const inputArr = ["PRINT_SUMMARY"];
    //     printMock = jest.spyOn(print, 'print');
    //     const metroCardMap = {MC1: new cardDetails("MC1", 100)};
    //     const stationObj = new station("CENTRAL");
    //     const airportObj = new station("AIRPORT");
    //     stationMap["CENTRAL"] = stationObj;
    //     stationMap["AIRPORT"] = airportObj;

    //     core.switchcaseFun(inputArr, metroCardMap);
    //     // expect(printMock).toHaveBeenCalled();
    //     expect(addBalanceReqMock).not.toHaveBeenCalled();
    //     expect(handleCheckInReqMock).not.toHaveBeenCalled();
    // });