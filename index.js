var timer = Date.now();
console.log(
	  require( './solutions/' + ( 10000 + +process.argv[2] ).toString().substr(1) )()
	+ ' ( ' + ( Date.now() - timer ) + 'ms )'
);