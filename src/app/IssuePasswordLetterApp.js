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