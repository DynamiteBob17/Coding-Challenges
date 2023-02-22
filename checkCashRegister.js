const UNIT_VALUES = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
];

const CID_TO_OBJ = cid => {
    let obj = {};
    let cidCopy = [...cid];
    cidCopy.reverse().forEach(element => {
        obj[element[0]] = element[1];
    })

    return obj;
};

function checkCashRegister(price, cash, cid) {
    const cidObj = CID_TO_OBJ(cid);
    const unitValuesObj = CID_TO_OBJ(UNIT_VALUES);

    let res = {
        status: "",
        change: []
    }, updatedCidObj = {}, updatedChange = cash - price;

    for (let unit of Object.keys(cidObj)) {
        let tempResAmount = Math.floor(updatedChange / unitValuesObj[unit]);
        let currentAmount = Math.round(cidObj[unit] / unitValuesObj[unit]);

        let resAmount = currentAmount <= tempResAmount ? currentAmount : tempResAmount;
        let resAmountValue = resAmount * unitValuesObj[unit];

        updatedCidObj[unit] = parseFloat((cidObj[unit] - resAmountValue).toFixed(2));

        if (resAmount > 0) {
            res.change.push([unit, resAmountValue]);
            updatedChange = parseFloat((updatedChange - resAmountValue).toFixed(2));
        }
    }

    if (updatedChange > 0) {
        res = { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (Object.keys(updatedCidObj).every(unit => 0 === updatedCidObj[unit])) {
        res = { status: 'CLOSED', change: cid };
    } else {
        res.status = 'OPEN';
    }

    return res;
}
