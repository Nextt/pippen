module.exports = (function () {
  
  var task_loader = require('./task_loader');

  return {

    run: function () {
      var tasks = this._task_loader.load(),
          task_name = arguments[0],
          args = Array.prototype.slice.call(arguments, 1);
      return tasks[task_name].apply(this, args);
    },
    
    _task_loader: task_loader
    
  };

})();