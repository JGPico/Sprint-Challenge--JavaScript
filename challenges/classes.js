// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerC {
    constructor(attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    } // end constructor
    
    volume() {
        let volume = this.length * this.height * this.width;
        return volume;
    } // end volume

    surfaceArea() {
        let area = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return area;
    } // end surfaceArea

  } // end CuboidMaker

let cuboid2 = new CuboidMakerC ({
    length: 4,
    width: 5,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerC {
    constructor(attrs) {
        super(attrs);
        this.edge = attrs.edge;
    } // end constructor

    volume() {
        let cubeVolume = Math.pow(this.edge, 3);
        return cubeVolume;
    } // end volume

    surfaceArea() {
        let cubeArea = 6 * Math.pow(this.edge, 2);
        return cubeArea;
    } // end surfaceArea
} // end CubeMaker

let cube = new CubeMaker({
    edge: 5
})

console.log(cube.volume() + ' = stretch volume');
console.log(cube.surfaceArea() + ' = stretch surface area');