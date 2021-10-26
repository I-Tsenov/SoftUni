class List {
    constructor(collection = []) {
        this.collection = collection;
        this.size = 0;
    }

    add(element) {
        this.size++;
        this.collection.push(element);
        this.collection.sort((a, b) =>  a - b)
    }
    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.size--;
            let result =  this.collection.splice(index, 1);
            this.collection.sort((a, b) =>  a - b)
            return result;
        } else {
            throw new Error('Index out of boundries!');
        }
    }
    get(index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        } else {
            throw new Error('Index out of boundries!');
        }
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)

// expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");
console.log(list.hasOwnProperty('size'))
// list.add(5);
// console.log(list.get(0))
// expect(myList.get(0)).to.equal(5, "Element wasn't added");
// list.add(3);
// console.log(list.get(0))
// expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");
// list.remove(0);
// console.log(list.get(0))
// console.log(list.size)
// expect(myList.get(0)).to.equal(5, "Element wasn't removed");
// expect(myList.size).to.equal(1, "Element wasn't removed");