"use strict";
// Parks and street of a town.
// parks : 3
// streets: 4
// all parks and streets have name and build year 
// generate reports at the end of the year 
// 1. tree density of each park =number of trees/ park area
// 2. average age of each town's park = sum of all ages / number of the parks
// 3. name of park which has more than 1000 trees
// 4. total and average length of the town's street
// 5. size and classification of the all streets: tiny\small\normal\big\huge. default is normal


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function Element(name, buildYear) {
    _classCallCheck(this, Element);

    this.name = name;
    this.buildYear = buildYear;
};

var Park = function (_Element) {
    _inherits(Park, _Element);

    function Park(name, buildYear, area, numberOfTree) {
        _classCallCheck(this, Park);

        var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

        _this.area = area;
        _this.numberOfTree = numberOfTree;
        return _this;
    }

    _createClass(Park, [{
        key: 'treeDensity',
        value: function treeDensity() {
            var density = this.numberOfTree / this.area;
            console.log(this.name + ' has a tree density of ' + density + ' tress per square km.');
        }

        // calcAge(){
        //     const age = new Date().getFullYear() - this.buildYear;
        // }

        // avgAge() {
        //     const ages = 
        // }

    }]);

    return Park;
}(Element);

var Street = function (_Element2) {
    _inherits(Street, _Element2);

    function Street(name, buildYear, length, size) {
        _classCallCheck(this, Street);

        var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

        _this2.length = length;
        _this2.size = size;
        return _this2;
    }

    _createClass(Street, [{
        key: 'classifyStreet',
        value: function classifyStreet() {
            var classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');
            console.log(this.name + ', build in ' + this.buildYear + ', is a ' + classification.get(this.size) + ' Street');
        }
    }]);

    return Street;
}(Element);

var allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('Yellow park', 1894, 0.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];
var allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th street', 2015, 0.8, 3), new Street('Sunset Boulvard', 1982, 2.5, 5)];

function calc(arr) {
    var sum = arr.reduce(function (prev, curr, index) {
        return prev + curr;
    }, 0);
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log("----PARKS REPORT----");
    var sum = [];
    // Density
    p.forEach(function (el) {
        return el.treeDensity();
    });
    // 2. average age of each town's park = sum of all ages / number of the parks
    var ages = p.map(function (el) {
        return new Date().getFullYear() - el.buildYear;
    });

    sum = calc(ages);
    console.log('Our  ' + p.length + ' parks have an average of ' + sum[1] + ' years');
    // 3. name of park which has more than 1000 trees
    var i = p.map(function (el) {
        return el.numberOfTree;
    }).findIndex(function (el) {
        return el >= 1000;
    });
    console.log(p[i].name + ' has more than 1000 tress  ');
}

function reportStreets(s) {
    console.log("----STREETS REPORT----");
    // total and average length of the town's street

    var totalLength = calc(s.map(function (el) {
        return el.length;
    }));
    console.log('Our ' + s.length + ' streets have a total length of ' + totalLength[0] + ' km, with a average of ' + totalLength[1] + ' km');
    // size and classification of the all streets: tiny\small\normal\big\huge. default is normal
    s.forEach(function (el) {
        return el.classifyStreet();
    });
}

reportParks(allParks);
reportStreets(allStreets);
