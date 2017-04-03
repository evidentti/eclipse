angular.module('main.controller', [])

.controller('mainController', function($rootScope, $scope, $state, AppService) {
	console.log('mainController', $rootScope.created);
	
	var self = this;
	
	self.loadingIssues = false;
	self.issues = null;
	self.issuesMeta = null;
	
	self.footerText = null;
	self.limit = 50;
	
	self.getIssues = function(params) {
		if(angular.isObject(params)) {
			params.limit = self.limit;
		}
		else {
			params = {'limit': self.limit};
		}
		AppService.getIssues(params).then(function (response) {
			console.debug('mainController.getIssues', response);
			var issues = angular.isArray(response.objects) ? response.objects : [];
			if(!angular.isArray(self.issues)) {
				self.issues = [];
			}
			angular.forEach(issues, function(issue) {
			  this.push(issue);
			}, self.issues);
			
			self.issuesMeta = angular.isObject(response.meta) ? response.meta : null;
        }, function (error) {
        	console.error('mainController.getIssues', error);
        }, function(notification) {
        	console.debug('mainController.getIssues: notify', notification);
        	self.loadingIssues = true;
        }).finally(function () {
        	console.debug('mainController.getIssues: finally');
        	self.loadingIssues = false;
        	if(angular.isArray(self.issues)) {
        		if(self.issues.length) {
        			self.footerText = 'Haettu: ' + self.issues.length;
        			if(angular.isObject(self.issuesMeta)) {
        				self.footerText = self.footerText + ', Kokonaismäärä: ' + self.issuesMeta.total_count;
                	}
        		}
        		else {
        			self.footerText = 'Ei hakutuloksia';
        		}
        	}
        });
	};
	
	self.openIssue = function(issue) {
		console.log('mainController.openIssue', issue);
		if(angular.isObject(issue)) {

		}
	};
	
	self.getIssuesByCategory = function(category) {
		console.log('mainController.getIssuesByCategory', category);
		if(angular.isObject(category)) {
			self.issues = null;
//			self.getIssues({'category': category.id, 'order_by': '-last_modified_time'});
			self.getIssues({'category': category.id, 'limit': self.limit});
		}
	};
	
	self.getNextIssues = function(category, meta) {
		console.log('mainController.getNextIssues', arguments);
		var params = {'offset': 0};
		if(angular.isArray(self.issues)) {
			params.offset = self.issues.length;
		}
		self.getIssues(params);
	};
	
	$scope.$on('$destroy', function() {
		console.log('mainController', $rootScope.destroyed);
	});
});