// Let's make a Cat constructor!
var Cat = (function () {
    let cats = {
        count : 0,
        totalWeight : 0,
        averageWeight : 0
    }

    function Cat (name, weight) {
        if (!name || !weight) {
            throw new Error('Both `name` and `weight` should be provided');
        }

        cats.count++;
        this.name = name;

        Object.defineProperty(this, 'weight', {
            get : function () {
                return this._weight || 0;
            },
            set : function (newWeight) {
                cats.totalWeight = cats.totalWeight - this.weight + newWeight;
                cats.averageWeight = cats.totalWeight / cats.count;
                return this._weight = newWeight;
            }
        } ) 

        this.weight = weight;
    }

    Cat.averageWeight = function() {
        return cats.averageWeight;
    }

    return Cat;
}());

garfield = new Cat('garfield', 25);
garfield1 = new Cat('2', 26);
garfield2 = new Cat('3', 27);
// console.log(garfield.cats.count)
console.log(garfield.name)
console.log(garfield.weight)
console.log(Cat.averageWeight())
// console.log(Cat.)
// console.log(garfield2.cats.count)