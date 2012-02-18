describe('cli', function () {
	
	var cli = require('../lib/cli');

	it('should be defined', function () {
		expect(cli).toBeDefined();
	});

	describe('#run', function () {

		var tasks,
			param1 = 'p1',
			param2 = 'p2';

		beforeEach(function () {
			tasks = { 'task': function () {} };
			
			spyOn(cli._task_loader, 'load').andReturn(tasks);
			spyOn(tasks, 'task');
			cli.run('task', 'p1', 'p2');
		});

		it('should load all tasks', function () {
			expect(cli._task_loader.load).toHaveBeenCalled();
		});

		it('should invoke desired task', function () {
			expect(tasks.task).toHaveBeenCalled();
		});

		it('should send parameters to invoked task', function () {
			expect(tasks.task).toHaveBeenCalledWith(param1, param2);
		});

	});

});