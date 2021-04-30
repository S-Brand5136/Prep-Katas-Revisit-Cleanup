const calculateChange = function(total, cash) {
  const changeBack = {};

  const moneyMap = {
    twentyDollas: 2000,
    tenDollars: 1000,
    fiveDollars: 500,
    twoDollars: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };

  let change = cash - total;

  for (const money in moneyMap) {
    while (change - moneyMap[money] >= 0) {
      if (!changeBack[money]) {
        changeBack[money] = 1;
      } else {
        changeBack[money] += 1;
      }
      change -= moneyMap[money];
    }
  }

  return changeBack;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
