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
