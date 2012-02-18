module.exports = (function () {

	var vm = require('vm'),
		fs = require('fs'),
		pippenfile_path = process.cwd() + '/pippenfile',
		embedded_tasks = require('./embedded_tasks');

	return {

		load: function () {
			var task,
				all_tasks = {};
				embedded_tasks = this._embedded_tasks();
				project_tasks = this._project_tasks();
			
			for ( task in embedded_tasks ) {
				all_tasks[task] = embedded_tasks[task];
			}
			for ( task in project_tasks ) {
				all_tasks[task] = project_tasks[task];	
			}
			return all_tasks;
		},

		_embedded_tasks: function () {
			return embedded_tasks;
		},

		_project_tasks: function () {
			try {
				var project_pippenfile = fs.readFileSync(pippenfile_path);
				var project_tasks = vm.runInThisContext(project_pippenfile);
				return project_tasks;
			} catch (e) {
				return {};
			}
		}
	};

})();