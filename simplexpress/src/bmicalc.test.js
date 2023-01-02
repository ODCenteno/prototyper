describe('Test Suite for BMI Calculator', () => {
  test('should be equal to 24.98 for BMI', () => {
    const weight = 68;
    const height = 1.65;

    const bmi = weight / (height)**2;
    const bimFixed = Number(bmi.toFixed(2));
    // ToBe y toEqual son equivalentes para números.
    expect(bimFixed).toBe(24.98);
  });
})
