describe("PocProcess", function () {
	var ptor = protractor.getInstance();
	
    describe ("PocPrcs1", function () {
        it("select drop down", function () {
		ptor.get('http://localhost:3000'); 
		//expect(element);
		
	//click on the menu button
	//element(by.css('.button.button-menu')).click();
		//click on the PeopleFinder button
	//element(by.css('.icon.modules.icon-peoplefinder')).click();
		//fill in a name and click on Search
	//element(by.input('searchText')).sendKeys('Soeradj');
	//element(by.css('.btn.btn-lg.btn-default')).click();
	var text = "123456789";
		element(by.model('inputRkngNum')).element(by.xpath("//option[text()='"+text+"']")).click();
		
	});	
 });
});