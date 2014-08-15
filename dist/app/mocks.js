angular.module('dialog.process.issuepasswordletter.mock', [
  'ngMockE2E'
])

// Stub backend
.run(function($log, $httpBackend) {
	

	// returns the current list of phones
	$httpBackend.whenGET(/\/accounts/).respond(function(method, url, data) {
		var accounts = [
	 	   {
	 		   number: "123456789",
	 	   },
	 	   {
	 		   number: "987654321",
	 	   },
	 	   {
	 		   number: "0192837465",
	 	   }
	 	];

		$log.debug("Receive from mock");
		return [200, accounts, {}]; 
	});
	
	// returns the current list of phones
	$httpBackend.whenGET(/\/data/).respond(function(method, url, data) {
		var data1 = {
			accouts : [
		 	   {
		 		   number: "123456789",
		 		   id: "000"
		 	   },
		 	   {
		 		   number: "987654321",
		 		  id: "333"
		 			   
		 	   },
		 	   {
		 		   number: "0192837465",
		 		  id: "999"
		 	   }
		 	],
		 	adresses : [
				{
					 name: "Vries"
				 },
				 {
					 name: "Venus Williams"
				 }
		 	],
		 	persClctr : [
						{
							 name: "Vries"
						 },
						 {
							 name: "Venus Williams"
						 }
						
				 	],
		   rolePersClctr : [
								 {
									 name: "Lander Veldan"
								 }
						 	]
		};

		$log.debug("Receive from mock");
		return [200, data1, {}]; 
	});


	$httpBackend.whenGET(/views/).passThrough();

})

.constant("config", {
	peoplefinder : {
		url : "/people"
	}
});