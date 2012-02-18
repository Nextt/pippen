describe('task_invoker', function () {

  var task_invoker = require('../lib/task_invoker');
  
  it('should invoke simple task', function () {
    var task = createSpy();
    task_invoker.invoke(task);
    expect(task).toHaveBeenCalled();
  });

  it('should invoke all pipeline tasks', function () {
    var task1 = createSpy(),
      task2 = createSpy(),
      task3 = createSpy(),
      pipeline = [ task1, task2, task3 ];

    task_invoker.invoke(pipeline);

    expect(task1).toHaveBeenCalled();
    expect(task2).toHaveBeenCalled();
    expect(task3).toHaveBeenCalled();
  });
});