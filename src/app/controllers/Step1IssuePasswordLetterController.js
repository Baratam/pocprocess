angular.module('dialog.process.issuepasswordletter')

.controller("step1IssuepasswordletterContoller", function($log, $scope, config, issuepasswordletterService, $location){

	$log.debug("init step1IssuepasswordletterContoller");


	
	$scope.errorRkngNumber=false;

	issuepasswordletterService.rekeningNumberData().then(function(response){
		$scope.rekeningNumberData = response.data;
		$log.debug("Test");
	});
	
	
	
	$scope.submitDetails = function(){
		
		$scope.submitted = true;
		if ($scope.userForm.$valid) {
			var step1FormData = $scope.form;
				
				issuepasswordletterService.setFormData(step1FormData);
		$location.path('/issuepasswordletter/step2');

			}
		
	
	};
	
	$scope.onUpdateRekening = function(){
		
		var step1FormData = $scope.form.selectRknm.number;
	
		
		
		
	};
	
	
	/*$scope.adreseFromStub = [];
	$scope.persCollctrFromStub = [];
	$scope.rolePersClctrfromStub = [];
	
	
	
	$scope.retrieveDataFromService = function(){
		
		(function(){
			
			$log.debug("In service call controller");
			
			issuepasswordletterService.callFromService().then(
			   function(){
				   $log.debug("can rtrv data from service: ");
				   alert("999");
					$scope.rkngNumbFromStub = issuepasswordletterService.rekeningNumberData();
					
					$scope.adreseFromStub = issuepasswordletterService.adreseData();
					$scope.persCollctrFromStub = issuepasswordletterService.personCollectorData();
					$scope.rolePersClctrfromStub = issuepasswordletterService.rolePersonCollectorData();
			   },
			
			   function(){
				   $log.debug("can't retrieve data from service: ");
			   }
			
			);//end of then 
			
		})();//end of function
	};//end of method retrieveDataFromService
	*/

});