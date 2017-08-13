angular.module('tasks.controller', [])
	.controller('TasksController', [ 'Schema', 'UISchema', 'TaskData', function(Schema, UISchema, TaskData) {
		var vm = this;
		vm.taskSchema = Schema;
		vm.taskUISchema = UISchema;
		vm.taskData = TaskData;

	} ]);