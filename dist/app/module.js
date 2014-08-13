angular.module('dialog.process.issuepasswordletter', [
	'ngRoute'
])

//routing
.config(function($routeProvider) {
		$routeProvider
        .when('/issuepasswordletter/step1', {
            templateUrl: 'views/issuepasswordletter/step1.html',
            controller: 'step1IssuepasswordletterContoller'
        })
        .when('/issuepasswordletter/step2', {
            templateUrl: 'views/issuepasswordletter/step2.html',
            controller: 'step2IssuepasswordletterContoller'
        });
	}
);
angular.module('dialog.process.issuepasswordletter')

.controller("step1IssuepasswordletterContoller", function($log, $scope, config, peopleFinderService){

	$log.debug("init step1IssuepasswordletterContoller");

	

});
angular.module('dialog.process.issuepasswordletter')

.controller("step2IssuepasswordletterContoller", function($log){

	$log.debug("init step2IssuepasswordletterContoller");

});
angular.module('dialog.process.issuepasswordletter')

.service("issuepasswordletterService", function($http, config){

    
});
