const fetch = require("./fetch-data");

module.exports = async function() {
  const rawData = await fetch(4);
  const data = rawData.sort();
  let guardID = 0;
  let minuteFellAsleep = 0;
  const guardData = new Map();

  function wakeGuard(minuteAwoke) {
    if (!guardData.has(guardID)) {
      guardData.set(guardID, Array(60).fill(0));
    }
    const sleepMinutes = guardData.get(guardID);
    for (let min = minuteFellAsleep; min < minuteAwoke; min++) {
      sleepMinutes[min]++;
    }
  }

  data.forEach(action => {
    let tmp = null;
    if ((tmp = /Guard #(\d+)/.exec(action))) {
      guardID = +tmp[1];
    } else if ((tmp = /:(\d+)\] falls asleep/.exec(action))) {
      minuteFellAsleep = +tmp[1];
    } else if ((tmp = /:(\d+)\] wakes up/.exec(action))) {
      wakeGuard(+tmp[1]);
    } else {
      throw new Error("UNHANDLED ACTION");
    }
  });

  let maxSleepTime = 0;
  let sleepyGuardID = 0;
  for (let [guardID, sleepMinutes] of guardData) {
    const sleepingTime = sleepMinutes.reduce((a, b) => a + b, 0);
    if (sleepingTime > maxSleepTime) {
      maxSleepTime = sleepingTime;
      sleepyGuardID = guardID;
    }
  }

  const sleepyGuardMinutes = guardData.get(sleepyGuardID);
  const longestSleepyTime = Math.max(...sleepyGuardMinutes);
  const mostSleepyMinute = sleepyGuardMinutes.indexOf(longestSleepyTime);
  console.log(data.join("\n"));
  return [sleepyGuardID * mostSleepyMinute];
};
