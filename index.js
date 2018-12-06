const timer = Date.now();
const [, , arg1, arg2] = process.argv;

const [project, solution] = arg2 ? [`${arg1}/`, arg2] : ["solutions/", arg1];

Promise.resolve(require(`./${project}` + (10000 + +solution).toString().substr(1))()).then(
  response => console.log(response + " ( " + (Date.now() - timer) + "ms )")
);
