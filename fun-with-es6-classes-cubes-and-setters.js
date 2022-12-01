class Cube {

    constructor( length ) {
        this.length = length;
    }

    get volume() {
        return this.length * this.length * this.length;
    }

    set volume(volume) {
        this.length = Math.cbrt(volume);
    }

    get surfaceArea() {
        return 6 * this.length * this.length;
    }

    set surfaceArea(surfaceArea) {
        this.length = Math.sqrt(surfaceArea / 6);
    }

}

var cube = new Cube(2);
// cube.length = 2;
// cube.surfaceArea = 24;
// cube.volume = 1;
console.log(cube.surfaceArea)
console.log(cube.volume);
console.log(cube);
console.log('---------------------');
cube.surfaceArea = 54;
console.log(cube);