function powerLevel(x, y, serial) {
  const rackID = x + 10;
  power = rackID * y;
  power += serial;
  power *= rackID;
  power = +/(\d)\d\d$/.exec(power)[1];
  power -= 5;

  return power;
}

module.exports = async function() {
  const gridSize = 300;
  const serial = 3613;
  const grid = [];
  for (let y = 0; y < gridSize; y++) {
    grid[y] = [];
    for (let x = 0; x < gridSize; x++) {
      grid[y][x] = powerLevel(x, y, serial);
    }
  }

  function maxGridOfSize(grid, windowSize) {
    let max = -Infinity;
    let maxInfo = null;
    const colGroupTotals = [];

    for (let y = 0; y < gridSize; y++) {
      colGroupTotals[y] = [];
      for (let x = 0; x < gridSize; x++) {
        colGroupTotals[y][x] = grid[y][x];
        if (x) colGroupTotals[y][x] += colGroupTotals[y][x - 1];
        if (x >= windowSize) colGroupTotals[y][x] -= grid[y][x - windowSize];
      }
    }

    for (let x = 0; x < gridSize; x++) {
      let total = 0;
      for (let y = 0; y < gridSize; y++) {
        total += colGroupTotals[y][x];
        if (y >= windowSize) total -= colGroupTotals[y - windowSize][x];
        if (total > max) {
          max = total;
          maxInfo = { max, x: x - windowSize + 1, y: y - windowSize + 1, windowSize };
        }
      }
    }

    return maxInfo;
  }

  const max3 = maxGridOfSize(grid, 3);
  let max = -Infinity;
  let maxAll = null;
  for (let i = 1; i <= 300; i++) {
    const maxWindowInfo = maxGridOfSize(grid, i);
    if (maxWindowInfo.max > max) {
      max = maxWindowInfo.max;
      maxAll = maxWindowInfo;
    }
  }

  return [`${max3.x},${max3.y}`, `${maxAll.x},${maxAll.y},${maxAll.windowSize}`];
};
