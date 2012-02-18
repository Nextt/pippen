module.exports = (function () {
	return {
		invoke: function (tasks) {
			var type = typeof tasks;
			if (type === 'function') {
				tasks();
			} else if (type === 'object' && tasks.constructor === Array) {
				var pipeline_length = tasks.length;
				for (var i = 0; i < pipeline_length; i++) {
					tasks[i]();
				}
			}
		}
	};
})();