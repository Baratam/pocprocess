describe("PocProcess", function () {
	var ptor = protractor.getInstance();
	
    describe ("PocPrcs1", function () {
        it("select drop down", function () {
		ptor.get('http://localhost:3000/#/issuepasswordletter/'); 
		//expect(element);
		
	//click on the menu button
	//element(by.css('.button.button-menu')).click();
		//click on the PeopleFinder button
	//element(by.css('.icon.modules.icon-peoplefinder')).click();
		//fill in a name and click on Search
	//element(by.input('searchText')).sendKeys('Soeradj');
	//element(by.css('.btn.btn-lg.btn-default')).click();
	var rknnumbertext = "123456789";
	var adresetext = "Vries";
	var perscltrtext = "Aresh";
	var rlsperscltrtext = "Lander Veldan";
    var datetext = "07/12/2013";
	var buttontext = "Volgende";

	element(by.model('form.selectRknm')).element(by.xpath("//option[text()='"+rknnumbertext+"']")).click();
	element(by.model('form.selectAdrese')).element(by.xpath("//option[text()='"+adresetext+"']")).click();
	element(by.model('form.selectPersClctr')).element(by.xpath("//option[text()='"+perscltrtext+"']")).click();
	element(by.model('form.selectRolePersClctr')).element(by.xpath("//option[text()='"+rlsperscltrtext+"']")).click();
	element(by.model('form.selectDspPswdLetter')).sendKeys(datetext);

    element(by.partialButtonText('Volgende')).click();
	 
	 
	 
	 

	});	

	waits(5000);
 });
});