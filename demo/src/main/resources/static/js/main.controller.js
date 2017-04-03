angular.module('main.controller', [])

.controller('mainController', function($rootScope, $scope, $state, AppService) {
	console.log('mainController', $rootScope.created);
	
	var self = this;
	
	self.loadingIssues = false;
	self.issues = null;
	self.issuesMeta = null;
	self.footerText = null;
	
	self.getIssues = function() {
		AppService.getIssues().then(function (response) {
			console.debug('mainController.getIssues', response);
			self.issues = angular.isArray(response.objects) ? response.objects : [];			
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
			self.getIssues();
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