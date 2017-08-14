angular.module('tasks.controller', [])
	.controller('tasksController', [ 'Schema', 'UISchema', 'TaskService', function(Schema, UISchema, TaskService) {
		console.log('tasksController', 'construct');
		var vm = this;
		vm.taskSchema = Schema;
		vm.taskUISchema = UISchema;
		vm.taskData = {};
		
		vm.load = function() {
			TaskService.get().then(function(response) {
				vm.taskData = response;
			}, function(error) {
				console.error(error);
			});
		}
		
		vm.save = function() {
			console.log('SAVE');
		}
		
		vm.load();

	} ]);