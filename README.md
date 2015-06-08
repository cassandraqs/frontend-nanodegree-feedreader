# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# To see tests and results:

Open index.html to see tests' results in the lower bottom of the page. All tests were in ./jasmine/spec/feedreader.js and you can explore the application's HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) to see how it works.

# Tests included here:

* a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* a new test suite named "The menu".
  * a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to  determine how we're performing the hiding/showing of the menu element.
  * a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. 
* a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. 
