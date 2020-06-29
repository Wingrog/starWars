describe('Je test ma calculatrice', () => {
  it('Test sur une addition', () => {
    const a = 3;
    const b = 2;
    expect(a + b).toEqual(5);
  });
  it('Test sur une multiplication', () => {
    const a = 3;
    const b = 2;
    expect(a * b).toEqual(6);
  });
});
