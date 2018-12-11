const fetch = require("./fetch-data");

module.exports = async function() {
  const rawData = await fetch(parseInt(/(\d+)\.js/.exec(__filename)[1]));

  const data = rawData.map(n => {
    const parts = /Step (\w) .* step (\w)/.exec(n);
    return [parts[1], parts[2]];
  });
  let dependencies = {};
  for (let i = 0; i < 26; i++) {
    dependencies[String.fromCharCode(65 + i)] = [];
  }

  data.forEach(dependency => {
    dependencies[dependency[1]].push(dependency[0]);
  });

  const storedDependencies = { ...dependencies };

  function removeLetterDependency(letter, dependencies) {
    for (const dependencyArray of Object.values(dependencies)) {
      const dependencyIndex = dependencyArray.indexOf(letter);

      if (dependencyIndex >= 0) {
        dependencyArray.splice(dependencyIndex, 1);
      }
    }
  }

  // PART 1

  function part1() {
    const order = [];
    let foundDependency = true;
    while (foundDependency) {
      foundDependency = false;
      const foundThisLoop = [];

      for (const [letter, dependsOn] of Object.entries(dependencies)) {
        if (dependsOn.length === 0) {
          foundDependency = true;
          foundThisLoop.push(letter);
          delete dependencies[letter];
          break;
        }
      }
      foundThisLoop.forEach(letter => {
        removeLetterDependency(letter, dependencies);
      });
      order.push(...foundThisLoop);
    }
    return [order.join("")];
  }

  // PART 2
  function part2() {
    dependencies = { ...storedDependencies };
    let seconds = 0;
    const workers = [[, 0], [, 0], [, 0], [, 0], [, 0]];

    function addWorker(letter) {
      const time = letter.charCodeAt(0) - 4;
      const firstWorker = workers.findIndex(w => w[1] === 0);
      if (firstWorker < 0) return;
      delete dependencies[letter];
      workers[firstWorker] = [letter, time];
    }

    function tick() {
      seconds++;
      workers.forEach(worker => {
        const [letter, timeRemaining] = worker;
        if (timeRemaining > 0) {
          worker[1]--;
        }
        if (timeRemaining === 1) {
          removeLetterDependency(letter, dependencies);
        }
      });
    }

    while (Object.values(dependencies).length) {
      for (const [letter, dependsOn] of Object.entries(dependencies)) {
        if (dependsOn.length === 0) {
          addWorker(letter);
        }
      }

      tick();
    }

    return seconds + workers.map(w => w[1]).reduce((a, b) => a + b, 0);
  }

  return part2();
};
