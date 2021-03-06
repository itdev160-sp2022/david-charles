/**
 * David Charles
 * ITDEV 160-901 Assignment 5 JavaScript
 */
(function() {
    /****************************************
     * Package data and constructor objects *
     ****************************************/


    //Package data array (simulated data source, such as JSON or database record set)

    var data = [
        { //object is defined within curly braces
            name: 'emmet', 
            description: 'Emmet is the number one code snippet tool.',
            author: 'emmetio',
            url: 'https://atom.io/packeges/emmet',
            downloads: 1662209,
            stars: 2456,
            price: 10.50,
            selector: 'p1'
        },
        {
            name: 'atom-beautify', 
            description: 'The atom-beautify package will clean up your code.',
            author: 'Galvin001',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 4228040,
            stars: 4541,
            price: 6.75,
            selector: 'p2' 
        },
        {
            name: 'GitLens', 
            description: 'Git Lens enables you to view code authorship withing VS Code.',
            author: 'GitKraken',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 13575151,
            stars: 453,
            price: 0.00,
            selector: 'p3' 
        }
    ];

    //(Atom) Package constrcutor function
    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.author =  data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function() {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function() {
            return this.stars.toLocaleString();
        };
    }

    /*********************
     * Utility functions *
     *********************/

    //Return today's date, formatted
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    //Return DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);
    };

    //Writes the package object's data to the appropriate DOM elements utilizing the package selector property.
    var writePackageInfo = function (package) {
        //Get reference to DOM element
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

        //Write package to the DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };

    //Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //Write package data
    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);

    var GitLens = new Package(data[2]);
    writePackageInfo(GitLens)


}()); //Parenthesis at the end call the IFFE


