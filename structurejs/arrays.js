class MyArray {
  constructor() {
    this.lenght = 0;
    this.data = {};
  }

  get(index) {
    if (!index) {
      return this.data;
    } else {
      return this.data[index];
    }
  }

  addName(name) {
    this.data[this.lenght] = name;
    this.lenght++;
    return console.log(this.data);
  }

  pop() {
    const lastItem = this.data[this.lenght - 1];
    delete this.data[this.lenght - 1]
    this.lenght--;
    return console.log(lastItem);
  }

  shiftIndex(index) {
    for (let i = index; i < this.lenght -1; i++) {
      this.data[i] = this.data[i + 1];
      delete this.data[i + 1];
    }
    delete this.data[this.lenght - 1];
    this.lenght--
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    console.log(this.data)
    return item;
  }

}

const names = new MyArray();

names.addName('daniel');
names.addName('María');
names.addName('Camilo');
names.addName('Penelope')

names.delete(1);

console.log(names.lenght);
