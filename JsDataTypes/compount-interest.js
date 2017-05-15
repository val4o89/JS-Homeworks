function calculate(numbers) {
    let principalSum = Number(numbers[0]);
    let interestRate = Number(numbers[1]) / 100; //percent
    let compPeriod = Number(numbers[2]); //months
    let timespan = Number(numbers[3]); //years

    let compoundingFrequency = 12 / compPeriod;

    let result = principalSum * (Math.pow(1 + (interestRate / compoundingFrequency), (compoundingFrequency * timespan)));

    console.log(result.toFixed(2));
}

calculate([1500, 4.3, 3, 6]);