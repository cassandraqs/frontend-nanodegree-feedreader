/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
            });
         });

         it('URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).not.toBe(null);
                expect(feed.url.length).not.toBe(0);
            });
         });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('Name is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
            });
         });

         it('Name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).not.toBe(null);
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


        /* test that ensures the menu element is
         * hidden by default.
         */

         /* test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
    describe('The menu', function() {
        afterEach(function() {
            $('.menu-icon-link').click();
        });
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('changes visibility on click', function() {
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });

        it('changes visibility on another click', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
            // restore menu to hidden status
            $('.menu-icon-link').click();
        });

    });


        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('has at least one entry', function() {
            expect(($(".feed").has(".entry")).length).toBeGreaterThan(0);
        });
    });

    /* a new test suite named "New Feed Selection"

        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', function(done) {
        // store original content in originalFeed.
        var originalFeed;
        afterAll(function() {
            // restore original feed
            loadFeed(0);
        })
        beforeEach(function(done) {
            originalFeed = $('.feed').html();
            loadFeed(1, function() {
                done();
            });
        });
        it('content changed', function(done) {
        // compare the new content to the original content after a new feed loaded
            expect($('.feed').html()).not.toEqual(originalFeed);
            done();
        });
    });
}());
