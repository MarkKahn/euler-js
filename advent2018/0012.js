const fetch = require('./fetch-data');

module.exports = async function() {
  const rawData = await fetch(parseInt(/(\d+)\.js/.exec(__filename)[1]));

  const data = rawData.map(n => n);
  const numGenerations = 1000;
  const extraDots = numGenerations + 10;
  const extraData = new Array(extraDots).fill('.').join('');
  let state = extraData + /initial state: (.*)/.exec(data[0])[1] + extraData;
  let transforms = data
    .slice(2)
    .map(line => line.split(' => '))
    .filter(([input, output]) => output === '#');

  function runGeneration() {
    let newState = new Array(state.length).fill(' ');
    transforms.forEach(([input, output]) => {
      let ix = 0;
      while ((ix = state.indexOf(input, ix)) >= 0) {
        newState[ix + 2] = output;
        ix++;
      }
    });

    newState.forEach((val, ix) => {
      if (val === ' ') newState[ix] = '.';
    });

    state = newState.join('');
    // console.log(state);
  }

  // PART 1
  let total = 0;
  for (let i = 0; i < 20; i++) {
    runGeneration();

    total = 0;
    let strLen = state.length;
    for (let i = 0; i <= strLen; i++) {
      if (state[i] === '#') total += i - extraDots;
    }
  }
  const part1total = total;

  // PART 2 -- the system stabilizes at some point so just run 1,000 cycles to figure out the gain per generation
  for (let i = 0; i < 980; i++) runGeneration();
  total = 0;
  let strLen = state.length;
  for (let i = 0; i <= strLen; i++) {
    if (state[i] === '#') total += i - extraDots;
  }

  const part2total = (total / 1000) * 50000000000;

  return [part1total, part2total];
};
