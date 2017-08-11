angular.module('tasks.controller', [])
	.controller('tasksController', [ 'Schema', 'UISchema', 'TaskService', 'TaskServiceSubmit', function(Schema, UISchema, TaskService, TaskServiceSubmit) {
		var vm = this;
		vm.taskSchema = Schema;
		vm.taskUISchema = UISchema;
		vm.taskData = {};

		TaskService.get().then(function(response) {
			vm.taskData = response;
		}, function(error) {
			console.error(error);
		}, function(notification) {
			console.log(notification);
		});

		vm.save = function() {
			
			TaskServiceSubmit.update(vm.taskData).$promise.then(function (response) {
				console.log('tasksController', 'save', response);
            }, function (error) {
            	console.error('tasksController', 'save', error);
            });
		}

	} ]);