const fetch = require("./fetch-data");

function distance(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

module.exports = async function() {
  const rawData = await fetch(6);

  const data = rawData.map(n => n);
  const points = data.map(line => line.split(", ").map(n => +n));
  const xPoints = points.map(p => p[0]);
  const yPoints = points.map(p => p[1]);
  const [minX, maxX] = [Math.min(...xPoints), Math.max(...xPoints)];
  const [minY, maxY] = [Math.min(...yPoints), Math.max(...yPoints)];

  // PART 1
  const areaOfPoints = new Array(points.length).fill(0);
  const border = 100;

  for (let x = minX - border; x <= maxX + border; x++) {
    for (let y = minY - border; y <= maxY + border; y++) {
      const pointDistances = points
        .map((p, ix) => ({ ix, d: distance(p, [x, y]) }))
        .sort((a, b) => a.d - b.d);
      const closestPoint = pointDistances[0];
      if (closestPoint.d === pointDistances[1].d) {
        continue;
      }

      areaOfPoints[closestPoint.ix]++;
    }
  }
  const largestNonInfiniteArea = Math.max(...areaOfPoints.map(p => (p > 5400 ? 0 : p)));

  // PART 2
  let passingPoints = 0;
  for (let x = minX - border; x <= maxX + border; x++) {
    for (let y = minY - border; y <= maxY + border; y++) {
      const totalDistanceToPoints = points
        .map((p, ix) => distance(p, [x, y]))
        .reduce((a, b) => a + b, 0);
      if (totalDistanceToPoints < 10000) passingPoints++;
    }
  }

  return [largestNonInfiniteArea, passingPoints];
};
