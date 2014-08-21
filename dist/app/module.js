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
angular.module('dialog.process.issuepasswordletter')

.controller("step2IssuepasswordletterContoller", function($log,$scope, issuepasswordletterService){

	$log.debug("init step2IssuepasswordletterContoller");

   $log.debug("-->",issuepasswordletterService.getFormData());
	$scope.rekeningNumberReviewData = issuepasswordletterService.getFormData();
		
		


});
angular.module('dialog.process.issuepasswordletter')

.service("issuepasswordletterService", function($http, config, $log){
	
	var theFormData = "";

	this.rekeningNumberData = function(){
		return $http.get('/data'); 
	};
	
	this.adreseData = function(){
		return adreseFromStub;
	};
	
	this.personCollectorData = function(){
		return persCollctrFromStub;
	};
	
	this.rolePersonCollectorData = function(){
		return rolePersClctrfromStub;
	};

	this.setFormData = function(data){
    $log.debug("SET FORM DATA");
	theFormData = data;
	};

    this.getFormData = function(){
	return theFormData;
	};


});
