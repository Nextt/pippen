describe('embedded_tasks', function () {
  
  var tasks = require('../lib/embedded_tasks');
  
  it('should have 2 tasks', function () {
    var number_of_tasks = 0;
    for (var task in tasks) {
      number_of_tasks++;
    }
    expect(number_of_tasks).toEqual(2);
  });

  it('should have an "autotest" task', function () {
    expect(tasks.autotest).toBeDefined();
  });

  it('should have a "default" task', function () {
    expect(tasks.default).toBeDefined();
  });
  
});