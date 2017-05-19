angular.module('tasks.controller', [])
.controller('tasksController',['Schema', 'UISchema', 'TaskService', function(Schema, UISchema, TaskService) {
    var vm = this;
    vm.taskSchema = Schema;
    vm.taskUISchema = UISchema;   
    vm.taskData = {};
    
    TaskService.get().then(function (response) {
    	vm.taskData = response;
    }, function (error) {
    	console.error(error);
    }, function(notification) {
    	console.log(notification);
    }).finally(function () { 
    	
    });
}]);