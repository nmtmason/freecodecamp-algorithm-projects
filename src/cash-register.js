let coins = {
  ['ONE HUNDRED']: 100,
  ['TWENTY']: 20,
  ['TEN']: 10,
  ['FIVE']: 5,
  ['ONE']: 1,
  ['QUARTER']: 0.25,
  ['DIME']: 0.1,
  ['NICKEL']: 0.05,
  ['PENNY']: 0.01
};

// https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
function round(num, precision = 2) {
  return +(Math.round(`${num}e+${precision}`) + `e-${precision}`);
}

module.exports = function(price, cash, cid) {
  let changeRequired = cash - price;

  let drawer = cid.reduce(
    (drawer, [bucket, value]) => Object.assign(drawer, { [bucket]: value }),
    {}
  );

  let drawerTotal = Object.values(drawer).reduce(
    (total, value) => round(total + value),
    0
  );

  if (drawerTotal === changeRequired) {
    return { status: 'CLOSED', change: cid };
  }

  if (drawerTotal < changeRequired) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  let change = Object.entries(coins).reduce((change, [coin, value]) => {
    let valueOfCoinUsed = 0;

    while (drawer[coin] > 0 && changeRequired >= value) {
      changeRequired = round(changeRequired - value);
      drawer[coin] = round(drawer[coin] - value);
      valueOfCoinUsed = round(valueOfCoinUsed + value);
    }

    if (valueOfCoinUsed > 0) {
      change.push([coin, valueOfCoinUsed]);
    }

    return change;
  }, []);

  console.log(changeRequired);

  return changeRequired === 0
    ? { status: 'OPEN', change }
    : { status: 'INSUFFICIENT_FUNDS', change: [] };
};
