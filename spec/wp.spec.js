describe("Wikipedia main page", function() {

    beforeAll(function() {
        browser.url("https://en.wikipedia.org/wiki/Main_Page");
        let wikiLogo = $("a.mw-wiki-logo");
        wikiLogo.waitForDisplayed();
    });

    it("should have a featured article section", function() {
        let featuredArticleSection = $("div#mp-tfa");
        expect(featuredArticleSection.isDisplayed()).toBe(true, "featured article section not displayed");
    });

    describe("should allow searching for Selenium", function() {

        let articleHeading;
        
        beforeAll(function() {
            let searchInput = $("input#searchInput");
            searchInput.setValue("Selenium");
            let searchButton = $("input#searchButton");
            searchButton.click();
            let content = $("div#content");
            content.waitForDisplayed();
            articleHeading = $("h1#firstHeading");
        });

        it("and show the article heading", function() {
            expect(articleHeading.getText()).toContain("Selenium");
        });

        it("and have the heading contain (software)", function() {
            expect(articleHeading.getText()).toContain("(software)");
        });
    
    });

});