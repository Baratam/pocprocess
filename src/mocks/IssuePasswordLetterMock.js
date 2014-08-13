angular.module('dialog.process.issuepasswordletter.mock', [
  'ngMockE2E'
])

// Stub backend
.run(function($httpBackend) {
	var people = [
		{
			id : 1,
			firstName: 'Willem',
			lastName: "Veelenturf",
			pictureUrl: "images/willemveelenturf.jpg",
			skills : [
				'Scrum',
				'Java',
				'AngularJs',
				'Developer'
			]
		}, 
		{
			id : 2,
			firstName: 'Bart',
			lastName: 'Altena',
			pictureUrl: "images/bartaltena.jpg",
			skills : [
				'Front-end',
				'UX',
				'Sharepoint',
				'AngularJs'
			]
		}, 
		{
			id : 3,
			firstName: 'Irene de',
			lastName: 'Kok',
			pictureUrl: "images/irenedekok.jpg",
			skills : [
				'Fixit',
				'Scrum Master',
				'Jira'
			]
		}, 
		{
			id : 4,
			firstName: 'Dagmar van',
			lastName: 'Pelt',
			description : "Principal Consultant",
			pictureUrl: "images/dagmarvanpelt.jpg",
			phone: "+31653368475",
			skills : [
				'People Manager',
				'Fix it',
				'Coaching'
			]
		}
	];

	// returns the current list of phones
	$httpBackend.whenGET(/\/people\//).respond(function(method, url, data) {
		console.log(method, url, data);
		
		var search = url.match(/search=([^&]*)/)[1];
		console.log("Search: ", search);

		var response = [];
		for(var i=0; people.length>i; i++){
			var str = (people[i].firstName + people[i].lastName + people[i].skills.join()).toUpperCase();
			var patt = new RegExp(search.toUpperCase());
			console.log(str, patt, patt.test(str));

			if(patt.test(str)){
				response.push(people[i]);
			}
		}
		return [200, response, {}]; 
	});

	// returns the current list of phones
	$httpBackend.whenGET(/\/people\/{id}/).respond(function(method, url, data) {
		console.log(method, url, data);
		
		var contactId = url.match(/people\/*/)[1];
		console.log("contactId: ", contactId);

		var response = [];
		for(var i=0; people.length>i; i++){
			var str = (people[i].firstName + people[i].lastName + people[i].skills.join()).toUpperCase();
			var patt = new RegExp(search.toUpperCase());
			console.log(str, patt, patt.test(str));

			if(patt.test(str)){
				response.push(people[i]);
			}
		}
		return [200, response, {}]; 
	});

	$httpBackend.whenGET(/views/).passThrough();

})

.constant("config", {
	peoplefinder : {
		url : "/people"
	}
});