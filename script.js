getCalculateButton("triangleButton").addEventListener("click", function () {
  const base = getValueOfInput("baseOfTriangle");
  const height = getValueOfInput("heightOfTriangle");
  const area = triangleArea(base, height);
  getResult("triangleArea").innerText = area;
});
getCalculateButton("rectangleButton").addEventListener("click", function () {
  const base = getValueOfInput("widthOfRectangle");
  const height = getValueOfInput("lengthOfRectangle");
  const area = rectangleArea(base, height);
  getResult("rectangleArea").innerText = area;
});
getCalculateButton("parallelogramButton").addEventListener("click", function () {
  const base = getValueOfInput("baseOfParallelogram");
  const height = getValueOfInput("heighOfParallelogram");
  const area = parallelogramArea(base, height);
  getResult("parallelogramArea").innerText = area;
});
getCalculateButton("rhombusButton").addEventListener("click", function () {
  const base = getValueOfInput("diagonalOfRhombus1");
  const height = getValueOfInput("diagonalOfRhombus2");
  const area = rhombusArea(base, height);
  getResult("rhombusArea").innerText = area;
});
getCalculateButton("pentagonButton").addEventListener("click", function () {
  const base = getValueOfInput("pentagonPerimeter");
  const height = getValueOfInput("pentagonApothem");
  const area = pentagonArea(base, height);
  getResult("pentagonArea").innerText = area;
});
getCalculateButton("ellipseButton").addEventListener("click", function () {
  const base = getValueOfInput("EllipseLargeAxis");
  const height = getValueOfInput("EllipseSmallAxis");
  const area = ellipseArea(base, height);
  getResult("ellipseArea").innerText = area;
});

function getCalculateButton(buttonId) {
  const calculateButton = document.getElementById(buttonId);
  return calculateButton;
}

function getResult(p) {
  const result = document.getElementById(p);
  return result;
}

function getValueOfInput(input) {
  let inputValue = parseFloat(document.getElementById(input).value);
  return inputValue;
}

function triangleArea(input1, input2 ) {
  let area = 0.5 * input1 * input2;
  return area;
}

function rectangleArea(width, length) {
  let area = width * length;
  return area;
}

function parallelogramArea(base, height) {
  let area = base * height;
  return area;
}

function rhombusArea(diagonal1, diagonal2) {
  let area = 0.5 * diagonal1 * diagonal2;
  return area;
}

function pentagonArea(perimeter, apothem) {
  let area = 0.5 * perimeter * apothem;
  return area;
}

function ellipseArea(axis1, axis2) {
  let area = Math.PI * axis1 * axis2;
  return area;
}
