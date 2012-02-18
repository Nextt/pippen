var fs = require('fs');

describe('task_loader', function () {

  var task_loader = require('../lib/task_loader');

  var pippenfile_path = process.cwd() + '/pippenfile';

  var createPippenfile = function () {
    fs.writeFileSync(
      pippenfile_path,
      '({ project_task: function () {} })'
    );
  };

  var deletePippenfile = function () {
    fs.unlinkSync(pippenfile_path)
  };

  describe('#load', function () {
    
    var tasks;

    describe('project pippenfile exists', function () {

      beforeEach(function () {
        createPippenfile();
        spyOn(task_loader, '_embedded_tasks').andReturn( { embedded_task: function () {} } );
        tasks = task_loader.load();
      });

      afterEach(function () {
        deletePippenfile();
      })

      it('should load project tasks from "./pippenfile"', function () {
        expect(tasks.project_task).toBeDefined();
      });

      it('should load embedded tasks', function () {
        expect(tasks.embedded_task).toBeDefined();
      });

      it('should load embedded and project tasks', function () {
        expect(tasks.embedded_task).toBeDefined();
        expect(tasks.project_task).toBeDefined();
      });
      
    });

    describe('project pippenfile does not exist', function () {

      beforeEach(function () {
        spyOn(task_loader, '_embedded_tasks').andReturn( { embedded_task: function () {} } );
        tasks = task_loader.load();
      });
      
      it('should load only embedded tasks', function () {
        expect(tasks.embedded_task).toBeDefined();
        expect(tasks.project_task).toBeUndefined();
      });
    

    });
  });

});