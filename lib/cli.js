module.exports = (function () {
	
	var tasks = require('./tasks');

	return {
		
		_tasks: tasks,

		run: function () {
			return this._tasks[arguments[0]]();
		}
		
	};

})();