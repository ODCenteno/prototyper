module.exports = function calculatingBmi(weight, height) {
  const bmi = weight / (height / 100)**2;
  const bmiFixed = Number(bmi.toFixed(2));
  return bmiFixed;
}
