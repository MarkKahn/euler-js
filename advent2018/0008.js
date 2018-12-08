const fetch = require('./fetch-data');

const sum = (a, b) => a + b;

function buildTree(data, pointer = { ix: 0 }) {
  const tree = { children: [], metadata: [] };
  const numChildren = data[pointer.ix++];
  const numMetadataNodes = data[pointer.ix++];

  for (let i = 0; i < numChildren; i++) {
    tree.children.push(buildTree(data, pointer));
  }
  for (let i = 0; i < numMetadataNodes; i++) {
    tree.metadata.push(data[pointer.ix++]);
  }

  return tree;
}

function totalMetadata(tree) {
  return tree.metadata.reduce(sum, 0) + tree.children.map(child => totalMetadata(child)).reduce(sum, 0);
}

function totalRootNode(tree) {
  if (!tree.children.length) {
    return tree.metadata.reduce(sum, 0);
  }
  return tree.metadata
    .map(ix => {
      if (!tree.children[ix - 1]) return 0;
      return totalRootNode(tree.children[ix - 1]);
    })
    .reduce(sum, 0);
}

module.exports = async function() {
  const rawData = await fetch(8);

  const data = rawData[0].split(' ').map(n => +n);
  const tree = buildTree(data);

  return [totalMetadata(tree), totalRootNode(tree)];
};
