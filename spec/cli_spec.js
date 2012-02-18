describe('cli', function () {
	
	var cli = require('../lib/cli');

	it('should be defined', function () {
		expect(cli).toBeDefined();
	});

	describe('#init', function () {

		it('should call task based on first arg', function () {
			var autotest = 'autotest';
			spyOn(cli._tasks, autotest);
			cli.run(autotest);

			expect(cli._tasks.autotest).toHaveBeenCalled();
		});

	});

});