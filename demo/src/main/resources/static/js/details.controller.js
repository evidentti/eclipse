angular.module('details.controller', [])

.controller('detailsController', function($rootScope, $scope, $state, AppService, $mdToast) {
	console.log('detailsController', $rootScope.created);
	
	var self = this;
	
	self.loadingIssues = false;
	self.issues = null;
	self.issuesMeta = null;
	self.footerText = null;
	
	self.getIssues = function() {
		AppService.getIssues().then(function (response) {
			console.debug('detailsController.getIssues', response);
			self.issues = angular.isArray(response.objects) ? response.objects : [];			
			self.issuesMeta = angular.isObject(response.meta) ? response.meta : null;
        }, function (error) {
        	console.error('detailsController.getIssues', error);
        }, function(notification) {
        	console.debug('detailsController.getIssues: notify', notification);
        	self.loadingIssues = true;
        }).finally(function () {
        	console.debug('detailsController.getIssues: finally', self.issuesMeta);
        	self.loadingIssues = false;
        	if(angular.isArray(self.issues)) {
        		if(self.issues.length) {
        			self.footerText = 'Haettu: ' + self.issues.length;
        			if(angular.isObject(self.issuesMeta)) {
        				self.footerText = self.footerText + ', Yhteensä: ' + self.issuesMeta.total_count;
                	}
        		}
        		else {
        			self.footerText = 'Ei hakutuloksia';
        		}
        	}
        	$rootScope.showToast(self.footerText);
        });
	};
	
	self.openIssue = function(issue) {
		console.log('detailsController.openIssue', issue);
		if(angular.isObject(issue)) {

		}
	};
	
	$scope.$on('$destroy', function() {
		console.log('detailsController', $rootScope.destroyed);
	});
});