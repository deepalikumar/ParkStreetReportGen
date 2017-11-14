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


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numberOfTree) {
        super(name, buildYear);
        this.area = area;
        this.numberOfTree = numberOfTree;
    }

    treeDensity() {
       const density = this.numberOfTree / this.area;
       console.log(`${this.name} has a tree density of ${density} tress per square km.`); 
    }

    // calcAge(){
    //     const age = new Date().getFullYear() - this.buildYear;
    // }

    // avgAge() {
    //     const ages = 
    // }
}

class Street extends Element {
    constructor(name, buildYear, length, size) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(1, 'normal');
        classification.set(1, 'big');
        classification.set(1, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} Street`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('Yellow park', 1894, 0.9,3541),
 new Park('Oak Park', 1953, 0.4, 949)];
const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), 
new Street('4th street', 2015, 0.8), new Street('Sunset Boulvard'), 1982, 2.5, 5];



function reportParks(p) {
    console.log("----PARKS REPORT----");
    // Density
    p.forEach( el => el.treeDensity()) ; 
    // 2. average age of each town's park = sum of all ages / number of the parks
   
    
}

function reportStreets(s) {

}


reportParks(allParks);
reportStreets(allStreets);



