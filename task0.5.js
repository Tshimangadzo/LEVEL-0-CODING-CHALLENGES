function areaOfTriangle(sideA, sideB, sideC) {
  var semiPerimeter = (sideA + sideB + sideC) / 2;
  var area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - sideA) *
      (semiPerimeter - sideB) *
      (semiPerimeter - sideC)
  ); // Heron’s formula.
  return area;
}
