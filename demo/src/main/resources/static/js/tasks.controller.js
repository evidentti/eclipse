angular.module('tasks.controller', [])
.controller('tasksController',['Schema','UISchema','Task', 'TaskService', function(Schema,UISchema,Task, TaskService) {
    var vm = this;
    vm.taskSchema = Schema;
    vm.taskUISchema = UISchema;
    vm.taskData=Task;
    
//    TaskService.get();
    
    
    TaskService.get().then(function (response) {
    	vm.taskData = response;
    }, function (error) {
    	console.error(error);
    }, function(notification) {
    }).finally(function () { 	
    });
}]);