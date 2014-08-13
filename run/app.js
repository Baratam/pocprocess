angular.module('dialog.process.issuepasswordletter.app', [
  'dialog.process.issuepasswordletter',
  'dialog.process.issuepasswordletter.mock'
])

//routing
.config(function($routeProvider) {
	$routeProvider
	.otherwise({
    	redirectTo: '/issuepasswordletter/step1'
  	});
});