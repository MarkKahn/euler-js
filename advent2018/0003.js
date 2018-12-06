const fetch = require("./fetch-data");

function parseLine(line) {
  const [, id, l, t, w, h] = /\#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/.exec(line).map(n => +n);
  return { id, l, t, w, h };
}

module.exports = async function() {
  const rawData = await fetch(3);

  const data = rawData.map(parseLine);
  const grid = [];

  // Part 1
  data.forEach(input => {
    for (let l = input.l, r = input.l + input.w; l < r; l++) {
      for (let t = input.t, b = input.t + input.h; t < b; t++) {
        if (!grid[t]) grid[t] = [];
        if (!grid[t][l]) grid[t][l] = 0;
        grid[t][l]++;
      }
    }
  });

  let overlapping = 0;
  grid.forEach(row =>
    row.forEach(col => {
      if (col && col > 1) overlapping++;
    })
  );

  // Part 2
  let goodID = null;
  data.forEach(input => {
    for (let l = input.l, r = input.l + input.w; l < r; l++) {
      for (let t = input.t, b = input.t + input.h; t < b; t++) {
        if (grid[t][l] !== 1) return;
      }
    }

    goodID = input.id;
  });

  return [overlapping, goodID];
};
