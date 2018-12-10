const fetch = require('./fetch-data');

function showMessage(data, lineNum) {
  const minX = Math.min(...data.map(n => n.x));
  const maxX = Math.max(...data.map(n => n.x));
  const minY = Math.min(...data.map(n => n.y));
  const maxY = Math.max(...data.map(n => n.y));
  const numY = maxY - minY + 1;
  const numX = maxX - minX + 1;

  if (numY > 10) return;
  const lines = new Array(numY);

  for (let y = 0; y <= numY; y++) {
    lines[y] = new Array(numX);
    lines[y].fill(' ');
  }

  data.forEach(obj => {
    lines[obj.y - minY][obj.x - minX] = '#';
  });

  console.log(lines.map(line => line.join('')).join('\n'));
  console.log(lineNum);
}

function increment(data) {
  data.forEach(obj => {
    obj.x += obj.vX;
    obj.y += obj.vY;
  });
}

module.exports = async function() {
  const rawData = await fetch(10);

  const data = rawData.map(line => {
    const parsedLine = /<([- ]\d+), ([- ]\d+)>.*?<([- ]\d+), ([- ]\d+)>/.exec(line);
    return {
      x: +parsedLine[1],
      y: +parsedLine[2],
      vX: +parsedLine[3],
      vY: +parsedLine[4],
    };
  });

  for (let i = 0; i < 11000; i++) {
    showMessage(data, i);
    increment(data);
  }
};
