angular.module('dialog.process.issuepasswordletter')

.controller("step2IssuepasswordletterContoller", function($log,$scope, issuepasswordletterService){

	$log.debug("init step2IssuepasswordletterContoller");

   $log.debug("-->",issuepasswordletterService.getFormData());
	$scope.rekeningNumberReviewData = issuepasswordletterService.getFormData();
		
		


});