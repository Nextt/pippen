describe('Tasks', function () {
	
	var tasks = require('../lib/tasks');
	
	it('should have 1 task', function () {
		var number_of_tasks = 0;
		for (var task in tasks) {
			number_of_tasks++;
		}
		expect(number_of_tasks).toEqual(1);
	});

	it('should have an "autotest" task', function () {
		expect(tasks.autotest).toBeDefined();
	});
	
});