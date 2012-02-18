module.exports = (function () {
	return function () {
		console.log('\nembedded autotest\n');
		for (var i in arguments) {
			console.log(i);
		}
		console.log('\n');
	};
})();