function areaOfTriangle(sideA, sideB, sideC) {
  let semiPerimeter = (sideA + sideB + sideC) / 2;
  let area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - sideA) *
      (semiPerimeter - sideB) *
      (semiPerimeter - sideC)
  ); // Heron’s formula.
  return area;
}
