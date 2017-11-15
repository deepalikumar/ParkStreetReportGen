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
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} Street`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('Yellow park', 1894, 0.9,3541),
 new Park('Oak Park', 1953, 0.4, 949)];
const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), 
new Street('4th street', 2015, 0.8, 3), new Street('Sunset Boulvard', 1982, 2.5, 5 )];

function calc(arr) {
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0 );
    return [sum , sum/ arr.length];
}

function reportParks(p) {
    console.log("----PARKS REPORT----");
    var sum = [];
    // Density
    p.forEach( el => el.treeDensity()) ; 
    // 2. average age of each town's park = sum of all ages / number of the parks
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);

    sum = calc(ages);
    console.log(`Our  ${p.length} parks have an average of ${sum[1]} years`);
    // 3. name of park which has more than 1000 trees
    const i = p.map( el => el.numberOfTree).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 tress  `)
    
}

function reportStreets(s) {
    console.log("----STREETS REPORT----");
    // total and average length of the town's street
    
    var totalLength = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength[0]} km, with a average of ${totalLength[1]} km`);
    // size and classification of the all streets: tiny\small\normal\big\huge. default is normal
    s.forEach(el => el.classifyStreet());    

}


reportParks(allParks);
reportStreets(allStreets);



